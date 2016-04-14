// Require packages
var express        = require('express');
var bodyParser     = require('body-parser');
var morgan         = require('morgan');
var mongoose       = require('mongoose');
var app            = express();
var router         = require('./config/routes');
var config         = require('./config/app');
var cors           = require('cors')

// Set default view engine and views directory
app.set("view engine", "ejs");
app.set("views", __dirname + "/public/views");
app.use(express.static(__dirname + '/public'));

// Connect to database
mongoose.connect(config.databaseUrl);

// Require routes
var routes         = require('./config/routes');

// Setup Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);

// Listen on the correct PORT
app.listen(config.PORT, function() {;
  console.log("Express is listening on port " + config.PORT);
});
