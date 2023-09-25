const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "ventafacil",
});

db.connect((err) => {
  if (err) {
    console.log("Error connecting to DB");
    return;
  }
  console.log("Connection established");
});

module.exports = db;
