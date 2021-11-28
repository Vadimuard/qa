import FileSystem from "../modules/filesystem";

const fs = new FileSystem();
fs.mkdir("bin");

test('creating directory "bin" should result into "/bin" path', () => {
  expect(fs.ls()).toEqual("/bin");
});

test('creating directory "sub-bin" inside of "bin" should result into "/bin/sub-bin" path', () => {
  expect(fs.ls("/bin")).toEqual("/sub-bin");
});

fs.mv("/bin", "/log");

test("after moving directory to another location it should appear in the new locations, not the old one", () => {
  expect(fs.ls("/")).toEqual("/log");
});

fs.mkdir("/bin");
fs.touch("/bin/first.bin", "binary 1");
fs.touch("/bin/second.bin", "binary 2");
fs.touch("/bin/third.bin");

fs.mv("/bin", "/new-bin");

test("after moving directory to another location all children files should remain in the new location", () => {
  expect(fs.ls("/new-bin")).toEqual("first.bin\nsecond.bin\nthird.bin");
});

fs.rm("/new-bin");

test("after removing directory all children should be recursively removed and ls command throws the not found error", () => {
  expect(fs.ls("/new-bin")).toThrow('Error: "new-bin" does not exist');
});
