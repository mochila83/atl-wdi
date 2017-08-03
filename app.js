// app.js

//require express package
var express = require('express');
//save an express module as 'app'
var app     = express();
// assigning 3000 as our port
var port    = 3000;

// tells the server to listen for requests on port 3000
app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});

app.get('/', function (req, res) {
	res.send('Welcome to Pizza Express!')
});

app.get('/topping/:type', function(req, res, next){
	res.send('pepperoni pizza! Good choice!')
});


app.get('/order/:amount/:size', function(req, res, next) {
	res.send('Your order for 10 medium pizzas will be ready in 1 minute!')
} );

