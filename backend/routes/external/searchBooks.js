/*#################################################
For: SSW 322
By: Bruno, Hayden, Madeline, Miriam, and Scott
#################################################*/

const https = require('https');
const parseString = require('xml2js').parseString;
const Tokenizer = require('sentence-tokenizer');
const key = require('../../private').GOODREADS_KEY;

var getRequest = async function (url, extension, xml, callback) {
  var type = 'json'
  if (xml) {
    type = 'xml'
  };
  console.log(url + extension)
  var options = {
    hostname: url,
    port: 443,
    path: extension,
    method: 'GET',
    headers: {
      'Content-Type': 'application/' + type
    }
  };

  const port = options.port == 443 ? https : http;

  let output = '';
  const req = port.request(options, (res) => {
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      output += chunk;
    });
    res.on('end', () => {
      if(xml) {
        parseString(output, (err, data) => {
          books = data.GoodreadsResponse;
          callback(books);
        })
      } else {
        callback(output);
      }
    });
  });
  req.on('error', error => {
    res.send('error: ' + error.message);
  });
  req.end();
};

var cleanText = function (rawText) {
  var noB = rawText.split('<b>').join('');
  var noOtherB = noB.split('</b>').join('');
  var cleanText = noOtherB.split('<br />').join(' ');
  var tokenizer = new Tokenizer('Description');
  tokenizer.setEntry(cleanText);
  var description = tokenizer.getSentences()[0] + ' ' + tokenizer.getSentences()[1];
  return [cleanText, description];
};

module.exports = async function (search, callback) {
  getRequest('www.goodreads.com', '/search/index.xml/?key=' + key + '&q=' + search, true, function(books){
    var tempBook;
    var resArray = [];
    for (item in books.search[0].results[0].work) {
      tempBook = books.search[0].results[0].work[item].best_book[0];
      if (tempBook['$'].type == 'Book') {
        resArray.push({
          'bookID' : tempBook.id[0]._,
          'title' : tempBook.title[0],
          'author' : tempBook.author[0].name[0],
          'imgURL' : tempBook.image_url[0]
        });
      };
    };
    callback(resArray);
  });
}
