module.exports = (app) => {
    // End point to retrieve posts
    app.post('/getPosts', (req, res) => {
        var email = req.body.email;
        console.log('the email is: '+email)
        var data;
        // sql query
        connection.conn.connect()
        // example query to show that we can select individuals
        connection.conn.query('SELECT * FROM posts WHERE user LIKE "'+email+'"', function (err, result, fields) {
            if (err) throw err
            // logging our results for development
            console.log(result)
            //parsing the raw data packets into json
            data = JSON.stringify(result)
            res.send(data)
            //closing the connection
            connection.conn.end()
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
                res.send({
                    email: `${req.body.email}`
                })
                console.log('The login was successful')
            } else {
                // Passwords don't match
                res.send({
                    message: `The Login was not successful`
                })
                console.log('the login was not successful');
            }
        })
        //closing the connection
        connection.conn.end()
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
        let hash = bcrypt.hashSync(password, 12); // TODO: change value
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
}
