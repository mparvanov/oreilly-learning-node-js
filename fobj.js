var fs = require('fs');

function FileObject() {
    this.filename = null;
    this.exists = function(callback) {
        var self = this;
        console.log("attemting to verify: " + this.filename);
        fs.open(this.filename, 'r', function(err, handle){
            if(err) {
                console.log(self.filename + " does NOT exist");
                callback(false);
            } else {
                console.log(self.filename + " does INDEED exist");
                callback(true);
                fs.close(handle);
            }
        });
    };
}

var fo = new FileObject();
fo.filename = "sync.js";
fo.exists(function(doesitexist) {
    console.log("Results from exists: " + doesitexist)
});