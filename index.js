var figlet = require('figlet');

var font = process.argv[2] === 'NONE'? 'Standard' : process.argv[2];
var sourceText = process.argv[3];

figlet.text(sourceText, {
  font: font,
  horizontalLayout: 'default',
  verticalLayout: 'default'
}, function(err, text) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(
    text
  );
});

