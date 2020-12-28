import os
from flask import Flask
from flask_cors import CORS

app = Flask(__name__, static_folder='./build', static_url_path='/')

CORS(app)

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/api/add_linguists', methods=['POST'])
def add_linguists():

    return 'Done', 201

@app.route('/api/linguists', methods=['GET'])
def linguists():
    linguists = [
        {'name': 'Noam Chomsky', 'college': 'University of Pennsylvania'},
        {'name': 'Roman Jakobson', 'college': 'Moscow State University'}
    ]

    return {'linguists': linguists}

if __name__ == "__main__":
    #app.run(debug=False)
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))