from pathlib import Path

debug = Path("debug").exists()

port = 4664

if Path("useFlask").exists():
    from flask_app import app
    app.run(port=port, host="0.0.0.0")
else:
    from quart_app import app
    if debug:
        app.run(debug=True, port=port, host="0.0.0.0")
    else:
        import uvicorn
        uvicorn.run(app, port=port, host="0.0.0.0")
