var express = require('express')
// will check the node+modules folder to find node.js. is assumes this is js file because this is javascrips
var app = express();



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


// app.get('/', function(request, response) {
//     response.sendFile(__dirname + "/public/index.html");
// });


app.listen(process.env.PORT);
