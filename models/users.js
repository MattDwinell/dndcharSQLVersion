var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");
var Users = sequelize.define("users", {
    userEmail: Sequelize.STRING
}, {
    freezeTableName: true
});
Users.sync();
module.exports = Users;