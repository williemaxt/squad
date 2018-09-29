model.exports = (sequelize, DataTypes) =>
// define a user model
sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  password: DataTypes.STRING
})
