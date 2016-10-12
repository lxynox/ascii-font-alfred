var figlet = require('figlet');

var sourceText = process.argv[2];

figlet.text(sourceText, function(err, text) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(text);
});

