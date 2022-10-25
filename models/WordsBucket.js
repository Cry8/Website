const Sequelize = require('sequelize');
const db = require('../db/db')

const WordsBucket = db.define('buckets', {
  wordPhrase: {
    type: Sequelize.STRING,
  },
  contents: {
    type: Sequelize.STRING,
  },
});


module.exports = WordsBucket