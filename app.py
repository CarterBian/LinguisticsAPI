import os
from flask import Flask
from flask_cors import CORS
from flask_caching import Cache

app = Flask(__name__, static_folder='build', static_url_path='')

CORS(app)
cache = Cache(app, config={'CACHE_TYPE': 'simple'})

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/api/add_linguists', methods=['POST'])
def add_linguists():

    return 'Done', 201

@cache.cached(timeout=50)
@app.route('/api/linguists', methods=['GET'])
def linguists():
    linguists = [
        {'name': 'Noam Chomsky', 'idea': 'Universal Grammar', 'college': 'University of Pennsylvania'},
        {'name': 'Roman Jakobson', 'idea': 'Distinctive Features', 'college': 'Moscow State University'},
        {'name': 'Robin Lakoff','idea': 'Politeness Principle', 'college': 'Radcliffe College'},
        {'name': 'Eve Clark','idea': 'First Language Acquisition', 'college': 'The University of Edinburgh'}
    ]

    return {'linguists': linguists}

@cache.cached(timeout=50)
@app.route('/api/IOLmedals', methods=['GET'])
def IOLmedals():
    countries = [
        {'country': 'United States', 'Gold': 19, 'Silver': 35, 'Bronze': 20},
        {'country': 'Bulgaria', 'Gold': 19, 'Silver': 20, 'Bronze': 29},
        {'country': 'Russia', 'Gold': 16, 'Silver': 26, 'Bronze': 39},
        {'country': 'United Kingdom', 'Gold': 13, 'Silver': 8, 'Bronze': 13},
        {'country': 'Poland', 'Gold': 9, 'Silver': 22, 'Bronze': 17}
    ]

    return {'countries': countries}

if __name__ == "__main__":
    #app.run(debug=False)
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))