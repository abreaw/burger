
-- * Switch to or use the `burgers_db`.
USE burgers_db;

-- Insert a few records into the 'burgers' table
INSERT INTO `burgers`
	(burger_name, devoured, date) values 
	("Whatta Burger", false, NOW()),
	("Finish Him Burger", false, NOW()),
	("BLT Burger", true, NOW()),
	("Just Eat It", true, NOW()),
	("Beleaf in Me", false, NOW());


SELECT * FROM burgers ORDER BY date DESC;
