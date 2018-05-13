

# ![pgsql](./pgSQL.png) MDJ STUDIOS - SQL / PostgreSQL Docs

| Created By | Last Updated     |
| :------------- | :------------- |
| Daniel Scott   | May 13, 2018 |


## What is SQL?
SQL stands for structured query language.

## What are databases?
Databases are systems designed to allow people to store large amounts of data.

Databases have a wide variety of users!
- Analysts.
- Technical.
- Basically anyone needed to deal with data.

## From spreadsheets to databases.

Spreadsheets are very user friendly meaning that basically anyone can pick one up and start using it. They can used for one time analysis of data, and required nearly no training at all for someone to pick up and use one.

Databases are very good for handling large amounts of data. They also handle data integrity very well as well. Also, they support a very flexible array of applications.

They also support data for websites and applications.


So, when thinking of where SQL and Excel Spreadsheets come into play, try to think of Excel tabs as SQL tables.

Columns and rows in spreadsheets are very similar to those of a SQL database.

## Relational Database Management Systems (RDBMS) that use SQL:
- PostgreSQL
- MySQL
- MariaSQL
- MS SQL Server Express
- Microsoft Access
- SQLite

## Key differences between MySQL vs PostgreSQL
```text
MySQL is a relational database management system (RDBMS) currently developed by Oracle with open-source code. This code is available for free under the GNU General Public License, and commercial versions of MySQL are also available under various proprietary agreements. PostgreSQL is an object-RDBMS (ORDBMS) that’s developed by the PostgreSQL Global Development Group. It also has an open source, which is released under the permissive PostgresSQL License. The differences between MySQL and PostgreSQL include the following key categories:
```

- Governance
- Supported platforms
- Access Methods
- Partitioning
- Replication


## Tools we'll need:
- PostgreSQL - We'll need to download this onto our machines.
- PG Admin

## Installing PostgreSQL:
- First, we'll need to go to `postgresql.org`.
- Click on the download link to download the newest version.
  - The site should navigate you to the a page with different download versions depending on your machine.
  - For windows and mac users, you'll want to choose the installer version labeled: `Interactive Installer by EnterpriseDB`
  - Once you've found that link, go ahead and click on it to download.
- Following these steps will download a `PGSQL` `(PostgreSQL)` server for your machine.
- Now you'll open the file inside of your downloads folder.
- Your machine will present you with some default setup options; go ahead and set up all of them.
- Then it will ask you for the install location; go ahead and accept the default.
- Now it will ask you for the default password for the superuser for PGSQL.
- **Always make sure you take note of your password**
  - A good convention is to always choose `root` for your dev database superuser.
- Select the default port for the database to listen on.
- Select the default locale for the database cluster.
- Once selecting the rest of the default options, the installer should present you with a summary of the installation. Go ahead and accept and the installation should finish.

## Installing PGAdmin
- First go to PGadmin.org
- Look for the download link and click on it.
- Select the download option: PGadmin4, for your machine. (MAC / Windows...etc)
- Now click download.
- Now you can go to your downloads directory and click on the executable file to start the download process.
- Once the download process stops, you should be able to launch it.

## Learning about queries using a toy database:
Now that we have PGSQL and PGadmin4 installed we're going to learn some basic SQL queries using a toy database called `dvdrental`.

- Look for the `dvdrental.tar` file inside of this repo.
- **NOTE** do not double click on or attempt to unzip this file.
  - We'll be interacting with it directly using PGSQL and PGadmin4

## Getting started:
- Go ahead and launch PGadmin4 and click on a small icon labeled `servers`in the upper left corner. This icon should expand and reveal another icon called `PostgreSQL 10`.

- Go ahead and click on that icon to connect to PGSQL.
  - PGadmin4 will prompt you to enter your password.
  - Make sure you remembered you password from when you set up PGSQL, otherwise you will have to go though the entire install process and choose another password in order to get back to this point.
  - If PGadmin4 doesn't accept the password, you can try to leave the field blank, but chances are you'll most likely need to re-install everything.

- Once the connection has been made, you should be able to expand the PGSQL icon to reveal `databases`
  - There are none at this point, so we're going to make one.

- Go ahead and right click on `PostgreSQL` and select `create database`.

- Then give you database a name. For the dvdrental toy database, we'll just give it a name like `dvdrental`.

- Then you can just click `save`.

- Now you should be able to see your new database under `databases`.

- Now you can right click on `dvdrental` and click on restore.
  - The restore menu will pop up and give you some options of how to load the content inside of your database.
  - For format, you'll select `tar`.
  - For filename, you'll select the `...` option.
  - This option will allow for you to find and select the .tar file for it to be uploaded in the restore.
  - Then you will see a tab for restore options.
  - Go ahead and select the `Data` option.
  - Doing so will load your fresh database with all of the data contained inside of the .tar file.
  - Once you've completed these steps you can click on restore
  - Once the process starts, you might get some buggy behavior.

- Once the restore process is completed, you can right click on your database, then select refresh.

- Then you can right click on the database again and then select `query tool`.

- Now that your query tool has been retrieved you can begin running your queries.

## Learning how to use PG Admin:

### Creating a new database:
- **Using Your Mouse** You can easily create a new database using the PG admin console by right clicking database and then selecting `create` `>` `database`.
  - Then a form modal will pop up allowing you to name your database.

- **Using a SQL Query in the console** You can easily create a new database in the console using SQL by right-clicking on `postgres` and then selecting `query tool`.
  - Once your query tool modal pops up, you can user this query to create a new database:

  ```SQL
  CREATE DATABASE <database name>;
  ```
### Delete / Drop an existing database:
- **Using Your Mouse** You can easily delete a database by right clicking the database and then selecting `delete/drop`, and this will delete the database.

- **Using a SQL Query in the console** You can easily create a new database in the console using SQL by right-clicking on `postgres` and then selecting `query tool`.
  - Once your query tool modal pops up, you can user this query to create a new database:

### Restore a Database:
To accomplish this, all you need to do is right click a freshly created database and then select restore. Then the restore menu will pop up so you can select what data to restore the database to.

### Restore a Database, but only the Table Schema
These instructions will show how to restore just the table schema of the database.

Why would you need to do this? Perhaps you might need to move the location of the table schema and you don't want to copy over the actual data that's contained inside of the table.

- There are two ways you can restore a database with only the table schemas:
  - **Option 1:**
    - **Create the database.**
    - Then right click the newly created database and select `restore`.
    - The restore modal will pop up and then you can select a `.tar` file containing a saved database.
    - Go to the restore options tab and then select `Only Schema`.
    - PGadmin4 will then load your new database with only the schemas and not the data contained inside of them.

  - **Option 2:**
    - **Take an existing database.**
    - Then right click the newly created database and select `restore`.
    - The restore modal will pop up and then you can select a `.tar` file containing a saved database.
    - Go to the restore options tab and then select `Only Schema`, and then `Clean before restore`.
    - PGadmin4 will then load your new database with only the schemas and not the data contained inside of them.


## SQL Queries
The following syntax covered in this section can be used for any SQL Platform.


## The Select Statement.
Sometimes this is referred to the `SELECT` clause.

**Important Note** The syntax used here is case insensitive. However, by convention, we use our SQL keyword in uppercase to make the code easier to read and standout.

- Select all from table:

```SQL
SELECT * FROM <TABLE_NAME>;
```
One important note about using the `*` inside of select statement to query a small set of data. This isn't the most efficient way to query a SQL database because it will increase traffic to your SQL server, thus slowing it down.

However for the purpose of this exercise, you can use it for practice and familiarity since the `dvd rental` database is very small compared to a production level database.

- Select column from table:

```SQL
SELECT <COLUMN> FROM <TABLE_NAME>;
```

- Select multiple columns from table:

```SQL
SELECT <SOME COLUMN>, <OTHER COLUMN> FROM <TABLE_NAME>;
```

## Exercise Time!
- You're an employee at ABC DVD Rentals and your manager has told you they're planning on sending out promotional coupon emails to your existing customers!

- Write a query that selects the first name, last name, and email from customer.

- **HINT:** You'll need to check for a customer table inside of `dvdrental`

- 3 Minutes!

## The Select Distinct Statement
Sometimes, within a table, your columns might contain duplicate data, and you might want to just list the different (Distinct) values. This is a where the `SELECT DISTINCT` keyword comes in.

This is a very powerful statement because it will only return the distinct values.

```SQL
SELECT DISTINCT <SOME COLUMN> FROM <TABLE_NAME>;
```

- `SELECT DISTINCT` with multiple columns:

```SQL
SELECT DISTINCT <SOME COLUMN>, <OTHER COLUMN> FROM <TABLE_NAME>;
```

**Here are some really good examples for this:**

```SQL
SELECT DISTINCT rental_rate FROM film;
```

```SQL
SELECT DISTINCT release_year FROM film;
```

## Exercise Time!
- It's another day at the DVD store, and a new customer is wanting to know all of the distinct rating types that are available in the store.

- Write a query that returns the distinct rating values for all the films in the database.

- **HINT:** You'll need to use the `film` table inside of the `dvdrental` database.

- 3 Minutes!


## The Select Where statement
This query is extremely powerful as it give you the ability to be very specific as to which pieces of data are queried based on certain conditions.

- So, for example:

```SQL
SELECT <COLUMN1> FROM <TABLE_NAME> WHERE <CONDITIONS>;
```
- For multiple columns:

```SQL
SELECT <COLUMN1>, <COLUMN2>, <COLUMN3>...etc FROM <TABLE_NAME> WHERE <CONDITIONS>;
```

- You can also write your queries like this:

```SQL
SELECT <COLUMN1>, <COLUMN2>, <COLUMN3>...etc
FROM <TABLE_NAME>
WHERE <CONDITIONS>;
```

#### Let's go over the `SELECT WHERE` statement / clause in more detail:
SQL gives us some really awesome operators we can use to set our `WHERE` conditionals. Here's an example with the `=` operator:

```SQL
SELECT first_name FROM customer WHERE first_name = 'Jamie';
```

#### We use the `SELECT WHERE` statement / clause with logical operators:

| Operator | Description     |
| :-------------: | :-------------: |
| =       | Equal       |
| >      | Greater Than       |
| <      | Less Than       |
| >=     | Greater Than or equal |
| <=     | Less Than or equal |
| <> or !=   | Not equal |
| AND      | Logical Operator AND |
| OR      | Logical Operator OR |

#### Here's an example of using a logical operator with a `SELECT WHERE` statement.
Let's say it was another day at the DVD rental store and you needed to find out which customers paid $4.99 for their rental.

```SQL
SELECT customer_id, amount
FROM payment
WHERE amount = '4.99'
```

You can also combine this query with a logical operator `OR` if you also wanted to know if they paid $4.99 or $1.99.

```SQL
SELECT customer_id, amount
FROM payment
WHERE amount = '4.99'
OR amount = '1.99'
```

Here's another example:

```SQL
SELECT first_name, last_name
FROM customer
WHERE store_id = 1 OR store_id = 2
AND address_id >= 5;
```

## Exercise Time!
Time to practice your `SELECT WHERE` statement.

**Challenge #1** :trophy:
It's another day at the DVD rental store and someone brings a wallet they found on the floor to the front desk where you're working at. The wallet belongs to **Nancy Thomas**. Using all of the knowledge we have now, try to think of a way to query Nancy's email from the database.

- 5 minutes!

**Challenge #2** :trophy: :trophy:
Shortly after you email Nancy about her wallet, a whimsical man comes up to you asking about the film 'Outlaw Hanky' and wants to know what it's about. Using what we know about the `SELECT WHERE` statement, find the Description for this film for the customer.

- 5 minutes

**Challenge #3** :trophy: :trophy: :trophy:
The end of your workday is approaching at the DVD rental store and your manager is having you check to see who's late on their movie return. Your manager hands you a report that only shows the addresses of the persons who are late on their return.

Your manager wants you to look up the first person on the list because they are 30 days late. Their address is '259 Ipoh Drive', using what we know about `SELECT WHERE`, query your database for the phone number for this person.

- 5 minutes

## The Count Function
The count function returns a specific number of input rows that match a specific condition of a query.

Here's a sample count function

```SQL
SELECT COUNT(*) FROM <TABLE>;
```
You can also pass a specific column name as an argument into the count parameters, but since count actually returns the number of rows, you can just pass in an asterisk instead.

Another example would be:

```SQL
SELECT COUNT(*) FROM payment;

-- For the DVD rental database, the returned value would be: 14596
```

We can also pass in the `SQL` keyword, `DISTINCT` to get the count of distinct rows inside of a column like this:

```SQL
SELECT COUNT(DISTINCT amount) FROM payment;

-- The Server running the DVD rental database would return 19

-- or

-- You can also pass in a column into DISTINCT as an argument as well

SELECT COUNT(DISTINCT(amount)) FROM payment;
```

So, in essence, the count function will return the number of rows returned by a `SELECT` clause.

```SQL
SELECT COUNT(phone)
FROM address
WHERE address = '259 Ipoh Drive'

--> 1
```
So, if we used this clause for that last query you ran to find the phone number, this would return 1, since there is only one row containing a phone number matching the where condition.

## The LIMIT clause
This statement/clause allows you to limit the amount of rows returned. This is a fairly straightforward clause to you for your queries so we can look at one example below:

```SQL
SELECT *
FROM customer
LIMIT 1;

-- This will return the first row in the database
```

## ORDER BY
This clause allows us to sort how data is returned either by ascending or descending order based on a specific criteria.

**NOTE** The `ORDER BY` clause will always result in ASC ascending order by default if none specified.

So, for example, you could order `customer` in the `dvdrental` database like so:

```SQL
SELECT last_name
FROM customer
ORDER BY last_name DESC

-- This query will essentially return all of the names from the last names column,
-- but sorted by the first name in descending order.
```

Here's another example:

```SQL
SELECT first_name, last_name
FROM customer
ORDER BY first_name DESC;

-- This query would return the first and last names ordered by first name in descending order
```

You can also sort multiple columns as well:

```SQL
SELECT first_name, last_name
FROM customer
ORDER BY first_name ASC,
last_name ASC;
```

Try this last query inside of the `dvdrental` toy database, and look for how the two people with the first name Kelly are sorted (ROWS 327-328).

Now order last_name by `DESC` and check those rows again.

## Exercise Time!

**Challenge #1** :trophy:
It's another day at the DVD rental store and your manager has decided to do something extra special for your top customers.

That said, your manager wants you to query the database to return the customer ID numbers for the top ten highest payment amounts.

**1st HINT** You'll need to look around for the right table to run your query on.

**2nd HINT** You'll need to take your prior knowledge to _limit_ the amount of rows returned in your query.

- 5 minutes

**Challenge #2** :trophy: :trophy:
Later that day, your manager informs you of an upcoming inventory change and needs to begin gathering movie titles by `film_id` in groups of 5.

Go ahead and query your database engine to return the titles for movies with a film id from 1-5.

**1st HINT** You'll need need to look around for the right table.

**2st HINT** You can use a `LIMIT` or `WHERE` clause for this query.

## The Between, IN, and LIKE statements
The Between statement allows us to match a value against a particular range of values.

This statement provides us with a nice way of writing a query that basically accomplishes the following:

```SQL
value => low and value <= high
```

So, in essence, we could use our `dvdrental` database to query specific data using a between statement like this:

```SQL
SELECT amount
FROM payment
WHERE amount
BETWEEN .99 AND 2.99;

-- This query would return all values greater than or equal to .99
-- and less than or equal to 2.99
```

You can also use `NOT BETWEEN` to return values that are not in between the given range:

```SQL
SELECT amount
FROM payment
WHERE amount
NOT BETWEEN .99 AND 2.99;
```

What do you think this example does?

```SQL
SELECT customer_id, payment, amount
FROM payment
WHERE amount
NOT BETWEEN 8 AND 9
LIMIT 5;
```

We could technically get away with using comparison operators, but the `BETWEEN` statement just makes our queries much more elegant.

Here's another example of searching for a dates in a particular range using the `BETWEEN` statement:

```SQL
SELECT payment_date
FROM payment
WHERE payment_date
BETWEEN '2007-02-07'
AND '2007-02-15'
LIMIT 5;
```

You can literally use a string literal with the date inside using the format above.

## The IN statement

This statement is always combined with the WHERE statement allows us to check if a values matches any value in a list of values.

The IN statement is also considered a sub query.

Here's an example of a SQL query using the `IN` statement:

```SQL
SELECT customer_id, rental_id, return_date
FROM rental
WHERE customer_id IN(7, 13, 10)
ORDER BY return_date DESC --Using the ORDER BY clause is optional

-- This query would return all the results where the customer id matches ids 7, 13, and 10
```

## The `LIKE` statement

With PostgreSQL and other SQL engines, you can use the `LIKE` statement along with wildcard characters such as `%`, and `_` for pattern matching. This is a super smart way of finding data based on very little information.

Let's suppose you wanted to find where or not a person exists in your database. You know their last name starts with Ka, but you're not sure how it ends. You can use the `LIKE` `%` pattern matching operator to find them. The `LIKE` statement always goes hand in hand with the `WHERE` statement.

```SQL
SELECT *
FROM customer
WHERE last_name LIKE 'Ka%'
ORDER BY last_name
LIMIT 5;

-- This query would return results with the last name starting with 'Ka'
-- like 'Kahn' for example
```

You can also use the `%` wildcard operator to find results matching all of the characters before a known value. Let's suppose you wanted to find all of the first names that end in the character `y`. You could search like this.

```SQL
SELECT first_name, last_name
FROM customer
WHERE first_name LIKE '%y'
ORDER BY first_name;

-- This query would return all of the names from the first_name column
-- that end with the character y
```

There's another way of using this wildcard operator where you can search for characters in between a set of characters like this:

```SQL
SELECT *
FROM customer
WHERE first_name LIKE '%er%'
ORDER BY first_name
LIMIT 10;
```

There's another wildcard operator we can use, the `_`, and this operator allows us to indicate a single character.

So, in essence, we could find a name that contains certain characters that come immediately after a single character.

Say we wanted to find a name containing 'er' that can directly after a single character.

Here's an example below:

```SQL
SELECT first_name, last_name
FROM customer
WHERE first_name LIKE '_her%'
ORDER BY first_name DESC
LIMIT 10;
```

You can also use the `NOT` statement directly before `LIKE` to get all pf the results that don't match the conditions:

```SQL
SELECT first_name, last_name
FROM customer
WHERE first_name NOT LIKE '_her%'
ORDER BY first_name DESC
LIMIT 10;
```

You can also signify case insensitivity by using `ILIKE`, so:

```SQL
SELECT *
FROM customer
WHERE last_Name
ILIKE '%Er%'
ORDER BY first_name
LIMIT 100;
```

## Challenge Time Review Edition!

**Challenge #1** :trophy:

It's another day at the video rental store and your manager has asked you to count all of the payment transactions that are greater than $5.00.

- 5 Minutes

**Challenge #2** :trophy: :trophy:

You're helping one of your co-workers organize the movies and you need to find all of the movies that start with the letter -

- 5 Minutes

**Challenge #3** :trophy: :trophy: :trophy:

You're manager is wanting to do some research about the community to better understand the customer base. So they've asked for you to find how many unique districts your customers are from.

This challenge will be much harder to complete.

- **HINT:** You will need to use the address table.
- **HINT:** You will need to use the `DISTINCT` statement.

**PART II**

Now retrieve the names for those distinct districts.

**Challenge #4** :trophy: :trophy: :trophy: :trophy:

Later that day your manager needs more help with handling inventory, so you've been asked to find how many films have a rating of `R` and also have a replacement cost of $5, and $15.


**Challenge #5** :trophy: :trophy: :trophy: :trophy: :trophy:
You place a bet with a co-worker that you know how many films are in the inventory that have the word `truman` somewhere in the title. Your friend says there are 3, and you say there's 5. Who was right?

Count how many films have the word `Truman` somewhere in the title.

**Challenge #6** :trophy: :trophy: :trophy: :trophy: :trophy: :trophy:
Your manager comes to you very concerned because they are curious as to how many customers received a free rental from the employee with the staff_id of 1

**Challenge #7** :trophy: :trophy: :trophy: :trophy: :trophy: :trophy: :trophy:
Now that you've discovered how many freebies were given, your manager now wants to know the total amount pf payments that were charged by the employee with a staff_id of 1.


## Getting familiar with MIN MAX and AVG SUM

#### `AVG`

SQL gives us the ability to `SELECT` the average of an aggregate amount of a column by using the `AVG` statement.

So for example, let's say we wanted to find the average of the amount column from the payment table:

We could execute our query like this:

```SQL
SELECT AVG(amount)
FROM payment;
-- We would get a huge number like this: "4.2006056453822965"
```

Sometimes, we'll end up with a number containing a large amount of decimal places.

To handle this, we can also use the `ROUND()` function to round our `AVG` operator to a specific number of decimal places.

Here's an example of that:

```SQL
SELECT ROUND(AVG(amount), 2)
FROM payment;
```

#### `MIN`
This query allows us to select a row with the `MIN` min value. So, an example of that would be:

```SQL
SELECT MIN(amount)
FROM payment;
```

or with the `ROUND` function:

```SQL
SELECT ROUND(MIN(amount), 1)
FROM payment;
```

#### `MAX`
Max is very straightforward as it's literally the exact opposite to `MIN`

Here's an example:

```SQL
SELECT MAX(amount)
FROM payment;
```

or, with round:

```SQL
SELECT ROUND(MAX(amount), 2)
FROM payment;
```

## The Group By Clause
This clause divides the rows returned from the SELECT statement into groups

So, for example, if we wanted to see all of the customer ids inside of the payment table:

```SQL
SELECT customer_id as customers
FROM payment
GROUP BY customer_id
ORDER BY customer_id ASC
```
In this instance, we've used our `GROUP BY` clause like a `DISTINCT` Statement

We could have easily performed this query like this and it would have worked:

```SQL
SELECT DISTINCT(customer_id) AS customers
FROM payment
ORDER BY customer_id ASC
LIMIT 10;
```

Here are some more examples:

```SQL
SELECT customer_id AS customers, SUM(amount) AS amount_paid
FROM payment
GROUP BY customer_id
ORDER BY customer_id;
```


```SQL
SELECT rental_duration, COUNT(rental_duration)
FROM film
GROUP BY rental_duration
ORDER BY rental_duration;
```

```SQL
SELECT rating, ROUND(AVG(rental_rate), 2)
FROM film
GROUP BY rating;
```

## Exercise Time!
Time to test our understanding of `GROUP BY`

**Challenge #1** :trophy:
So, it's another day in at work, you were recently promoted to assistant manager and your branch manager has requested your help in determining how to reward the employee.

You both decided to reward the employee the highest transactions and sales tendered amount.

You'll need to write a query that can help you determine how many transactions were performed and the total of those transactions by customer

**Challenge #2** :trophy: :trophy:

The following day you find out that corporate headquarters is preparing to audit the store. They'll need to know the average replacement cost of movies by rating.

**Challenge #3** :trophy: :trophy: :trophy:

Later that day you and your branch manager decide to reward the top five highest spenders in the store. You're going to need to write a query that will find the customer_id's of the top five highest spenders.


## The HAVING statement
The Having clause is normally used in conjunction with the `GROUP BY` clause to filter group rows that do not satisfy a specific condition.

In other words, the HAVING clause can be used to return rows from a GROUP BY statement where a specific condition is true.

Another helpful way of thinking about the `HAVING` clause is that it's almost like the `WHERE` clause, but with a  `GROUP BY` statement.

## When and where would I use the `HAVING` clause versus the `WHERE` statement?

- The having clause sets the condition for the group rows created by the `GROUP BY` clause after the `GROUP BY` clause applies.

- The `WHERE` clause sets the the condition before the `GROUP BY` clause applies.

```SQL
SELECT customer_id, SUM(amount)
FROM payment
GROUP BY customer_id
HAVING SUM(amount) > 200;
-- This query will return the total sum and customer_id's for customers
-- who spent more than $200
```

Here's another example:

```SQL
SELECT store_id, COUNT(customer_id)
FROM customer
GROUP BY store_id
HAVING COUNT(customer_id) > 300;

-- This query will count the rows containing customer_id's and group them by store_id. In this particular case we would able to find with store based on store_id had more than 300 customers.
```

## Exercise Time!

Now it's time to practice with some of the skills we've learned so far.

**Challenge #1** :trophy:
There's exciting news at the DVD rental store, corporate headquarters has decided to debut a new credit card program for customers who frequently visit the store.

Write a query that will allow you to find customers who have at least 40 total transaction payments. You will need to use a `GROUP BY` and a `HAVING` statement for your query.

**Challenge #2** :trophy: :trophy:
You are your manager are trying to determine the average rental duration of films grouped by rating. Specifically those who's average is greater than 5 days.

## The AS statement
This statement allows us to rename columns to an alias of our choosing. This is especially helpful when using `JOINS`

Here's a quick example of how this works:

```SQL
SELECT SUM(amount) AS total_sale
FROM payment;
```

Here's another example:

```SQL
SELECT customer_id, SUM(amount) AS total_spent
FROM payment
GROUP BY customer_id
ORDER BY customer_id DESC;
```

## An Overview of JOINS
Joins are extremely important to know for managing you database. Especially when it involves relational database management systems (RDBMS) like PostgreSQL.

Suppose you have a table of customers and some kind of reference to your customers in another table of addresses where each customer lives.

When the time comes when you need to find the address of each customer, how could your do that?


## INNER JOIN or JOIN
SQL gives us JOINS as an extremely powerful query and a means to connect tables together based on their relationship, like the customer to customer address example.

The `INNER JOIN`, which can also be referred to as just a `JOIN` statement is just one example of a statement that only returns matching corresponding rows between different tables.

Here's some more examples:

```SQL
SELECT customer.customer_id, payment.customer_id,
first_name, last_name, amount, email, payment_date
FROM customer
INNER JOIN payment
ON customer.customer_id = payment.customer_id
WHERE first_name
LIKE 'Ja%'
LIMIT 10;
```
We can shorthand our `INNER JOIN` queries also by just using `JOIN` and it will run as an `INNER JOIN` by default.

```SQL
SELECT first_name, last_name, SUM(amount)
FROM customer
JOIN payment
ON customer.customer_id = payment.customer_id
GROUP BY first_name, last_name
ORDER BY SUM(amount) DESC;
```
Here's another powerful example you can use

```SQL
SELECT title, COUNT(title) AS copies_store_1
FROM film
JOIN inventory
ON inventory.film_id=film.film_id
WHERE store_id=1
GROUP BY title
ORDER by title;
```
Again, INNER join will only connect the tables where they have matching corresponding rows.


## FULL OUTER JOIN
Unlike the `INNER JOIN`, the `FULL OUTER JOIN` will return all records from the joining tables that are a match as well as the records that don't match. The missing side on either table will contain a null value if there is no match. So, essence, there's a possibility for a null value to appear on both sides of the joined tables if there is no match.

Here's an example of a `FULL OUTER JOIN` query

```SQL
SELECT first_name, last_name, amount, payment_date
FROM customer
FULL OUTER JOIN payment
ON customer.customer_id=payment.customer_id
LIMIT 10;
```

## LEFT OUTER JOIN or LEFT JOIN

The `LEFT OUTER JOIN` will produce a full set of data for all tables, connect the tables where they have matching corresponding rows, but if there is no match on the right side, the value will be null.

Why would we do this?

Let's suppose we had our films table that listed all of the films, our inventory table, and we needed to know which films were not in inventory, we could use a `LEFT JOIN` to find the diff based on the null values that will appear in the right side.

```SQL
SELECT title,
film.film_id AS film_ids_from_films,
inventory.film_id as film_ids_from_inventory
FROM film
LEFT OUTER JOIN inventory
ON inventory.film_id = film.film_id
ORDER BY inventory.inventory_id DESC;
```

With a left join, we we'll get everything we requested with our `FROM` statement.

| film.film_id   | film.title     | inventory.film_id | inventory.inventory_id |
| :-------------: | :-------------: |:-------------------:| :---------------------:|
| 1               | Jurassic Park  | [null]           | [null]                 |
| 2               | Shawshank Redemption  | 2         | 24                 |
| 3               | Kung Fury  | [null]         | [null]                 |
| 4               | IP Man  | 4         | 321                 |



## RIGHT OUTER JOINS

This join is almost completely identical to the `LEFT OUTER JOIN` but the only difference is that the table joined on the left side will have null values where it doesn't match the right table.

```SQL
SELECT first_name, last_name, amount, payment_date
FROM customer
RIGHT OUTER JOIN payment
ON customer.customer_id=payment.customer_id
LIMIT 10;
```

## UNION
Time to look at the UNION operator is another powerful SQL query that allows us to combine the result sets of two or more SELECT statements into a single result set.

Although this is indeed a powerful SQL Query, it's important to take note that there are some important rules that come with it.

- When combining two `SELECT` statements, both queries must return the same number of columns.
  - So for example, if the first `SELECT` statement returns two columns, the second `SELECT` statement must also return two columns.
- Also, those corresponding columns in the queries must have compatible datatypes.
  - So, for example, if the first `SELECT` statement returns a `column 1` of integer type data, then the second `SELECT` statement for `column 1` should return a column of integers.

Here's an example of `UNION`

```SQL
SELECT <column_1>, <column_2>
FROM <table_1>
UNION
SELECT <column_1>, <column_2>
FROM <table_2>
```

So when would we ever need to use this?

## SQL Timestamps
This section will go over timestamps and how to use them specifically while using PostgreSQL.
It's important to know that each SQL engine uses timestamps differently, so it's important to refer to the documentation when dealing with timestamps with other SQL Engines.


SQL allows us to use the timestamp data type to retain time information. It's also important to know how to extract certain information from timestamp objects.

PostgreSQL as well as other SQL engines provide us with an extract function we can use to extract information from timestamp objects.

Here's some [useful documentation](https://www.postgresql.org/docs/10/static/functions-datetime.html) on this topic as well.

Let's see an example of the extract function specifically for extracting the day from the timestamp object:

```SQL
SELECT customer_id, extract (day from payment_date) AS day
FROM payment;

```


This would be the output:
| customer_id   | day     |
| :-----------: | :---: |
| 341           | 15       |
| 343           | 16       |
| 261            | 16       |


Why would we would need this.

The best way to explain this would be to provide an example

Let's say you wanted to know the month of the highest gross total of sales:

```SQL
SELECT SUM(amount), extract(month from payment_date) AS month
FROM payment
GROUP BY month
ORDER by SUM(amount)
LIMIT 1
```

This query would return the following results:

| sum     |   month     |
| :----: | :--------: |
| 28559.46  | 4       |
