import FileSystem from "../modules/filesystem";

const fs = new FileSystem();

fs.mkdir("/buf");
fs.touch("/buf/main.buf");

fs.appendToFile("/buf/main.buf", "first line in the buffer");
fs.appendToFile("/buf/main.buf", "second line ---------");

test("after appending lines to file they should be in the file", () => {
  expect(
    fs.cat("/buf/main.buf", "first line in the buffer\nsecond line ---------")
  );
});

test("after consuming a line from the buffer it should be returned from the method and the file no longer should have that line", () => {
  expect(fs.consumeLastElement()).toEqual("second line ---------");
  expect(fs.cat("/buf/main.buf")).toEqual("first line in the buffer");
});
