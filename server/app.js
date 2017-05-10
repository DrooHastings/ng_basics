//requires
var express = require( 'express');
var app = express();
var bodyParser = require ( 'body-parser');

var index = require( './modules/index');

//uses
app.use(express.static ( 'public'));
app.use (bodyParser.urlencoded ({extended:true} ) );
app.use (bodyParser.json());

//routes
app.use ( '/', index);

//globals
var port = process.env.PORT || 8888;
var itemArray = [];

//spin up server
app.listen( port, function(){
  console.log('server up on :', port);

});

app.post('/addItem', function(req, res){
  console.log('in addItem route');
  // console.log(req.body.name, req.body.description);
  itemArray.push( req.body);
  console.log(itemArray);
  res.sendStatus(200);
});

app.get('/addItem', function(req, res){
  console.log('in GET route');

  res.send(itemArray);
});




// vm.items.push( newItem );// send to server
