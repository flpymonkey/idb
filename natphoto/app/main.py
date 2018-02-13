"""
main.py
natphoto
"""

from flask import Flask, render_template

app = Flask(__name__)

# Consider importing datetime and using timedelta for
# only photos within a certain time delta TODO

@app.route("/")
def main():
    return render_template("mainpage.html")

@app.route("/about")
def main():
    return render_template("about.html")

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
    return render_template("TODO.html")

@app.route("/camera/2")
def camera2():
    return render_template("TODO.html")

@app.route("/camera/3")
def camera3():
    return render_template("TODO.html")

@app.route("/park/1")
def park1():
    return render_template("TODO.html")

@app.route("/park/2")
def park2():
    return render_template("TODO.html")

@app.route("/park/3")
def park3():
    return render_template("TODO.html")

@app.route("/photo/1")
def photo1():
    return render_template("TODO.html")

@app.route("/photo/2")
def photo2():
    return render_template("TODO.html")

@app.route("/photo/3")
def photo3():
    return render_template("TODO.html")

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
