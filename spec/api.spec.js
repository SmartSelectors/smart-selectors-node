import { predict } from '../src/api-client';

describe('Remote api client', async () => {
  it('should be able to predict an images category, awaiting', async () => {
    try {
      let data = await predict('spec/resources/icons/edit.png');
      expect(data.success).toBeTrue();
    } catch (error) {
      console.error('OHH');
    }
  });
});
