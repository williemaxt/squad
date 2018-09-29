console.log('opening server script ...');

const express = require('express'); // enabling express
const bodyParser = require('body-parser'); // makes it easy to parse json
const cors = require('cors'); // allows clients to access this app
const morgan = require('morgan'); // for generating logs
const mysql = require('mysql'); // importing mysql
const {sequelize} = require('./models'); //  for connecting to SQL DBs
const config = require('./config/config'); // config file with our port

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

require('./routes')(app); // requiring the 'routes' file that has all our routes and passing app to it

sequelize.sync()
.then(() => {
  // allowig app to begin listening for requests(starting server)
  // getting the port from the config file
  app.listen(config.port);
  console.log(`server started and running on port: `${config.port});
});
