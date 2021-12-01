import FileSystem from '../modules/filesystem';

const fs = new FileSystem();

test('creating directory "bin" should result into "/bin" path', () => {
  fs.mkdir('bin');
  expect(fs.ls()).toEqual('/bin');
});

test('creating directory "sub-bin" inside of "bin" should result into "/bin/sub-bin" path', () => {
  fs.mkdir('/bin/sub-bin');
  expect(fs.ls('/bin')).toEqual('/sub-bin');
});

test('after moving directory to another location it should appear in the new locations, not the old one', () => {
  fs.mv('/bin', '/log');
  expect(fs.ls('/')).toEqual('/log');
});


test('after moving directory to another location all children files should remain in the new location', () => {
  fs.mkdir('/bin');
  fs.touch('/bin/first.bin', 'binary 1');
  fs.touch('/bin/second.bin', 'binary 2');
  fs.touch('/bin/third.bin');

  fs.mv('/bin', '/new-bin');

  expect(fs.ls('/new-bin')).toEqual('/first.bin\n/second.bin\n/third.bin');
});

test('after removing directory all children should be recursively removed and ls command throws the not found error', () => {
  fs.rm('/new-bin');
  expect(() => {
    fs.ls('/new-bin');
  }).toThrow('Error: "/new-bin" does not exist');
});
