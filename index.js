var express = require('express');
var bodyParser = require('body-parser');

var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');

var app = express();

app.use(bodyParser.json());
app.use(middleware.addHeaders);


app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLoc);
app.get('/occupations', mainCtrl.getOcc);
app.get('/occupations/latest', mainCtrl.getRecentOcc);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbName);
app.get('/family', mainCtrl.getFam);
app.get('/family/:gender', mainCtrl.getFamGen);
app.get('/restaurants/', mainCtrl.getRestaurants);
app.get('/restaurants/:name', mainCtrl.getRestName);
app.get('/restaurants/rating/', mainCtrl.getRating)






var port = 3000;
app.listen(port, function(){
    console.log("currently listening to that punkass on port " + port)
});
