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
        if (err) {
            callback(err);
            return;
        }
        var dirs_only = [];
        (function iterator(i){
            if(i >= file_list.length){
                callback(null, dirs_only);
                return;
            }

        fs.stat("albums/" + file_list[i], function (err, stats) {
            if (err) {
                callback(err);
                return;
            }
            if (stats.isDirectory())
                dirs_only.push(file_list[i]);
            iterator(i + 1)
            });
        })(0);
    });
}

var s = http.createServer(handle_incomming_request);
s.listen(8080);