# Create a flask app to serve a simple HTML page
from flask import Flask, render_template
app = Flask(__name__)

# Create a route for the index page
@app.route('/')
def index():
    return render_template('index.html')

# Route for solarsystem.html
@app.route('/solarsystem')
def solarsystem():
    return render_template('solarsystem.html')

# Route for inline-css.html
@app.route('/inline-css')
def inline_css():
    return render_template('inline-css.html')

# Route for internal-css.html
@app.route('/internal-css')
def internal_css():
    return render_template('internal-css.html')

# route for external-css.html that calls styles.css from the static folder
@app.route('/external-css')
def external_css():
    return render_template('external-css.html')

# Route for index-css.html
@app.route('/index-css')
def index_css():
    return render_template('index-css.html')
    
# Run the app
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)

