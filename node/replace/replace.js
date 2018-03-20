var fs = require('fs')
var someFile = 
fs.readFile('../this/dialog.html', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    console.log('data',  data)
    var result = data.replace(/content/g, 'console.log');

    fs.writeFile('index.html.html', result, 'utf8', function (err) {
        if (err) return console.log(err);
    });
})

var fs = require('fs');

function readFiles(dirname, onFileContent, onError) {
  fs.readdir(dirname, function(err, filenames) {
    if (err) {
      onError(err);
      return;
    }
    filenames.forEach(function(filename) {
      fs.readFile(dirname + filename, 'utf-8', function(err, content) {
        if (err) {
          onError(err);
          return;
        }
        onFileContent(filename, content);
      });
    });
  });
}

var data = {};
readFiles('dirname/', function(filename, content) {
  data[filename] = content;
}, function(err) {
  throw err;
});