const mysql = require('mysql2');

const is_heroku = process.env.IS_HEROKU || false;

//mysql://b0f63b268f625b:5220ece4@us-cdbr-east-03.cleardb.com/heroku_95e3d73682bab15?reconnect=true

const dbConfigHeroku = {
	host: "us-cdbr-east-03.cleardb.com",
	user: "b0f63b268f625b",
	password: "5220ece4",
	database: "heroku_95e3d73682bab15",
	multipleStatements: false,
	namedPlaceholders: true
};

const dbConfigLocal = {
	host: "localhost",
	user: "root",
	password: "Password",
	database: "lab_example",
	multipleStatements: false,
	namedPlaceholders: true
};

if (is_heroku) {
	var database = mysql.createPool(dbConfigHeroku);
}
else {
	var database = mysql.createPool(dbConfigLocal);
}

module.exports = database;
		