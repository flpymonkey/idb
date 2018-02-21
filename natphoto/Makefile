.DEFAULT_GOAL := run

FILES :=			\
	app/main.py

run:
	python3 app/main.py

test:
	python3 app/tests.py

clean:
	rm -rf __pycache__

scrub:
	docker rm natphoto_run
	docker rm natphoto_dev

docker_dev:
	docker build -t natphoto_dev -f Dockerfile.dev .

docker_web:
	docker build -t natphoto -f Dockerfile.web .

docker: docker_dev
	docker run -it -v $(PWD):/usr/natphoto -w /usr/natphoto natphoto_dev

serve: docker_web
	docker run -d --name natphoto_run --restart=always -p 80:80 -t natphoto

halt:
	docker kill natphoto_run
	docker rm   natphoto_run
