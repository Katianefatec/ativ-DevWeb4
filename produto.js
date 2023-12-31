const Sequelize = require('sequelize');
const sequelize = require('./db');

const Produto = sequelize.define('produto', {
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  valor: {
    type: Sequelize.FLOAT,
    allowNull: false
  }
});

module.exports = Produto;