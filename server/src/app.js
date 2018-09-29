console.log('opening server script ...')

const express = require('express') // enabling express
const bodyParser = require('body-parser') // makes it easy to parse json
const cors = require('cors') // allows clients to access this app
const morgan = require('morgan') // for generating logs

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// this returns a different result based on the url entered for get request
app.get('/status', (req, res) => {
  res.send({
    message: 'hello world'
  })
})

// this returns a different result based on the url entered for get request
app.post('/Register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email} you have successfully registered`
  })
})

// allowig app to begin listening for requests(starting server)
app.listen(process.env.PORT || 8081)
