# docker-tutorial

Some usefull commands :

docker ps -a   ----> To list running containers

docker compose up  ---> To build project

docker compose up --build -d --> To build after updating changes

docker compose down ---> To remove containers

docker exec docker-tutorial_server_1 npm run seed
docker exec docker-tutorial_server_1 npm run migrate
