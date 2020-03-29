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
          console.log(data)
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

module.exports = async function (callback) {
  // getRequest('www.goodreads.com', '/list/book/18051086.xml?key=' + key, true, function(books){
  //   var tempBook;
  //   var resArray = [];
  //   for (item in books.search[0].results[0].work) {
  //     tempBook = books.search[0].results[0].work[item].best_book[0];
  //     if (tempBook['$'].type == 'Book') {
  //       resArray.push({
  //         'bookID' : tempBook.id[0]._,
  //         'title' : tempBook.title[0],
  //         'author' : tempBook.author[0].name[0],
  //         'imgURL' : tempBook.image_url[0]
  //       });
  //     };
  //   };
  //   callback(books);
  // });
  callback([
    {
      title: "Our Picks",
      data: [
        {
          "bookID": "6759",
          "title": "Infinite Jest",
          "author": "David Foster Wallace",
          "imgURL": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1446876799l/6759._SX98_.jpg"
        },
        {
          "bookID": "3805",
          "title": "The Corrections",
          "author": "Jonathan Franzen",
          "imgURL": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1355011305l/3805._SX98_.jpg"
        },
        {
          "bookID": "28676",
          "title": "American Psycho",
          "author": "Bret Easton Ellis",
          "imgURL": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1436934349l/28676._SX98_.jpg"
        },
        {
          "bookID": "392563",
          "title": "The Rest Is Noise: Listening to the Twentieth Century",
          "author": "Alex  Ross",
          "imgURL": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1311973474l/392563._SX98_.jpg"
        }
      ]
    },
    {
      title: "Community Favorites",
      data: [
        {
          "bookID": "170448",
          "title": "Animal Farm",
          "author": "George Orwell",
          "imgURL": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1325861570l/170448._SY160_.jpg"
        },
        {
          "bookID": "338798",
          "title": "Ulysses",
          "author": "James Joyce",
          "imgURL": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1428891345l/338798._SX98_.jpg"
        },
        {
          "bookID": "415",
          "title": "Gravity's Rainbow",
          "author": "Thomas Pynchon",
          "imgURL": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1414969925l/415._SX98_.jpg"
        },
        {
          "bookID": "24113",
          "title": "Gödel, Escher, Bach: An Eternal Golden Braid",
          "author": "Douglas R. Hofstadter",
          "imgURL": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1547125681l/24113._SX98_.jpg"
        },
        {
          "bookID": "36696533",
          "title": "New Dark Age: Technology and the End of the Future",
          "author": "James Bridle",
          "imgURL": "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png"
        },
      ]
    },
    {
      "title" : "Tearjerkers",
      "data" : [
        {
          "bookID": "22822858",
          "title": "A Little Life",
          "author": "Hanya Yanagihara",
          "imgURL": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1446469353l/22822858._SX98_.jpg"
        },
        {
          "bookID": "38447",
          "title": "The Handmaid's Tale (The Handmaid's Tale, #1)",
          "author": "Margaret Atwood",
          "imgURL": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1578028274l/38447._SX98_.jpg"
        },
        {
          "bookID": "166997",
          "title": "Stoner",
          "author": "John  Williams",
          "imgURL": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1320600716l/166997._SX98_.jpg"
        },
        {
          "bookID": "6288",
          "title": "The Road",
          "author": "Cormac McCarthy",
          "imgURL": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1439197219l/6288._SY160_.jpg"
        },
        {
          "bookID": "4981",
          "title": "Slaughterhouse-Five",
          "author": "Kurt Vonnegut Jr.",
          "imgURL": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1440319389l/4981._SY160_.jpg"
        }
      ]
    },
    {
      "title" : "Urban Studies",
      "data" : [
        {
          "bookID": "25542140",
          "title": "Imaginary Cities",
          "author": "Darran Anderson",
          "imgURL": "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png"
        },
        {
          "bookID": "17375",
          "title": "The Meaning of It All: Thoughts of a Citizen-Scientist",
          "author": "Richard P. Feynman",
          "imgURL": "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png"
        },
        {
          "bookID": "931984",
          "title": "The Presentation of Self in Everyday Life",
          "author": "Erving Goffman",
          "imgURL": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1400075101l/931984._SX98_.jpg"
        },
        {
          "bookID": "17945689",
          "title": "Why Place Matters: Geography, Identity, and Civic Life in Modern America",
          "author": "Wilfred M. McClay",
          "imgURL": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1391615167l/17945689._SX98_.jpg"
        },
      ]
    }
  ])
}
