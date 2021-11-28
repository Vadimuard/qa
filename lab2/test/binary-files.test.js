import FileSystem from "../modules/filesystem";

const fs = new FileSystem();
fs.mkdir("/bin");
fs.touch("/bin/first.bin", "binary 1");
fs.touch("/bin/second.bin", "binary 2");
fs.touch("/bin/third.bin");

test("reading files with contents should return the contents", () => {
  expect(fs.cat("/bin/first.bin")).toEqual("binary 1");
  expect(fs.cat("/bin/second.bin")).toEqual("binary 2");
  expect(fs.cat("/bin/third.bin")).toEqual("");
});

fs.rm("/bin/third.bin");

test("after deleting a file it should not be present in the ls command", () => {
  expect(fs.ls("/bin")).toEqual("first.bin\nsecond.bin");
});

test("removing file that does not exist throws an error message", () => {
  expect(fs.rm("/bin/third.bin")).toThrow('Error: "third.bin" does not exist');
});

fs.mv("/bin/first.bin", "/bin/main.bin");

test("after moving a file it should appear in the new location, not the old one", () => {
  expect(fs.ls("/bin")).toEqual("/bin/main.bin\nsecond.bin");
});
