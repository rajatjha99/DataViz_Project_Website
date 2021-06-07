var express    = require('express'),
    app        = express(),
    path       = require('path')
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.get('/', function(req, res) {
    res.render('landing');
});

app.get('/numbers', function(req, res) {
    res.render('numbers');
});

app.get('/map', function(req, res) {
    res.render('map');
});

app.listen(5000, function(){
    console.log('Server is started!!!');
});