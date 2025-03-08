from flask import Flask, render_template, request, redirect, send_from_directory
from data import data
import os, minify

app = Flask(__name__)

engines = data["engines"]
minify.minify_files(data)

@app.route("/")
def index(): return send_from_directory("static", "index.min.html")


@app.route("/search")
def search():
    q = request.args.get("q")
    if not q:
        return redirect("/")
    if "!" in q:
        for bang in data["bangs"]:
            if q.endswith(f" {bang['bang']}") or q.startswith(bang["bang"]):
                return redirect(bang["url"].replace("{{{s}}}", q.replace(bang["bang"], "").strip()))
        for promptURL in data["promptURLs"]:
            if q.endswith(f" {promptURL}") or q.startswith(promptURL):
                return redirect(data["promptURLs"][promptURL][1].replace("{{{s}}}", q.replace(promptURL, "").strip()))
        q = q.split("!")[0]
    return redirect(data["default_engine"]["url"].replace("{{{s}}}", q.strip()))

@app.route("/opensearch.xml")
def opensearch(): return send_from_directory(".", "opensearchlocal.xml")

if __name__ == "__main__":
    port = 4664
    app.run(port=port, host="0.0.0.0")
