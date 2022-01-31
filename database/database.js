const Sequelize = require("sequelize");

const connection = new Sequelize('tiperguntas', 'root', 'TLbS!hV!gx&$',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;