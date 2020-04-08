import { predict } from './src/api-client';

// export { predict };
predict('../spec/resources/icons/edit.png')
  .then(console.log)
  .catch(console.log);
