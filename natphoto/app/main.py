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


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
