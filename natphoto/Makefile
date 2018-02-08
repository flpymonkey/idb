.DEFAULT_GOAL := run

FILES :=             \
	app/main.py

run:
	python3 app/main.py

clean:
	rm -rf __pycache__

docker:
	docker build -t natphoto .

serve: docker
	docker run -d --name natphoto_run --restart=always -p 80:80 -t natphoto

halt:
	docker kill natphoto_run
	docker rm   natphoto_run

