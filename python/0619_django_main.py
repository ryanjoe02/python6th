import http
from urllib.parse import urljoin, urlunparse
import urllib.request
from urllib.request import urlopen
from html.parser import HTMLParser
from pathlib import Path
from urllib.request import urlretrieve

url = 'https://www.google.com'

request = urllib.request.Request(url)
response = urllib.request.urlopen(request)

html = response.read()

#print(html)

class ImageParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.result = []

    def handle_starttag(self, tag, attrs):
        if tag != 'img':
            return
        if not hasattr(self, 'result'):
            self.result = []
        
        for name, value in attrs:
            if name == 'src':
                self.result.append(value)
    
def parse_image(data):
    parser = ImageParser()
    parser.feed(data)
    dataSet = set(x for x in parser.result)
    return dataSet

def download_image(url, data):
    download_dir = Path("DOWNLOAD")
    download_dir.mkdir(exist_ok=True)
    
    parser = ImageParser()
    parser.feed(data)
    data_set = set(x for x in parser.result)
    for x in sorted(data_set):
        image_url = urljoin(url, x)
        basename = Path(image_url).name
        target_file = download_dir / basename
        print(target_file)

        print("Downloading...", image_url)
        urlretrieve(image_url, target_file)

def main():
    url = 'https://google.co.kr'
    # with urlopen(url) as f:
    #     charset = f.headers.get_params('charset')[1][1]
    #     data = f.read().decode(charset)
    host = "www.google.co.kr"
    conn = http.client.HTTPConnection(host)
    conn.request('GET', '')
    resp = conn.getresponse()

    charset = resp.msg.get_param('charset')
    print("charset: ", charset)
    data = resp.read().decode(charset)
    conn.close()

    print("\n>>>>>>>> Downloading...", host)
    url = urlunparse(('http', host, '', '', '', ''))
    #--------------------------------------------

    data_set = parse_image(data)
    print("\n>>>>> Fatch Images from ", url)
    print("\n".join(sorted(data_set)))
    download_image(url, data)

if __name__ == '__main__':
    main()