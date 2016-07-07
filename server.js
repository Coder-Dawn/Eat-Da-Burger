var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env, PORT || 8080;

app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
	extend: false
}))

 app.use(methodOverride('method'))
 var exphbs = require ('express-handlebars');
 app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//connect to the database
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'burgers_db'


  app.use (bodyParser.json());
  app.use (bodyParser.urlencoded({extend: true}));
  app.use (bodyParser.text());
  //app.use(bodyParser.json({type:}))

  app.get('/',function(req,res){
    connection.query('SELECT * FROM burgers', function(err,data){
        if (err) throw err;

  app.listen(PORT, function(){
  	console.log("Listening on %s", PORT);
  })