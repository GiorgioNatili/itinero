
var http   = require('http')
    ,util = require('util')
    ,mu   = require('mu2')
    ,fs = require('fs');

mu.root = '/tpl';

http.createServer(function (req, res) {

    if (process.env.NODE_ENV == 'DEVELOPMENT') {
        mu.clearCache();
    }

    var stream = mu.compileAndRender('splash-tpl.html', {name: "splash"});
    var data = util.pump(stream, res);

    var fileStream = fs.createWriteStream("splash-tpl-compiled.js");
    fileStream.once('open', function(fd) {

        fileStream.write(data);

    });

}).listen(8080);
console.log('Server started');