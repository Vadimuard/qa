// import FileSystem from './modules/filesystem';
import FileSystem from './modules/filesystem.js';

const fs = new FileSystem();

fs.mkdir('/bin');
fs.mkdir('/log');
fs.mkdir('/log/logs-2018');
fs.mkdir('/log/logs-2018/logs');
fs.mkdir('/buf');

fs.ls();
fs.ls('/log');
fs.ls('/log/logs-2018');

fs.mv('/log/logs-2018', 'logs');

fs.ls();
fs.ls('/log');
fs.ls('/log/logs-2018');
// fs.mkdir('/bin/sub-bin');

// fs.touch('/bin/first.bin', 'binary 1');
// fs.touch('/bin/second.bin', 'binary 2');
// fs.touch('/log/app.log');
// fs.touch('/buf/first.buf', '--------------');

// fs.appendToFile('/log/app.log', 'app created successfully');
// fs.appendToFile('/buf/first.buf', 'second line of the buffer');
// fs.consumeLastElement('/buf/first.buf');
