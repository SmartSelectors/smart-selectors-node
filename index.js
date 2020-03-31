import { predict } from './src/api-client';

predict('spec/resources/icons/edit.png')
  .then((data) => {
    console.log('afksfks');
    console.log(data);
  })
  .catch((err) => {
    console.log('noos');
  });
