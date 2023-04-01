var http = require('http');
var date = require('./date');
var up = require('upper-case');
var fs = require('fs');

http.createServer(function (req, res){
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // res.write(up.upperCase('Hello World'));
    // res.write("<p>The Date is: " + date.myDate() + "</p>");

    // fs.writeFile('sample.html', '<h2>My Heading</h2>', 
    //     function(err) {
    //         if(err) {
    //             console.log('Error Creating File');
    //         }
    //         else {
    //             console.log('File Created');
    //         }

    // });
    fs.unlink('./sample.html', function(err) {
        if(err)
            console.log('File already deleted');
        else
        console.log('File deleted');
    });

    res.end();
}).listen(5000);