FILE_SERVER_HOST=server
FILE_SERVER_PORT=3000

docker network create lab1_net
docker volume create servervol
docker build -t lab1_server .
echo docker run --name ${FILE_SERVER_HOST} --net lab1_net --rm --mount source=servervol,target=/usr/app/serverdata --env FILE_SERVER_PORT=${FILE_SERVER_PORT} lab1_server
docker run --name ${FILE_SERVER_HOST} --net lab1_net --rm --mount source=servervol,target=/usr/app/serverdata --env FILE_SERVER_PORT=${FILE_SERVER_PORT} lab1_server
