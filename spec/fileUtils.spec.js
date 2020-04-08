import FileType from 'file-type';

import {
  isPathEmpty,
  isPathAString,
  resolveFullPath,
  isPathExistent,
  isValidFile,
} from '../src/fileUtils';

describe('File utils module', () => {
  it('should know an empty filePath', () => {
    expect(isPathEmpty('')).toBeTrue();
  });

  it('should know an empty filePath', () => {
    expect(isPathEmpty('/')).toBeFalse();
  });

  it('should reject a number as a string', () => {
    expect(isPathAString(5)).toBeFalse();
  });

  it('should reject an object as a string', () => {
    expect(isPathAString({})).toBeFalse();
  });

  it('should recognize a string', () => {
    expect(isPathAString('5')).toBeTrue();
  });

  it('should recognize a String', () => {
    expect(isPathAString(new String('5'))).toBeTrue();
  });

  it('should be able to resolver full path to src folder', () => {
    expect(
      resolveFullPath('').endsWith('/SmartSelectors/smart-selectors-node/src')
    ).toBeTrue();
  });

  it('should be able to find the images located in the icons folder', () => {
    expect(isPathExistent('../spec/resources/icons')).toBeTrue();
  });

  it('should mark a jpg as a valid file', async () => {
    await expectAsync(
      isValidFile('../spec/resources/icons/arrow.jpg')
    ).toBeResolvedTo(true);
  });

  it('should mark a png as a valid file', async () => {
    await expectAsync(
      isValidFile('../spec/resources/icons/edit.png')
    ).toBeResolvedTo(true);
  });

  it('should mark a txt as an invalid file', async () => {
    await expectAsync(
      isValidFile('../spec/resources/bad-file.txt')
    ).toBeResolvedTo(false);
  });

  it('should mark a txt as an invalid file if path is wrong', async () => {
    await expectAsync(
      isValidFile('../spec/resources/icons/bad-file.txt')
    ).toBeRejectedWithError('invalid path');
  });

  it('should resolve to false if filetype is not known', async () => {
    spyOn(FileType, 'fromFile').and.resolveTo(undefined);

    await expectAsync(
      isValidFile('../spec/resources/bad-file.txt')
    ).toBeResolvedTo(false);
  });
});
