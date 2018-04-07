var express = require('express')  //  require express
// will check the node+modules folder to find node.js. is assumes this is js file because this is javascrips
var app = express();  //  initialize express



require('./instantHello');
// using require to reference the goodbye function from goodbye.js
var goodbye = require('./talk/goodbye');
var talk = require('./talk');
var question = require('./talk/question');

talk.intro();
talk.hello("Lane");

// assign this method to a variable
var answer = question.ask("What is the meaning of life?");
console.log(answer);

//  calling the goodbye function referenced using require above
goodbye();


//  set the port
app.set('port', process.env.PORT);

// set a routes  --  this shows up in the index.html file, overwrites anything else there
app.get('/', function(req, res ) {
    console.log('GET the homepage');
    res
    .status(404)
    .send("Express yourself");
});

// set a json routes
app.get('/json', function(req, res) {
    console.log('GET json');
    res
    .status(200)
    .json({"jsonData" : true} );
});

//  asynchronous port listener
var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log("Listening on port " + port);
});


//  app.listen(process.env.PORT);
//  to prove the port listener is asynchronous
//  console.log('Me first');