var fs = require('fs');


//  non-named callback
// console.log("Going to get a file");
// fs.readFile('readFileSync.js', function(err, file) {
//     console.log("Got the file");
// });

// named callback 

var onFileLoad = function(err, file) {
    console.log("Got the file");
};

console.log("Going to get a file");
fs.readFile('readFileSync.js', onFileLoad);


console.log("App continues...");