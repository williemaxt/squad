const mysql = require('mysql') //allows us to use mysql

const conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'ogbytheoz',
  database : 'squad'
});
module.exports = {
  conn
}
