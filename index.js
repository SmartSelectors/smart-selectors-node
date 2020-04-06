import { predict } from './src/api-client';

predict('spec/resources/icons/edit.png')
  .then((succ) => console.log(succ))
  .catch((err) => console.log(err));
