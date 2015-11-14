var express = require('express');
var app = express();
var port= 8000;
var url = "149.31.130.23"
var server = app.listen(port);
app.use(express.static(__dirname + '/'));//serve diectory this file is in
console.log('Simple static server listening at '+url+':'+port);


//sudo node app.js