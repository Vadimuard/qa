docker volume create clientvol

docker build -t client .

docker run --name client --net qa-lab1-network --rm --mount source=clientvol,target=/usr/app/clientdata -p 4000:4000 client
