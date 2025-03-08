from flask import Flask, render_template, request, redirect, send_from_directory
from pathlib import Path
import minify, requests
from data import data

debug = Path("debug").exists()
minify.minify_files(data)

app = Flask(__name__)

engines = data["engines"]

@app.route("/")
def index():
    if debug: minify.minify_files(data)
    return send_from_directory("static", "index.min.html")

@app.route("/search")
def search():
    q = request.args.get("q")
    if not q:
        return redirect("/")
    if "!" in q:
        for bang in data["bangs"]:
            if q.endswith(f" {bang['bang']}") or q.startswith(bang["bang"]):
                return redirect(bang["url"].replace("{{{s}}}", q.replace(bang["bang"], "").strip()))
        for ai in data["ai"]:
            if q.endswith(f" {ai}") or q.startswith(ai):
                return redirect(data["ai"][ai][1].replace("{{{s}}}", q.replace(ai, "").strip()))
        q = q.split("!")[0]
    return redirect(data["default_engine"]["url"].replace("{{{s}}}", q.strip()))

@app.route("/complete/search")
def complete():
    q = request.args.get("q")
    if not q:
        return redirect("/")
    suggestions = requests.get(f"https://suggestqueries.google.com/complete/search?output=firefox&q={q}", verify=False)
    return suggestions.json()

@app.route("/opensearch.xml")
def opensearch(): return send_from_directory(".", "opensearchlocal.xml")

if __name__ == "__main__":
    port = 4664
    app.run(port=port, host="0.0.0.0")
