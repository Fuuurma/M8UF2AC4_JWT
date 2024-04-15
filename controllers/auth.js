const mysql = require('mysql2');

const auth = (req, res) => {
	let username = req.body.username;
	let password = req.body.password;
	
	// Ensure the input fields exists and are not empty
	if (username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		const connection = mysql.createConnection({
			host: process.env.MYSQL_HOST,
			user: process.env.MYSQL_USER,
			password: process.env.MYSQL_PASS,
			database: process.env.MYSQL_DB,
		});

		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password],
			function (error, results, fields) {
				// If there is an issue with the query, output the error
				if (error) throw error;
				// If the account exists
				if (results.length > 0) {
					// Authenticate the user
					req.session.loggedin = true;
					req.session.username = username;
					// Redirect to home page
					res.redirect('/list');
				} else {
					response.send('Incorrect Username and/or Password!');
				}
				res.end();
			});
	} else {
		res.send('Please enter Username and Password!');
		res.end();
	}
}

module.exports = auth