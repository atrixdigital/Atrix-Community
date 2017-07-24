var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var PORT = process.env.PORT || 3000;
var userRoutes = require('./routes/userRoutes');
var startupRoutes = require('./routes/startupRoutes');
var eventsRoutes = require('./routes/eventsRoutes');


app.use(bodyParser.json());


app.get('/',function(req,res){
	res.send('To do api route');
});

// connecting mongo
mongoose.connect('mongodb://localhost/atrixCommunity', {
  useMongoClient: true,
  /* other options */
}).then(function(db){
	console.log('Connected to Atrix database');
});

app.use('/user',userRoutes);
app.use('/startup',startupRoutes);
app.use('/event',eventsRoutes);


app.listen(PORT,function(){
	console.log('Express listening on port '+ PORT + '!');
})





















