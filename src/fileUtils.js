import fs from 'fs';
import path from 'path';
import FileType from 'file-type';

export const isPathAString = somePath =>
  typeof somePath === 'string' || somePath instanceof String;

export const isPathEmpty = somePath => somePath === '';

export const resolveFullPath = somePath => path.resolve(__dirname, somePath);

export const isPathExistent = somePath =>
  fs.existsSync(resolveFullPath(somePath));

export const isValidFile = async somePath => {
  if (!isPathExistent(somePath)) {
    throw new Error('invalid path');
  }

  const res = await FileType.fromFile(resolveFullPath(somePath));
  const result = (res && res.mime) || 'not-found';
  return ['image/jpeg', 'image/png'].includes(result);
};
