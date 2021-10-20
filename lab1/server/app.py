from flask import Flask, send_file
from api import save_generated_str, get_checksum_of_file


app = Flask(__name__)


@app.route('/')
def index():
    file_path = save_generated_str()
    checksum = get_checksum_of_file(file_path)
    response = send_file(file_path)
    response.headers['checksum'] = checksum
    return response


if __name__ == '__main__':
    app.run(port=3000)
