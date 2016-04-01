// Require packages
var express        = require('express');
var bodyParser     = require('body-parser');
var morgan         = require('morgan');
var mongoose       = require('mongoose');
var app            = express();
var router         = require('./config/routes');
var config         = require('./config/app');

// Set default view engine and views directory
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + '/public'));

// Connect to database
mongoose.connect(databaseURL);

// Require routes
var routes         = require('./config/routes');

// Setup Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);

// Listen on the correct PORT
app.listen(PORT, function() {;
  console.log("Express got you fam on port " + PORT);
});
