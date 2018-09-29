module.exports = {
  port: process.env.PORT || 8081,
  db: { // this is where we put db credentials
    database: process.env.DB_NAME || 'squad',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'ogbytheoz',
    options: {
      dialect: process.env.DIALECT || 'mysql',
      host: process.env.HOST || 'localhost'
    }
  }
}
