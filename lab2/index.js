import FileSystem from './modules/filesystem.js';

const fs = new FileSystem();

try {
  fs.mkdir('/bin');
  fs.mkdir('/log');
  fs.mkdir('/log/logs-2018');
  fs.mkdir('/log/logs-2018/logs');
  fs.mkdir('/log/one-more-log');
  fs.mkdir('/buf');

  fs.ls();
  fs.ls('/log');
  fs.ls('/log/logs-2018');

  // fs.rm('/log/logs-2018');
  fs.mv('/log/logs-2018', 'logs');

  fs.ls();
  fs.ls('/log');
  fs.ls('/logs');
  // fs.ls('/log/logs-2018');
  // fs.mkdir('/bin/sub-bin');

  fs.touch('/bin/first.bin', 'binary 1');
  fs.touch('/bin/second.bin', 'binary 2');
  fs.ls('/bin');
  fs.cat('/bin/first.bin');

  fs.touch('/log/first.log', 'App1 logs');
  fs.cat('/log/first.log');

  fs.appendToFile('/log/first.log', 'App1 created successfully');
  fs.cat('/log/first.log');
  // fs.touch('/log/app.log');

  fs.touch('/buf/first.buf');
  fs.appendToFile('/buf/first.buf', 'first line of the buffer');
  fs.appendToFile('/buf/first.buf', 'second line of the buffer');
  fs.cat('/buf/first.buf');

  fs.consumeLastElement('/buf/first.buf');
  fs.cat('/buf/first.buf');
  fs.consumeLastElement('/buf/first.buf');
  fs.consumeLastElement('/buf/first.buf');
  fs.rm('/buf/first.buf');
} catch (err) {
  console.error(err);
}
