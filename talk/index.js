
// variable for filename allows using filename in the intro method which can now access it
// it's not exposed to app.js but it will be used heress
var filename = "index.js";

var hello = function(name) {
    console.log("Hello " + name);
};

var intro = function() {
    console.log("I'm a node file called " + filename);
};

// use module.expores hello and intro functions to expose them to be used by toher files 
module.exports = {
    hello : hello,
    intro : intro
}
