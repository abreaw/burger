// ----------------------------------------------------------------------------------------------
// server.js -- 
// ----------------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------------
// dependencies -- NPM packages required to run the node server side code
// ----------------------------------------------------------------------------------------------
var express = require("express");
var mo = require("method-override");
var parser = require("body-parser");

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controllers.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
