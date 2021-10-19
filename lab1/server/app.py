from flask import Flask, send_file
from api import save_generated_str


app = Flask(__name__)


@app.route('/')
def index():
    file_path = save_generated_str()
    return send_file(file_path)


if __name__ == '__main__':
    app.run()
