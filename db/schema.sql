DROP DATABASE IF EXISTS burgers_db;

-- * Create the `burgers_db`.
CREATE DATABASE burgers_db;

-- * Switch to or use the `burgers_db`.
USE burgers_db;

-- * Create a `burgers` table with these fields:
	--   * **id**: an auto incrementing int that serves as the primary key.
	--   * **burger_name**: a string.
	--   * **devoured**: a boolean.
	--   * **date**: a TIMESTAMP.

CREATE TABLE IF NOT EXISTS `burgers` 
(
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`burger_name` VARCHAR(255) NOT NULL,
	`devoured` BOOLEAN DEFAULT false,
	`date` DATETIME NOT NULL,

	PRIMARY KEY (`id`)
);

SELECT * FROM burgers ORDER BY date DESC;


