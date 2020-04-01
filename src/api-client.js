import fetch from 'node-fetch';
import axios from 'axios';
import needle from 'needle';
import FormData from 'form-data';
import fs from 'fs';
import Blob from 'node-blob';

export const predict = (image) => {
  // fs.readFileSync(image)
  const formData = new FormData();
  formData.append('file', '1');

  const data = {
    image: {
      file: 'spec/resources/icons/edit.png',
      content_type: 'image/png'
    }
  };

  const options = {
    compressed: true,
    accept: 'application/json',
    content_type: 'multipart/form-data',
    multipart: true,
    follow_max: 5,
    follow_keep_method: true
  };

  return needle
    .post('http://webiconsimagepredictor.azurewebsites.net/predict', data, options, function(err, resp, body) {
      console.log(`error: ${err} response: ${resp.statusMessage} body: ${JSON.stringify(body)}`);
    });
};