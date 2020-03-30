import axios from 'axios';
export const predict = (image) => {
  const url = 'predict';
  const data = { file: Buffer.from(image) };
  const config = {
    method: 'post',
    baseurl: 'https://webiconsimagepredictor.azurewebsites.net/',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    transformResponse: [
      function (data) {
        // Do whatever you want to transform the data
        console.log(data);
        return data;
      },
    ],
  };

  return axios
    .post(url, data, config)
    .then((data) => data)
    .catch((err) => console.error(err));
};
