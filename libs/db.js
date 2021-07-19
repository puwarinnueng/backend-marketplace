const mysql = require('mysql');

const conect = mysql.createConnection({
     user: "root",
     host: "localhost",
     password: "",
     database: "web_marketplace1",
     port: "5633"
});

module.exports = conect;