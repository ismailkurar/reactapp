# reactapp
dummy react app


## docker commands ##

1 - first run ``` npm run deploy ``` (build and move built files to the server)
2 - exec ssh (connect to server via ssh)
4 - sudo docker stop docker-nginx (stop running container with name docker-nginx)
5 - sudo docker rm docker-nginx (delete container)
6 - sudo docker run --name docker-nginx -p 80:80 -d -v ~/docker-nginx/html:/usr/share/nginx/html -v ~/docker-nginx/default.conf:/etc/nginx/conf.d/default.conf nginx
(run container with name docker-nginx, port mapping 80 t0 80, make link)

