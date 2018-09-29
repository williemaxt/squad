module.exports = (app) => {
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
}
