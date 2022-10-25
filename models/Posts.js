const Sequelize = require('sequelize');
const db = require('../db/db')

const Post = db.define('posts', {
  topic: {
    type: Sequelize.STRING,
    unique: true
  },
  contents: {
    type: Sequelize.STRING,
  },
  category: {
    type: Sequelize.STRING,
  },
  image: {
    type: Sequelize.STRING,
  },
  tags: {
    type: Sequelize.STRING,
  },
  postedBy: {
    type: Sequelize.STRING,
  },
  likes: {
    type: Sequelize.STRING,
  },
  dislike: {
    type: Sequelize.STRING,
  }
});


module.exports = Post