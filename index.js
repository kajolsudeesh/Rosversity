var express = require("express");
var app = express();
var path = require('path');

const bodyParser = require('body-parser');
const { response } = require("express");
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));



app.set('PORT', process.env.PORT || 5000)

app.use(express.static('public'));


//make way for some custom css, js and images
app.use('/css', express.static(__dirname + '/public/assets/css'));
app.use('/js', express.static(__dirname + '/public/assets/js'));
app.use('/images', express.static(__dirname + '/public/images'));

app.listen(app.get('PORT'), () =>
    console.log(`Server running on port ${app.get('PORT')}`),
)