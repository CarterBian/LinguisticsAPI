import requests
import bs4
from bs4 import BeautifulSoup

def linguists():
    page = requests.get('https://www.thefamouspeople.com/linguists.php')
    soup = BeautifulSoup(page.content, 'html.parser')
    text = soup.find_all('div', {"class":'wrapper'})
    linguist = []
    for count, s in enumerate(text):
        if count == 3:
            continue
        name = s.find('a').text
        nationality = s.find_all('div', {"class":'desc-q'})[1].text[s.find_all('div', {"class":'desc-q'})[1].text.find(':') + 2:]
        linguist.append({'name': name, 'nationality': nationality})
    return {'linguists': linguist}