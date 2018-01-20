// ----------------------------------------------------------------------------------------------
// connection.js -- Sets up the MySQL connection and exports it for use
// 		in the server.js file to seperate the db variables from the server
// 		creation
// ----------------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------------
// add dependencies to the mysql & dotenv npm packages
// ----------------------------------------------------------------------------------------------
var mysql = require("mysql");
var env = require("dotenv");

// configures the .env file using the dotenv package inlcuded above
env.config();

// ----------------------------------------------------------------------------------------------
// setup the connection information
// ----------------------------------------------------------------------------------------------
var connection;

// check to see if the db is being hosted locally or on heroku
if (process.env.JAWSDB_URL) {
	// set connection to the heroku JawsDB port / host / pswd info
	connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
	// set the connection to use the local .env file w/ port / host / pswd info
	connection = mysql.createConnection({
		port: 3306,
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PSWD,
		database: "burgers_db"
	});
}

// ----------------------------------------------------------------------------------------------
// create the connection to the database for the server to use
// ----------------------------------------------------------------------------------------------
connection.connect(function(err) {
	if (err) {
		console.log("error connecting to " + connection.database);
		console.log(err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

// ----------------------------------------------------------------------------------------------
// export the connection for use in other modules within this app
// ----------------------------------------------------------------------------------------------
module.exports = connection;

