import htmlmin, jsmin, csscompressor
from jinja2 import Template

def minify_files(data):
    app_js = open("src/app.js").read()
    app_js_min = jsmin.jsmin(app_js)
    
    style_css = open("src/style.css").read()
    style_css_min = csscompressor.compress(style_css)
    
    index_html = Template(open("src/index.html").read()).render(data)
    index_html_min = htmlmin.minify(index_html, remove_comments=True, remove_empty_space=True)
    
    index_html_min += f"<style>{style_css_min}</style><script>{app_js_min}</script>"
    with open("static/index.min.html", "w") as f: f.write(index_html_min)
