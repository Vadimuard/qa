from flask import Flask, request
import requests
from nanoid import generate

app = Flask(__name__)


@app.route('/')
def index():  # put application's code here

    file_content = requests.get('http://localhost:3000').text

    filename = generate()

    f = open(f'clientdata/{filename}', 'a')
    f.write(str(file_content))
    f.close()
    return f'Success! File {filename} was created'


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3001)
