var express = require("express");
var app = express();
var logger = require("morgan");
var PORT = 6000;

app.use(express.static(__dirname+ "/public");


app.listen(PORT, function() {
  console.log("listening on", PORT);
})

