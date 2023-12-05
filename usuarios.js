const Sequelize = require('sequelize');
const sequelize = require('./db');

const User = sequelize.define('usuarios', {
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  consumo: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = User;