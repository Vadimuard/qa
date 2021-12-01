import FileSystem from '../modules/filesystem.js';
import { NOT_FOUND_ERROR } from '../constants.js';

const fs = new FileSystem();

test('reading files with contents should return the contents', () => {
  fs.mkdir('/bin');
  fs.touch('/bin/first.bin', 'binary 1');
  fs.touch('/bin/second.bin', 'binary 2');
  fs.touch('/bin/third.bin');
  expect(fs.cat('/bin/first.bin')).toEqual('binary 1');
  expect(fs.cat('/bin/second.bin')).toEqual('binary 2');
  expect(fs.cat('/bin/third.bin')).toEqual('');
});

test('after deleting a file it should not be present in the ls command', () => {
  fs.rm('/bin/third.bin');
  expect(fs.ls('/bin')).toEqual('/first.bin\n/second.bin');
});

test('removing file that does not exist throws an error message', () => {
  expect(() => {
    fs.rm('/bin/third.bin');
  }).toThrow(NOT_FOUND_ERROR('/third.bin'));
});

test('after moving a file it should appear in the new location, not the old one', () => {
  fs.mv('/bin/first.bin', '/bin/main.bin');
  expect(fs.ls('/bin')).toEqual('/main.bin\n/second.bin');
});
