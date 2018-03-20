"""
main.py
natphoto
"""

from flask import Flask, render_template
import requests

GITHUB_ROOT_ = "https://api.github.com"
USERS_ = ["flpymonkey", "jhbell", "vargasbri2", "tonydenapoli", "dayannyc"]

app = Flask(__name__)

# Consider importing datetime and using timedelta for
# only photos within a certain time delta TODO

@app.route("/")
def main():
    return render_template("mainpage.html")

@app.route("/about")
def about():
    commits = get_user_commits()
    issues  = get_user_issues()
    total_commits = sum(commits.values())
    total_issues = sum(issues.values())

    return render_template("about.html", 
                           commits=commits,
                           issues=issues,
                           total_commits=total_commits,
                           total_issues=total_issues)

# Routes for our general model gird pages
@app.route("/cameras")
def view_cameras():
    return render_template("cameragridpage.html")

@app.route("/parks")
def view_parks():
    return render_template("parkgridpage.html")

@app.route("/photos")
def view_photos():
    return render_template("photogridpage.html")

# Routes for our example model instance pages
# Hard coded routes for instance pages. BAD #FIXME
@app.route("/camera/1")
def camera1():
    return render_template("nikoncoolpix.html")

@app.route("/camera/2")
def camera2():
    return render_template("nikond1700.html")

@app.route("/camera/3")
def camera3():
    return render_template("canon.html")

@app.route("/park/1")
def park1():
    return render_template("deathvalley.html")

@app.route("/park/2")
def park2():
    return render_template("yellowstone.html")

@app.route("/park/3")
def park3():
    return render_template("yosemite.html")

@app.route("/photo/1")
def photo1():
    return render_template("yellowstonenationalpark-3.html")

@app.route("/photo/2")
def photo2():
    return render_template("mesquiteflatdunes.html")

@app.route("/photo/3")
def photo3():
    return render_template("halfasunset.html")

def get_json(request_path: str, params: dict={}) -> list:
    """
    Return the JSON result for the given request path
    request_path - the path to the data we are requesting
    """
    url = GITHUB_ROOT_ + request_path
    response = requests.get(url, params=params)
    response = response.json()
    return response

def get_user_commits() -> dict:
    """
    Get the contribution data for the project repository
    return a json responce containing contribution statistics
    """
    path = "/repos/flpymonkey/idb/stats/contributors"
    commit_data = get_json(path)
    print(commit_data)
    commits = {data["author"]["login"]: data["total"] for data in commit_data}
    return commits

def get_user_issues() -> dict:
    """
    Get all of the issues and count by user
    return a dict() of users to the number of issues they created.
    """
    path = "/repos/flpymonkey/idb/issues"
    issues = {}
    for user in USERS_:
        response = get_json(path, {"creator": user, "state": "all"})
        issues[user] = len(response)
    return issues

def add(a: int, b: int) -> int:
    return a + b

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
