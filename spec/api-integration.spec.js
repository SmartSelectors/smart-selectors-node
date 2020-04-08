import { predict } from '../src/api-client';

describe('When calling Smart Selectors endpoint', () => {
  it('should be able to predict an images category', async () => {
    await expectAsync(
      predict('../spec/resources/icons/edit.png')
    ).toBeResolved();
  });
});
