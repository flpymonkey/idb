GithubID = flpymonkey
RepoName = idb
SHA      = 1ff0b4db0fe88cf179e63a83405d7bbf177753b0

.PHONY: frontend backend

githubid:
	@echo "${GithubID}"

reponame:
	@echo "${RepoName}"

sha:
	@echo "${SHA}"

# The Makefile should be present in the root of the project.
# There should be the following commands written:

# make github     - prints link to github repo
github:
	@echo "http://www.github.com/${GithubID}/${RepoName}"

# make issues     - prints link to current phase's issues
issues:
	@echo "http://www.github.com/${GithubID}/${RepoName}/issues"

# make stories    - prints link to current phase's stories
stories:
	@echo "http://www.github.com/${GithubID}/${RepoName}/projects/1"

# make uml        - prints link to uml diagram
uml:
	@echo "http://www.github.com/${GithubID}/${RepoName}/blob/${SHA}/uml_diagram.png"

# make selenium   - runs selenium tests
selenium: install
	cd frontend && python guitests.py

# make frontend   - runs frontend tests
frontend: install
	@(cd frontend; npm test)

# make backend    - runs backend tests
backend: install
	cd backend && python tests.py

# make website    - prints link to a website
website:
	@echo "http://natphoto.me/"

# make report     - prints link to technical report
report:
	@echo "http://${GithubID}.gitbooks.io/report/"

# make apidoc     - prints link to api documentation
apidoc:
	@echo "http://${GithubID}.gitbooks.io/api/"

# make self       - prints link to self critique
self:
	@echo "http://${GithubID}.gitbooks.io/report/doc/self-critique.html"

# make other      - prints link to other critique
other:
	@echo "http://${GithubID}.gitbooks.io/report/doc/other-critique.html"

# make present    - prints link to gitpitch presentation
present:
	@echo "http://gitpitch.com/${GithubID}/${RepoName}"

# make install    - install frontend and backend requirements
install:
	-pip install -r requirements.txt
	-cd frontend && npm install

# make travis     - run frontend and backend tests on travis
travis: backend frontend

# make run        - run the backend server in debug mode
run:
	cd backend && python3 main.py

# make scrub      - remove more permanent generated files
scrub:
	docker rm natphoto_run
	docker rm natphoto_dev

# make docker_dev - build a docker image for website development
docker_dev:
	docker build -t natphoto_dev -f Dockerfile.dev .

# make docker_web - build a docker image for running the web server
docker_web:
	docker build -t natphoto -f Dockerfile.web .

# make docker     - run the interactive docker development environment
docker: docker_dev
	docker run -it -v $(PWD):/usr/natphoto -w /usr/natphoto natphoto_dev

# make docker_web - run the backend api server as a daemon
serve: docker_web
	docker run -d --name natphoto_run --restart=always -p 80:80 -t natphoto

# make halt       - stop and remove the running backend server
halt:
	docker kill natphoto_run
	docker rm   natphoto_run
