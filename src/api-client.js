import needle from 'needle';

export const predict = (image) => {
  return new Promise((resolve, reject) => {
    const data = {
      image: {
        file: 'spec/resources/icons/edit.png',
        content_type: 'image/png',
      },
    };

    const options = {
      compressed: true,
      accept: 'application/json',
      content_type: 'multipart/form-data',
      multipart: true,
      follow_max: 5,
      follow_keep_method: true,
    };

    needle.post(
      'http://webiconsimagepredictor.azurewebsites.net/predict',
      data,
      options,
      function (err, resp, body) {
        if (err) return reject(err);
        resolve(body);
      }
    );
  });
};
