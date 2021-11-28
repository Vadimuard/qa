import File from './file.js';

export class BinaryFile extends File {
  constructor(fileName) {
    super(fileName);
  }

  readFile() {
    return this.content;
  }
}

export class LogFile extends BinaryFile {
  constructor(fileName) {
    super(fileName);
  }

  appendLine(line) {}
}

export class BufferFile extends LogFile {
  constructor(fileName) {
    super(fileName);
  }

  consumeLine() {}
}
