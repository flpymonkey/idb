# Tools

## Using Docker for NatPhoto development

NatPhoto.me runs on a dockerized server which uses NGINX and uwsgi. The docker  
image is based on the [tiangolo/uwsgi-nginx-flask](https://hub.docker.com/r/tiangolo/uwsgi-nginx-flask/) image in  
DockerHub. We developed the image with the help of [this tutorial](https://ianlondon.github.io/blog/deploy-flask-docker-nginx/).

## Makefile Commands

The make file can be found at `idb/Makefile` in our project directory.

Below are useful Makefile commands for working on the project:

* `$ make run` Run the Flask application in debug mode locally. This is  
  essentially the same as running the app using python alone. The app can be  
  viewed at `localhost:5000` when run in this mode.

* `$ make scrub` Clean up everything.

* `$ make docker_dev` Build the Dockerfile.dev image. This docker image is a  
  python 3.6.2 image that can be used for development.

* `$ make docker_web` Build the Dockerfile.web image. This docker image is the  
  actual server that is run on AWS.

* `$ make docker` Build and start the development image interactively. The  
  development environment can be stopped by typing `$ exit` in the interactive  
  bash shell.

* `$ make serve` Build and start the server image as a daemon in the  
  background. The app will be hosted at `localhost:80` a.k.a.  `localhost`  
  a.k.a. your computer's local IP address. Consequently, if you are on the same  
  network, others can go to your local IP address and see the hosted site. i.e.  
  `192.168.1.12`. This is the exact thing that is run on the server and can  
  be used to test how the app will work when deployed to AWS.

* `$ make halt` Stop the docker container that is running the server in the  
  background. This command is essentially the opposite of `$ make serve` and  
  stops the server.

* `$ make selenium` runs selenium tests

* `$ make frontend` runs frontend tests

* `$ make backend` runs backend tests

## Running React in a development environment

A React build of the current app can be built using the command `npm run build` in the `react\natphoto` directory using the node package manager. This build is what we upload to Amazon S3 for hosting a production build.

Running React in the development environment is accomplished using the command `npm start` in the `react\natphoto` directory.
