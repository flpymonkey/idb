GithubID = flpymonkey
RepoName = idb
SHA      = 357a29c74dd587f3bcef4636e4a33ef79b9150ba

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
	@(cd react/natphoto; npm test)

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

# run frontend and backend tests on travis
travis: backend frontend
