var template = require('art-template');

var data = {fuck: "shit"};

var html = template(__dirname + "/templates/test", data);

console.log(html);