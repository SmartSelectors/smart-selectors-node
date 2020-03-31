import fetch from 'node-fetch';
import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';
import Blob from 'node-blob';

export const predict = (image) => {
  // fs.readFileSync(image)
  const formData = new FormData();
  formData.append('file', '1');

  return axios
    .request({
      baseURL: 'http://webiconsimagepredictor.azurewebsites.net',
      url: 'predict',
      method: 'POST',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      redirect: 'follow',
    })
    .then((data) => data.json())
    .catch((error) => error);
};
// Codigo con Fetch, se tranca al mandarle FormData
// export const predict = (image) => {
//   // fs.readFileSync(image)
//   // const formData = new FormData();
//   // forsmData.append('file', '1');

//   return fetch('http://webiconsimagepredictor.azurewebsites.net/predict', {
//     method: 'POST',
//     body: { hola: 'hola' },
//     // headers: {
//     //   'Content-Type': 'multipart/form-data',
//     // },
//     redirect: 'follow',
//   })
//     .then((data) => data.json())
//     .catch((error) => error);
// };
