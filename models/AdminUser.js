const Sequelize = require('sequelize');
const db = require('../db/db')

const AdminUser = db.define('admins', {
  username: {
    type: Sequelize.STRING,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
  },
  twitter: {
    type: Sequelize.STRING,
  },
  facebook: {
    type: Sequelize.STRING,
  },
  medium: {
    type: Sequelize.STRING,
  },
  role: {
    type: Sequelize.STRING,
  }
});


module.exports = AdminUser