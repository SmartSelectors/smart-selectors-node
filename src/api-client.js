import needle from 'needle';
import endpoint from './config/endpoint.json';

import {
  isPathAString,
  isPathEmpty,
  isPathExistent,
  isValidFile,
  resolveFullPath,
} from './fileUtils';

const formData = {
  image: {
    file: '',
    content_type: 'image/png',
  },
};

const clientOptions = {
  compressed: true,
  accept: 'application/json',
  content_type: 'multipart/form-data',
  multipart: true,
  follow_max: 5,
  follow_keep_method: true,
};

const throwError = errorMsg => {
  throw new Error(errorMsg);
};

const validateImagePath = async imagePath => {
  if (!isPathAString(imagePath)) {
    throwError('Path should be a string');
  }

  if (isPathEmpty(imagePath)) {
    throwError('Empty path is not a valid path');
  }

  if (!isPathExistent(imagePath)) {
    throwError(`"${imagePath}" is not a valid path`);
  }

  const fullPath = resolveFullPath(imagePath);

  if (!(await isValidFile(fullPath))) {
    throwError(
      `"${imagePath}" is not a valid extension file, it should be either a 'jpg' or a 'png'`
    );
  }
};

export const predict = async imagePath => {
  await validateImagePath(imagePath);
  formData.image.file = resolveFullPath(imagePath);
  const { host, route } = endpoint;
  return new Promise((resolve, reject) => {
    needle.post(`${host}${route}`, formData, clientOptions, function (
      err,
      resp,
      body
    ) {
      if (err) return reject(err);
      resolve(body);
    });
  });
};
