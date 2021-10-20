docker network create qa-lab1-network

docker volume create servervol

docker build -t qa-lab1-server .

docker run --name server --net qa-lab1-network --rm --mount source=servervol,target=/usr/app/serverdata qa-lab1-server
