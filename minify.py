import htmlmin, jsmin, csscompressor
from jinja2 import Template
from pathlib import Path

def minify_files(data):
    app_js = open(Path("src/app.js")).read()
    app_js_min = jsmin.jsmin(app_js)
    
    style_css = open(Path("src/style.css")).read()
    style_css_min = csscompressor.compress(style_css)
    
    index_html = Template(open(Path("src/index.html")).read()).render(data)
    index_html_min = htmlmin.minify(index_html, remove_comments=True, remove_empty_space=True)
    
    index_html_min += f"<style>{style_css_min}</style><script>{app_js_min}</script>"
    with open(Path("static/index.min.html"), "w") as f: f.write(index_html_min)
