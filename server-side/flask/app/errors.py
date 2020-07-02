from flask import render_template
from app import app


@app.errorhandler(404)
def not_found_error(error):
    return render_template('error.html', error_name="404 - The Page can't be found"), 404

