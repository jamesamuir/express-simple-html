var express = require('express'),
    jade = require('jade');


var app = module.exports = express();


app.configure(function(){
    app.use('/views', express.static(__dirname + '/views'));
    app.use(express.static(__dirname + '/public'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());

    app.set('view engine', 'jade')

    app.use(express.bodyParser());


});



app.get('/', function(req, res) {

    res.render('index');
});

app.get('/partials/:name',  function(req, res){

    var name = req.params.name;
    res.render('views/partials/' + name);
});



app.listen(3000, function(){
    console.log("Express app listening on port %d in %s mode", this.address().port, app.settings.env);
});