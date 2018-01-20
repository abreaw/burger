## Eat-da-Burger Full Stack Web App
MVC Architecture incorporated for a simple Full Stack Web Application that harnesses the power of MySQL, Node, Express, Handlebars and ![Object Relational Mapping (ORM)](https://en.wikipedia.org/wiki/Object-relational_mapping) usage.

## ScreenshotsFull App View

Full App View
![Full App View](https://github.com/abreaw/burger/tree/master/docs/images/app_screen_shot_v1.JPG)

Ready to Eat Burger List
![Ready to Eat Burgers](https://github.com/abreaw/burger/tree/master/docs/images/ready_to_eat_screen_shot_v1.JPG)

Already Eaten Burger List
![Already Eaten Burgers](https://github.com/abreaw/burger/tree/master/docs/images/already_eaten_screen_shot_v1.JPG)

Add a Burger
![Add a Burger](https://github.com/abreaw/burger/tree/master/docs/images/add_burger_screen_shot_v1.JPG)


## Tech/framework used
<b>Built with</b>
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Handlebars](http://handlebarsjs.com/)
- [MySQL](https://www.mysql.com/)

## Features
Allows a user to see the list of burgers that are available to eat as well as a list of burgers that have been eaten.  If the user wants to add a burger to eat, they can use the "Add a Burger" portion of the application to add a new burger of their choice.

## Installation

1. You will need to pull down the available code from the github repo.
1. In your local folder run `npm install` to download the required NPM modules.
1. Using MySQL Workbench run the **schema.sql** file to create the database, if you would like to add initial data to the database, run the **seeds.sql** file too.
	- To run via the command line make sure you have mysql installed and navigate to your local folder where the db files above are located.
	- Use the following commands (you may have to change the path to your local path for the mysql executable)
		- `"C:\Program Files\MySQL\MySQL Server 5.7\bin\mysql" -u root -p`
		- At the prompt enter your password
		- You should then get a **mysql>** prompt
		- Type `source schema.sql`
			- This will run the SQL statements to create the Database and the table
			- You should get an output that looks something like this
			- ```Query OK, 1 row affected (0.21 sec)

			Query OK, 1 row affected (0.00 sec)

			Database changed
			Query OK, 0 rows affected (0.20 sec)

			Empty set (0.00 sec)
			```
		- Type `source seeds.sql`
			- This will add the initial data into the existing table
			- You should get an output that looks something like this
			- ```Database changed
			Query OK, 5 rows affected (0.05 sec)
			Records: 5  Duplicates: 0  Warnings: 0

			+----+-------------------+----------+---------------------+
			| id | burger_name       | devoured | date                |
			+----+-------------------+----------+---------------------+
			|  1 | Whatta Burger     |        0 | 2018-01-15 20:18:39 |
			|  2 | Finish Him Burger |        0 | 2018-01-15 20:18:39 |
			|  3 | BLT Burger        |        1 | 2018-01-15 20:18:39 |
			|  4 | Just Eat It       |        1 | 2018-01-15 20:18:39 |
			|  5 | Beleaf in Me      |        0 | 2018-01-15 20:18:39 |
			+----+-------------------+----------+---------------------+
			5 rows in set (0.00 sec)
			```
1. Change the configuration info to access your MySQL database based on where it is being hosted.
	- ```{
		port: 3306,
		host: "localhost",
		user: "root",
		password: "MySQLPswd",
		database: "burgers_db"
	}
	```


## Instructions on How to use the Burger App
The burger app can be used to Add burgers for the user to eat using the **"Add Burger"** button at the bottom section of the app.  The user can also choose a burger to eat by clicking on the **"Devour It!"** button next to the burgers name in the *"Ready to Eat"* List.  The user can see what burgers have already been added and eaten by looking at the *"Already Eaten"* List.


