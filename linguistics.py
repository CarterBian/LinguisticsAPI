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
        if count >= 10:
            break
        data = {}
        name = s.find('a').text
        data['name'] = name
        print(name)
        for i in range(len(s.find_all('div', {"class":'desc-q'}))):
            info = s.find_all('div', {"class":'desc-q'})[i].text
            category = info[:info.find(':')]
            detail = info[info.find(':') + 2:]
            data[category] = detail
        # print(len(s.find_all('div', {"class":'desc-q'})))
        # nationality = s.find_all('div', {"class":'desc-q'})[0].text
        # nationality = nationality[s.find_all('div', {"class":'desc-q'})[1].text.find(':') + 2:]
        # print(nationality)
        # linguist.append({'name': name, 'nationality': nationality})
        linguist.append(data)
    return {'linguists': linguist}