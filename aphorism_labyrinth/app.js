var express = require('express');
var app = express();
var port= 5009;
var url = "192.168.1.251"
var server = app.listen(port);
app.use(express.static(__dirname + '/'));//serve diectory this file is in
console.log('Simple static server listening at '+url+':'+port);


//sudo node app.js