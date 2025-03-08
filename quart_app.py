from quart import Quart, request, redirect, render_template, send_from_directory, jsonify, make_response
from pathlib import Path
import minify, requests
from data import data

debug = Path("debug").exists()
minify.minify_files(data)

app = Quart(__name__)

engines = data["engines"]

@app.route("/")
async def index():
    if debug: minify.minify_files(data)
    return await send_from_directory("static", "index.min.html")

@app.route("/search")
async def search():
    q = request.args.get("q")
    b = request.cookies.get("b")
    if not b: b = "!"
    if not q:
        return redirect("/")
    if b in q:
        for bang in data["bangs"]:
            if q.endswith(f" {b}{bang["t"]}"):
                return redirect(bang["u"].replace("{{{s}}}", q.replace(f"{b}{bang['t']}", "").strip()))
        for ai in data["ai"]:
            if q.endswith(f" {ai}") or q.startswith(ai):
                return redirect(data["ai"][ai][1].replace("{{{s}}}", q.replace(ai, "").strip()))
        q = q.split(b)[0]
    return redirect(data["default_engine"]["u"].replace("{{{s}}}", q.strip()))

@app.route("/set-bang")
async def set_bang():
    b = request.args.get("b")
    response = await make_response(redirect("/"))
    response.set_cookie("b", b, max_age=None, expires=None)
    return response

@app.route("/complete/search")
async def complete():
    q = request.args.get("q")
    if not q:
        return redirect("/")
    suggestions = requests.get(f"https://suggestqueries.google.com/complete/search?output=firefox&q={q}", verify=False)
    return suggestions.json()

@app.route("/opensearch.xml")
async def opensearch(): return await send_from_directory(".", "opensearchlocal.xml")

if __name__ == "__main__":
    port = 4664
    if debug:
        app.run(debug=True, port=port, host="0.0.0.0")
    else:
        import uvicorn
        uvicorn.run(app, port=port, host="0.0.0.0")
