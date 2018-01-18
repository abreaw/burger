// client side JavaScript to handle when the user clicks on the 
// buttons to add a new burger and to eat an existing burger


// Make sure the DOM is fully loaded before we load the functions for the buttons
$(function () {

	// when the devoured button clicked
	$(".eat-da-burger").on("click", function(event) {

		console.log("burger devoured button clicked");

		var id = $(this).data("id");
		var burgerName = $(this).text();
		// var newEaten = $(this).data("eaten"); 

		var newDevouredState = {
			devoured: true
		};

		// Send the update / PUT request to call the server side update
		// function / logic in controller
		$.ajax("/api/burger/" + id, {

			type: "PUT",
			data: newDevouredState
		}). then(
			function() {

				console.log(burgerName + " has been eaten!");

				location.reload();
			}
		);
	});  // end of eat burger click function call


	// when a new burger added
	$("#add-burger-btn").on("submit", function(event) {
		// prevent the full page from being reloaded on the submit click
		event.preventDefault();

		var newBurger = {
			name: $("#name-input").val().trim(),
			devoured: false  // all new burgers will be available for eating
		};

		// Send the insert new burger to database / POST request to the 
		// server side function / logic in the controller
		$.ajax("/api/burger", {
			type: "POST",
			data: newBurger
		}).then(
			function() {

				console.log(newBurger.name + " created");
				// reload the page to get the updated list showing
				location.reload();
			}
		);
	});  // end of on new burger add submit function call


});  // end of document on ready function call