// ----------------------------------------------------------------------------------------------
// connection.js -- Sets up the MySQL connection and exports it for use
// 		in the server.js file to seperate the db variables from the server
// 		creation
// ----------------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------------
// add dependencies to the mysql npm package
// ----------------------------------------------------------------------------------------------
var mysql = require("mysql");

// ----------------------------------------------------------------------------------------------
// setup the connection information
// ----------------------------------------------------------------------------------------------
var connection = mysql.createConnection({
	port: 3306,
	host: "localhost",
	user: "root",
	password: "MySQLPswd",
	database: "burgers_db"
});

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

