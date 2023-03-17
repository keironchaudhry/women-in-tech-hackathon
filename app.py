import os

from flask import Flask, render_template

app = Flask(__name__)

if os.path.exists("env.py"):
    import env


@app.route("/")
def home():
    return render_template("home.html")


if __name__ == "__main__":
    app.run(
        host=os.environ.get("IP"),
        port=int(os.environ.get("PORT")),
        debug=(os.environ.get("ENV_DEBUG")),
    )
