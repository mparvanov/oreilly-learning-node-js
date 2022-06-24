var http = require('http'),
fs = require('fs');

function handle_incomming_request(req, res) {
    console.log("Incomming request: (" + req.method + ")" + req.url);
    load_album_list(function(err, albums) {
        if (err != null) {
            res.writeHead(503, { "Content-Type" : "application/json"});
            res.end(JSON.stringify({error: "file_error", message: err.message }) + "\n");
            return;
        }
        res.writeHead(200, {"Content-type" : "application/json" });
        res.end(JSON.stringify({error: null, data: {albums: albums} }) + "\n");
    });
}

function load_album_list(callback) {
    fs.readdir('albums/', function(err, file_list){
        callback(err, file_list);
    });
}

var s = http.createServer(handle_incomming_request);
s.listen(8080);