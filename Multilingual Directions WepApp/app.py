"""
A simple Directions flask app
"""

import flask
from flask.views import MethodView
from directions import Directions  #Add comment

app = flask.Flask(__name__) 

app.add_url_rule('/',
                 view_func=Directions.as_view('directions'),
                 methods=['GET', 'POST'])

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
