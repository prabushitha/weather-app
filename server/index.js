var http = require('http');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var API_KEY_WEATHER = "44407d70b194664b59ecf42a7d7d238c";
//using body parser
app.use(bodyParser.json());

/*
 MIDDLEWARE TO ACCEPT CORS
*/
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, PUT');
    next();
});
//create index routes
app.get('/',function(req,res){
	res.send("Welcome to music app");
});

app.get('/weather/:_city',function(req,res){

  var city = req.params._city;
  console.log(city);
  //var query = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid='+API_KEY_WEATHER;
  var host = 'api.openweathermap.org';
  var path = '/data/2.5/weather?q='+city.trim().replace(' ','%20')+'&units=metric&appid='+API_KEY_WEATHER;

  var options = {
    host : host,
    port : 80,
    path : path,
    method : 'GET'
  };
  var request = http.request(options, function (response){
    var body = "";

    // Read the data
    response.on('data', function (chunk){
      body += chunk;
    });

    response.on('end', function(){
      if (response.statusCode === 200) {
        try {
          // Parse the data
          var forecast = JSON.parse(body);
          var weather = {};
          weather["temperature"] = forecast.main.temp;
          weather["humidity"] = forecast.main.humidity;
          weather["wind_speed"] = forecast.wind.speed;
          res.json(weather);
        } catch(error) {
          console.log(error);
        }
      } else {
        console.log('There was an error');
      }
    });
  });
  request.end();
  request.on('error', function(e) {
    console.error(e);
  });
});



app.listen(3000);
console.log('Running on port 3000');
