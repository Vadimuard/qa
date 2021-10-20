from flask import Flask
import requests
from api import save_file, get_checksum_of_file
import sys

app = Flask(__name__)


@app.route('/')
def index():
    res = requests.get('http://server:3000')
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
    port = int(sys.argv[1])
    app.run(host='0.0.0.0', port=port)
