FROM python:3.7
WORKDIR /usr/app
COPY . .
RUN pip install --no-cache-dir -r requirements.txt
CMD ["python", "app.py", ${FILE_SERVER_PORT}]
