import FileSystem from '../modules/filesystem';

const fs = new FileSystem();

fs.mkdir('log');
fs.touch('/log/app.log');
fs.appendToFile('/log/app.log', 'app created successfully');
fs.appendToFile('/log/app.log', 'request GET /?r_options=383 received');

test('after appeding a line to the log it should be in the file', () => {
  expect(fs.cat('/log/app.log')).toEqual(
    'app created successfully\nrequest GET /?r_options=383 received'
  );
});
