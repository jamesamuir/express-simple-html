var express = require('express'),
    jade = require('jade');


var app = module.exports = express();


app.configure(function(){
    app.use('/views', express.static(__dirname + '/views'));
    app.use(express.static(__dirname + '/public'));

    app.set('view engine', 'jade');
    app.engine('.html', require('jade').__express);

});

app.engine('.html', require('jade').__express);

app.get('/', function(req, res) {

    res.render('index.html');
});

app.listen(3000, function(){
    console.log("Express app listening on port %d in %s mode", this.address().port, app.settings.env);
});