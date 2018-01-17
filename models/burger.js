
// ----------------------------------------------------------------------------------------------
// burger.js -- Sets up the model that will be used for interaction
//		with the view and the controller ... how the burger data
// 		structure will look for the app to use in the controller and
// 		view areas ??
// ----------------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------------
// add dependencies to the burger model
// ----------------------------------------------------------------------------------------------
var orm = require("../config/orm.js");

var tableName = "burgers";


// ----------------------------------------------------------------------------------------------
// creates the calls that the burger model will use to interact
// 		with the ORM then ultimately the DB.  This helps keep the
// 		calls to the db seperate so if a new DB is introduced there 
// 		the dependency to change code in other areas is limited
// ----------------------------------------------------------------------------------------------
var burger = {

	all: function(callback) {
		orm.all(tableName, function(result) {
			callback(result);
		});
	},

	create: function(cols, values, callback) {
		orm.create(tableName, function(result) {
			callback(result);
		});
	},

	udpate: function(objColVals, condition, callback) {
		orm.update(tableName, objColVals, condition function(results) {
			callback(results);
		});
	}

};

module.exports = burger;


