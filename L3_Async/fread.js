var fs = require('fs');

fs.open('test.txt', 'r', function(err, handle) {
    if(err == null){
    var f= handle
    var b = new Buffer.alloc(100000);
    
    fs.read(f, b, 0, 100000, null, function(err, bytes_read) {
        console.log(f);
        console.log(b.toString("utf8", 0, bytes_read));
        fs.close(f);
    });
} else {
    console.log("Oh NOes! Fail to open " + err.message)
}
});
