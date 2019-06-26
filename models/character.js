var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");
var Character = sequelize.define("characters", {
  userEmail: Sequelize.STRING,
  charName: Sequelize.STRING,
  strength: Sequelize.INTEGER,
  dexterity: Sequelize.INTEGER,
  constitution: Sequelize.INTEGER,
  intelligence: Sequelize.INTEGER,
  wisdom: Sequelize.INTEGER,
  charisma: Sequelize.INTEGER,
  armor_class: Sequelize.INTEGER,
  speed: Sequelize.INTEGER,
  hitpoints: Sequelize.INTEGER,
  initiative: Sequelize.INTEGER,
  charClass: Sequelize.STRING,
  charLevel: Sequelize.INTEGER,
  charAlignment: Sequelize.STRING,
  charBackground: Sequelize.STRING,
  charPersonality: Sequelize.STRING,
  charInventory: Sequelize.STRING,
  notes: Sequelize.STRING,
  spells: Sequelize.STRING

}, {
  freezeTableName: true
});
Character.sync();

module.exports = Character;