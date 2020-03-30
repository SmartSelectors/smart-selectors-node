const api = require('../src/api-client');

describe('Remote api client', () => {
  it("should be able to predict an image's category", () => {
    const { accuracy, prediction, label } = api.predict(
      '../spec/resources/icons/edit.png'
    );

    expect(accuracy).toBeGreaterThan(0);
    expect(prediction).toBeTrue();
    expect(label).toBe('edit');
  });
});
