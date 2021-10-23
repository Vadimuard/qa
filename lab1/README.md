# QA lab1

To run the app

``` bash
docker-compose up
```

To enter running server's container shell

```bash
docker run exec -it lab1_server bash
```

To enter running client's container shell

```bash
docker run exec -it lab1_client bash
```

To enter server's container shell

```bash
docker run --name server --net lab1_net --rm --mount source=servervol,target=/usr/app/serverdata --env FILE_SERVER_PORT=3000 -it lab1_server bash
```

To enter client's container shell

```bash
docker run --name client --net lab1_net --rm --mount source=clientvol,target=/usr/app/clientdata --env FILE_SERVER_HOST=server --env FILE_SERVER_PORT=3000 -it client bash
```
