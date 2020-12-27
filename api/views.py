from flask import Blueprint

main = Blueprint('main', __name__)

@main.route('/add_linguists', methods=['POST'])
def add_linguists():

    return 'Done', 201

@main.route('/linguists')
def linguists():
    linguists = []

    return {'linguists': linguists}
