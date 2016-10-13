var figlet = require('figlet');

var filterText =  process.argv[2].trim();

figlet.fonts(function(err, fonts) {
  if (err) {
    console.log(err);
    return;
  }

  var outputs = [];
  fonts
    .filter(function(font) {
      return font.toLowerCase().indexOf(filterText.toLowerCase()) !== -1;
    })
    .forEach(function(font, idx, arr) {
      figlet.metadata(font, function(err, options, headerComments) {
        if (err) {
          console.log(err);
          return;
        }

        outputs.push({
          title: font,
          subtitle: headerComments,
          arg: font
        });

        if (outputs.length === arr.length)
          console.log(JSON.stringify({ items: outputs }));
      });
    });

});
