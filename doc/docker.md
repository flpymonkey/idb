# Using Docker for NatPhoto development

NatPhoto.me runs on a dockerized server which uses NGINX and uwsgi. The docker
image is based on the [tiangolo/uwsgi-nginx-flask][tiangolo] image in
DockerHub. We developed the image with the help of [this tutorial][tutorial].

# Makefile Commands

Below are some useful Makefile commands for working on the project:

- `$ make run` Run the Flask application in debug mode locally. This is essentially
the same as running `$ python main.py`.


[tiangolo]: https://hub.docker.com/r/tiangolo/uwsgi-nginx-flask/
[tutorial]: https://ianlondon.github.io/blog/deploy-flask-docker-nginx/
