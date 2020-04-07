import { predict } from '../../src/api-client';

describe('When calling Smart Selectors endpoint', () => {
  it('should be able to predict an images category', async () => {
    let data = await predict('spec/resources/icons/edit.png');
    expect(data.success).toBeTrue();

    // TODO: finish expectations
  });
});
