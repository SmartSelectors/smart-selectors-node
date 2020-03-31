import { predict } from '../src/api-client';

describe('Remote api client', () => {
  it('should be able to predict an images category', () => {
    predict('spec/resources/icons/edit.png')
      .then((data) => {
        data = data.json();
        expect(data.success).toBeTrue();
        console.log(data);
      })
      .catch((error) => {
        console.log('OH NOO!', error);
      });
  });
});
