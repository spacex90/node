//node default server..
let http = require('http');

http.createServer(function(req,res){
    res.write("Welcome!");
    res.end();
}).listen(8080)