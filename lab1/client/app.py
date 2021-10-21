from flask import Flask
import requests
from api import save_file, get_checksum_of_file
import sys

app = Flask(__name__)

SERVER_URL = ''

@app.route('/')
def index():
    res = requests.get(SERVER_URL)
    filename = res.headers['Content-Disposition'].split('inline; filename=')[1]
    original_checksum = res.headers['checksum']

    file_content = res.text
    full_path = save_file(filename, file_content)

    local_checksum = get_checksum_of_file(full_path)

    if original_checksum == local_checksum:
        return f'Success! File {filename} was created'
    else:
        return f'Error: checksums are not equal!'


if __name__ == '__main__':
    host = sys.argv[1]
    port = int(sys.argv[2])
    SERVER_URL = f'http://{host}:{port}/'
    print(f'Client is connected to server by url: {SERVER_URL}')
    app.run(host='0.0.0.0', port=4000)

