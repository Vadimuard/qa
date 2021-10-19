from flask import Flask
import requests
from api import save_file

app = Flask(__name__)


@app.route('/')
def index():

    file_content = requests.get('http://localhost:3000').text
    file_name = save_file(file_content)

    return f'Success! File {file_name} was created'


if __name__ == '__main__':
    app.run()
