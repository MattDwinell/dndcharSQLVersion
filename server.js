var express = require('express');
var PORT = process.env.PORT || 8080;
var app = express();
var path = require('path');
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var routes = require('./controllers/characters_controller.js');
app.use(routes);
app.listen(PORT, function(){
    console.log('current port:' + PORT);
})