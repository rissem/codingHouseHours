var express = require("express");
var app = express();

app.get('/hello.txt', function(request, response){
  response.send('Hello World');
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});