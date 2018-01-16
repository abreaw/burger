// ----------------------------------------------------------------------------------------------
// orm.js -- Sets up the Object Relational Model (ORM) for the MySQL queries
// 		allows for the queries to be seperate from the connection code and helps
// 		follow the MVC structured architecture
// ----------------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------------
// add dependencies to the existing mysql db connection created
// ----------------------------------------------------------------------------------------------
var db = require("./connection.js");


// ----------------------------------------------------------------------------------------------
// setup orm calls to create queries based on function object calls
// ----------------------------------------------------------------------------------------------
var orm = {

	// handles the reaqd portion of the CRUD application
	all: function(tableName, callback) {

		var queryString = "SELECT * FROM " + tableName + ";";

		console.log(queryString);

		db.query(queryString, function (err, result) {

			if (err) {
				throw err;
			}

			// executes the function passed once the result is available
			callback(result);
		});
	},

	// handles the create portion of the CRUD application
	create: function(tableName, fieldsArray, valuesArray, callback) {

		// setting up query to add a row the specified table
		// ex. "INSERT INTO burgers (burger_name) VALUES (?)";
		var queryString = "INSERT INTO " + tableName;
			queryString += " (";
			queryString += fieldsArray.toString();
			queryString += ") VALUES (";
			queryString += addQuestionMarks(values.length);
			queryString += ")";

		console.log(queryString);

		db.query(queryString, valuesArray, function(err, result) {

			if (err) {
				throw err;
			}

			// executes the function passed once the result is available
			callback(result);
		});
	},

	// handles the update portion of the CRUD application
	update: function(tableName, valuesObj, condition, callback) {

		// setting up the query to update a certian row in a specified table
		// ex. "UPDATE burgers SET () WHERE "
		var queryString = "UPDATE " + tableName;
			queryString += " SET ";
			queryString += objToSQL(valuesObj);
			queryString += " WHERE ";
			queryString += condition;

		console.log(queryString);

		connection.query(queryString, function(err, result) {

			if (err) {
				throw err;
			}

			// executes the function passed once the result is available
			callback(result);
		});
	}
};

// allow orm to be exported for use in the model to uphold MVC architecture
module.exports = orm;


// ----------------------------------------------------------------------------------------------
// to avoid SQL injection risks this function will add ?'s to the query string based
// 		off the # of vals needed to be passed in the query
// ----------------------------------------------------------------------------------------------
function addQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push("?");
	}

	return arr.toString();
};


// ----------------------------------------------------------------------------------------------
// Helper function to convert object key/value pairs to SQL syntax
// ----------------------------------------------------------------------------------------------
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

