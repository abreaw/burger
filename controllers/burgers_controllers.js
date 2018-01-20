// ----------------------------------------------------------------------------------------------
// burgers_controllers.js -- sets up the express routes for the app to use
// 		and allows the app to call get the data from the burgers.js script
// 		to send to the view for the user to see
// ----------------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------------
// add dependencies to the controller file for the burger app logic
// ----------------------------------------------------------------------------------------------
var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();


// ----------------------------------------------------------------------------------------------
// create all the routes and logic that is needed to render the data
// 		to the view / client side (user)
// ----------------------------------------------------------------------------------------------
router.get("/", function(req, res) {
	burger.all(function(data) {
		var hndlbrsObject = {
			burgers: data
		};
		console.log(hndlbrsObject);
		res.render("index", hndlbrsObject);
	});

});

router.post("/api/burger", function(req, res) {

	console.log("post route hit in controller");

	var timeStamp = new Date();
	console.log("timeStamp = " + timeStamp);
	// var timeStamp = "NOW()";

	burger.create([
		"burger_name", "devoured", "date"
		], [
		req.body.name, req.body.eaten, timeStamp
		], function(result) {
			console.log(result);
			res.json(
				{
					id: result.insertId,
					name: req.body.name
				}
			);
		});
});

router.put("/api/burger/:id", function(req, res) {

	var condition = "id = " + req.params.id;
	console.log("condition = " + condition);

	burger.update({
		devoured: req.body.devoured
	}, condition, function(result) {
		if (result.changedRows === 0) {
			// if no rows changed, then error process here
			return res.status(404).end();
		}
		else {

			res.status(200).end();
		}
	});
});


// export routes for use in server.js file
module.exports = router;





