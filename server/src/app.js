console.log('opening server script ...');

const express = require('express') ;// enabling express
const bodyParser = require('body-parser'); // makes it easy to parse json
const cors = require('cors'); // allows clients to access this app
const morgan = require('morgan') ;// for generating logs
const mysql = require('mysql'); //allows us to use mysql
const connection = require('./connection'); // including our connection file
const bcrypt = require('bcrypt');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

//end point to create a post
app.post('/createPost', (req,res) => {
  //variables to get data from request body
  var user = req.body.title
  var title = req.body.title
  var body = req.body.body
  var timestamp; // TODO: CREATE AUTOMATIC TIMESTAMP

  //sql statement
  var sql = 'INSERT INTO posts (user, title, body, timestamp) VALUES (?,?,?,?)'

  //performing ther query
  connection.conn.query(sql, [user, title, body, timestamp], (err, result, fields) => {
    if(err) throw err; //if there is an error then it will throw an error
    //after successful query send a success message to client
    res.send('success')
  });
});

//end point to delete posts
app.post('/deletePost', (req,res) => {
  //variable to retrieve the post id from the request body
  var postId = req.body.postId;
  //sql statement
  var sql = 'DELETE * FROM posts WHERE id = ?'

  //executing the query
  connection.conn.query(sql, [postId], (err, result, fields) => {
    //thorow error if found
    if (err) throw err;
    //if query was successful, prompt the user
    res.send('success');
  });
});

// End point to retrieve posts
app.post('/getPosts', (req, res) => {
  var email = req.body.email;
  //variable for holding the result of the query
  var data;
  // sql query
  var sql = 'SELECT * FROM posts WHERE user LIKE ?'
  // example query to show that we can select individuals
  connection.conn.query(sql, [email], function (err, result, fields) {
  if (err) throw err;
  // logging our results for development
  console.log(result);
  //parsing the raw data packets into json
  data = JSON.stringify(result);
  res.send(data);
})
});

app.post('/login', (req, res) => {
  //perform queries and bcrypt actions here
  //Setting variables for email and password
  var email = req.body.email;
  var password = req.body.password;
  var hash;
  // sql query
  // example query to show that we can select individuals
  var sql = 'SELECT password FROM users WHERE email LIKE ?';
  console.log(sql);
  // executing the query
  connection.conn.query(sql,[email], function (err, result, fields) {
    if (err) throw err;
    // variable for hash from database
    hash = result[0].password;
    //matching the hash to the password
    if(bcrypt.compareSync(password, hash)) {
    // Passwords match
    res.send({
      email: `${req.body.email}`
    });
    console.log('The login was successful')
    } else {
    // Passwords don't match
    res.send({
      message: `The Login was not successful`
    });
    console.log('the login was not successful');
    }
  });
});

// this returns a different result based on the url entered for get request
app.post('/register', (req, res) => {
  //getting variables from the post body
  var email = req.body.email;
  var password = req.body.password;
  var name = req.body.name;
  var city = req.body.city;
  var state = req.body.state;
  var zip = req.body.zip;
  let hash = bcrypt.hashSync(password, 12);
  //logging for development
  console.log(hash);
  // sql query
  // example query to show that we can select individuals
  var sql = 'INSERT INTO users (name, email, password, state, city, zip) VALUES (?,?,?,?,?,?)'
  // executing the query
  connection.conn.query(sql,[name, email, hash, state, city, zip], function (err, result) {
    if (err) throw err;
    console.log("Account Created");
  });
  res.send({
    message: `Hello ${req.body.name} you have successfully registered`
  })
});

// allowig app to begin listening for requests(starting server)
app.listen(process.env.PORT || 8086)
