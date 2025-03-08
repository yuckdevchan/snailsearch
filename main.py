from pathlib import Path

debug = Path("debug").exists()

if Path("useFlask").exists():
    from flask_app import app
    app.run(port=4664, host="0.0.0.0")
else:
    from quart_app import app
    if debug:
        app.run(debug=True, port=4664, host="0.0.0.0")
    else:
        import uvicorn
        uvicorn.run(app, port=4664, host="0.0.0.0")
