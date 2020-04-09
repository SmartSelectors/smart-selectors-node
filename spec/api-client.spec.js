import needle from 'needle';
import FileType from 'file-type';

import { predict } from '../src/api-client';

describe('The remote api client', () => {
  let postSpy;
  beforeEach(() => {
    // stubbing the neede.post callback function
    postSpy = spyOn(needle, 'post').and.callFake(
      (arg1, arg2, arg3, callback) => {
        callback(null, {}, { status: 200 });
      }
    );
  });

  it('should not allow an empty file to be passed as an argument', async () => {
    await expectAsync(predict('')).toBeRejectedWithError(
      'Empty path is not a valid path'
    );
    expect(postSpy).not.toHaveBeenCalled();
  });

  it('should allow a jpeg file to be predicted', async done => {
    const ftSpy = spyOn(FileType, 'fromFile').and.resolveTo({
      mime: 'image/jpeg',
    });

    await expectAsync(
      predict('../spec/resources/icons/arrow.jpg')
    ).toBeResolved();
    expect(ftSpy).toHaveBeenCalledTimes(1);
    expect(postSpy).toHaveBeenCalledTimes(1);
    done();
  });

  it('should allow a png file to be predicted', async () => {
    await expectAsync(
      predict('../spec/resources/icons/edit.png')
    ).toBeResolved();
    expect(postSpy).toHaveBeenCalledTimes(1);
  });

  it('should not allow other file types to be predicted', async () => {
    await expectAsync(
      predict('../spec/resources/bad-file.txt')
    ).toBeRejectedWithError();
    expect(postSpy).not.toHaveBeenCalled();
  });

  it('should be able to handle full paths', async () => {
    const absolutePath = '/spec/resources/icons/edit.png';
    await expectAsync(predict(absolutePath)).toBeRejectedWithError(
      `"${absolutePath}" is not a valid path`
    );
    expect(postSpy).not.toHaveBeenCalled();
  });
});
