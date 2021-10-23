FILE_SERVER_HOST=server
FILE_SERVER_PORT=3000

docker volume create clientvol

docker build -t lab1_client .

docker run --name client --net lab1_net --rm --mount source=clientvol,target=/usr/app/clientdata --env FILE_SERVER_HOST=${FILE_SERVER_HOST} --env FILE_SERVER_PORT=${FILE_SERVER_PORT} -p 4000:4000 client
