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
    e = request.cookies.get("e")
    if not b: b = "!"
    if not q:
        return redirect("/")
    if b in q:
        for bang in data["bangs"]:
            if q == f"{b}{bang['t']}":
                return redirect("https://" + bang["d"])
            if q.endswith(f" {b}{bang['t']}"):
                return redirect(bang["u"].replace("{{{s}}}", q.replace(f"{b}{bang['t']}", "").strip()))
        for ai in data["ai"]:
            if q.endswith(f" {ai}") or q.startswith(ai):
                return redirect(data["ai"][ai][1].replace("{{{s}}}", q.replace(ai, "").strip()))
        q = q.split(b)[0]
    if e:
        return redirect(e.replace("{{{s}}}", q.strip()))
    else:
        return redirect(data["default_engine"]["u"].replace("{{{s}}}", q.strip()))

@app.route("/api/setBangChar")
async def set_bang():
    b = request.args.get("q")
    response = await make_response(redirect("/"))
    response.set_cookie("b", b, max_age=60*60*24*365*100, expires=None)
    return response

@app.route("/api/unsetBangChar")

@app.route("/api/setDefaultEngine")
async def set_default_engine():
    e = request.args.get("q")
    response = await make_response(redirect("/"))
    response.set_cookie("e", e, max_age=60*60*24*365*100, expires=None)
    return response

@app.route("/api/unsetDefaultEngine")
async def api_unsetDefaultEngine():
    response = await make_response(redirect("/"))
    response.delete_cookie("e")
    return response

@app.route("/api/complete/search")
async def api_completeSearch():
    q = request.args.get("q")
    if not q:
        return redirect("/")
    suggestions = requests.get(f"https://suggestqueries.google.com/complete/search?output=firefox&q={q}", verify=False)
    return suggestions.json()

@app.route("/complete/search")
async def completeSearch():
    return await api_completeSearch()

@app.route("/opensearch.xml")
async def opensearch(): return await send_from_directory(".", "opensearchlocal.xml")

@app.route("/privacy")
async def privacy(): return await render_template("privacy-policy.html")

if __name__ == "__main__":
    port = 4664
    if debug:
        app.run(debug=True, port=port, host="0.0.0.0")
    else:
        import uvicorn
        uvicorn.run(app, port=port, host="0.0.0.0")
