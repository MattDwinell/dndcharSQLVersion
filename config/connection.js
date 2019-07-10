
var Sequelize = require("sequelize");
const jawsdb = process.env.JAWSDB_URL;
const jawsUsername = process.env.jawsUsername;
const jawsPassword = process.env.password;
const jawsDBName = "j9sfrsa6x00mtqvh";

var sequelize = new Sequelize(jawsdb);
// var sequelize = new Sequelize(jawsDBName, jawsUsername, jawsPassword, {
//   host: jawsdb,
//   port: 3306,
//   dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   }
// });

// Exports the connection for other files to use
module.exports = sequelize;
