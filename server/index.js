var bodyParser = require('body-parser');
var app = require('express');
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
app.listen(3000);
console.log('Running on port 3000');
