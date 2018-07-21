require('./api/models/db.js');

var express = require('express'),
app = express(),
path = require('path'),
bodyParser = require('body-parser'),
port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.sendfile('index.html');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes'); 

app.use('/api', routes);

app.listen(port);
console.log('Server listening at port: '+port);