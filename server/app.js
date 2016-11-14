const path = require('path'),
    express = require('express'),
    serveStatic = require('serve-static'),
    bodyParser = require('body-parser');

var app = express();

app.use(serveStatic(path.resolve('dist')));
app.use(bodyParser.json());

app.use('/task', require('./task'));

app.listen(8080, function() {
    var host = this.address().address;
    var port = this.address().port;

    console.log(`HTTP Server is listening ${host}:${port}`);
});