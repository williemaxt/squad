console.log('opening server script ...')

const express = require('express') // enabling express
const bodyParser = require('body-parser') // makes it easy to parse json
const cors = require('cors') // allows clients to access this app
const morgan = require('morgan') // for generating logs
const mysql = require('mysql') //allows us to use mysql
const connection = require('./connection') // including our connection file
const bcrypt = require('bcrypt');

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// this returns a different result based on the url entered for get request
app.get('/profile', (req, res) => {
  // sql query
  connection.conn.connect()
  // example query to show that we can select individuals
  connection.conn.query('SELECT * FROM users WHERE name LIKE "Michael Example"', function (err, rows, fields) {
  if (err) throw err
  // logging our results for development
  console.log('The Name is: ', rows[0].name)
  console.log('The Email is: ', rows[0].email)
  //closing the connection
  connection.conn.end()
})
  res.send({
    message: 'hello world'
  })
})

app.post('/login', (req, res) => {
  //perform queries and bcrypt actions here
  //Setting variables for email and password
  var email = req.body.email;
  var password = req.body.password;
  var hash;
  // sql query
  connection.conn.connect()
  // example query to show that we can select individuals
  var sql = 'SELECT password FROM users WHERE email LIKE "'+email+'"'
  console.log(sql)
  // executing the query
  connection.conn.query(sql, function (err, result, fields) {
    if (err) throw err;
    // variable for hash from database
    hash = result[0].password
    //matching the hash to the password
    if(bcrypt.compareSync(password, hash)) {
    // Passwords match
    console.log('The login was successful')
    } else {
    // Passwords don't match
    console.log('the login was not successful');
    }
  })
  //closing the connection
  connection.conn.end()
  res.send({
    message: 'the request is reaching me'
  })
})

// this returns a different result based on the url entered for get request
app.post('/register', (req, res) => {
  //getting variables from the post body
  var email = req.body.email
  var password = req.body.password
  var name = req.body.name
  var city = req.body.city
  var state = req.body.state
  var zip = req.body.zip
  let hash = bcrypt.hashSync(password, 10);
  //logging for development
  console.log(hash);
  // sql query
  connection.conn.connect()
  // example query to show that we can select individuals
  var sql = 'INSERT INTO users (name, email, password, state, city, zip) VALUES ("'+name+'", "'+email+'", "'+hash+'", "'+state+'", "'+city+'", '+zip+')'
  // executing the query
  connection.conn.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Account Created");
  })
  //closing the connection
  connection.conn.end()
  res.send({
    message: `Hello ${req.body.name} you have successfully registered`
  })
})

// allowig app to begin listening for requests(starting server)
app.listen(process.env.PORT || 8086)
