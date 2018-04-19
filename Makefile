GithubID = flpymonkey
RepoName = idb
SHA      = 42eaf88dd355f607046387cb356fa03f898c06eb

.PHONY: frontend backend

githubid:
	@echo "${GithubID}"

reponame:
	@echo "${RepoName}"

sha:
	@echo "${SHA}"

# The Makefile should be present in the root of the project.
# There should be the following commands written:

# make github   - prints link to github repo
github:
	@echo "http://www.github.com/${GithubID}/${RepoName}"

# make issues   - prints link to current phase's issues
issues:
	@echo "http://www.github.com/${GithubID}/${RepoName}/issues"

# make stories  - prints link to current phase's stories
stories:
	@echo "http://www.github.com/${GithubID}/${RepoName}/projects/1"

# make uml      - prints link to uml diagram
uml:
	@echo "http://www.github.com/${GithubID}/${RepoName}/blob/${SHA}/uml_diagram.png"

# make selenium - runs selenium tests
selenium:
	cd frontend && python guitests.py

# make frontend - runs frontend tests
frontend:
	@(cd frontend; npm test)

# make backend  - runs backend tests
backend:
	cd backend && python tests.py

# make website  - prints link to a website
website:
	@echo "http://natphoto.me/"

# make report   - prints link to technical report
report:
	@echo "http://${GithubID}.gitbooks.io/report/"

# make apidoc   - prints link to api documentation
apidoc:
	@echo "http://${GithubID}.gitbooks.io/api/"

# make self     - prints link to self critique
self:
	@echo "http://${GithubID}.gitbooks.io/report/doc/self-critique.html"

# make other    - prints link to other critique
other:
	@echo "http://${GithubID}.gitbooks.io/report/doc/other-critique.html"

present: 
	@echo "http://gitpitch.com/${GithubID}/${RepoName}"


# run frontend and backend tests on travis
travis: backend frontend

run:
	cd backend && python3 main.py

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
