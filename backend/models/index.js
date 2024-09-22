const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
// Cambié 'dbconfig' a 'dbConfig' para que coincida con la importación
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorAliases: false,  // También corregí 'operatorAliasses' a 'operatorAliases'

  pool: {
    max: dbConfig.pool.max,  // Añadido 'pool' antes de cada parámetro
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Corregí 'required' a 'require'
db.bicycles = require("./bicycle.model.js")(sequelize, Sequelize);

module.exports = db;
