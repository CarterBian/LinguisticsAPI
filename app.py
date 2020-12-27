from flask import Flask

app = Flask(__name__)

@app.route('/add_linguists', methods=['POST'])
def add_linguists():

    return 'Done', 201

@app.route('/linguists')
def linguists():
    linguists = [
        {'name': 'Noam Chomsky', 'college': 'University of Pennsylvania'},
        {'name': 'Roman Jakobson', 'college': 'Moscow State University'}
    ]

    return {'linguists': linguists}
"""
def create_app():
    app = Flask(__name__)

    from .views import main
    app.register_blueprint(main)

    return app
"""