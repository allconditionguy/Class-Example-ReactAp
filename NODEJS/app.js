var http = require('http');
var date = require('./date');
var url = require('url');
var fs = require('fs');
var up = require('upper-case');
var events = require('events');
var eventEmitter = new events.EventEmitter();
//var formidable = require('formidable');


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});

  // personal modules
  // res.write("The date and time currently: " + 
  //   date.myDateTime());

    // url example
    // var q = url.parse(req.url, true).query;
    // var txt = q.year + " " + q.month;
    // res.write(txt);

// file system
  fs.writeFile('sample.html', '<h1>Heading 1</h1>', 
    function (err) {
      if(err) throw err;
      console.log('Saved');
    });

// deleting file
// fs.unlink('./sample.html', function (err) {
//   if (err) throw err;
//   console.log('File deleted!');
// });


// renaming file
// fs.rename('sample.html', 's.txt', function (err) {
//   if (err){
//     console.log('unble to delete');
//   }
//   else {
//     console.log('File Renamed!');
//   }
// });

// URL MODULE
// var q = url.parse(req.url, true);
// var filname = "." + q.pathname;
// fs.readFile(filname, function(err, data){
//   if(err)
//     return res.end("404 Not Found");
//   res.write(data);
//   return res.end();
// });

 // res.write(up.upperCase("Hello WOrld"));
  
 // EVENTS
 
 //Create an event handler:

 var myEventHandler = function () {
  console.log('I hear a scream!');
}
 
//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');
 
 res.end();
}).listen(2345);