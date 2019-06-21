var Characters = require("../models/character.js");
var Users = require("../models/users.js");
module.exports = function(app){
    app.get("/api/characters", (req, res)=>{
        Characters.findAll().then((result)=>{
            return res.json(result);
        })
    })
app.post("/api/characters", (req,res)=>{
    console.log('this is what is sent to the post request' +JSON.stringify(req.body));
    let character = req.body;
    console.log(character);
    console.log(character.name);
Characters.create({
    userEmail: character.userEmail,
    charName: character.name,
    strength: character.str,
    dexterity: character.dex,
    constitution: character.con,
    intelligence: character.int,
    wisdom: character.wis,
    charisma: character.cha,
    armor_class: character.ac,
    speed: character.spd,
    hitpoints: character.hp,
    initiative: character.init,
    charClass: character.raceClass,
    charLevel: character.level,
    charAlignment: character.alignment,
    charBackground: character.background,
    charPersonality: character.personality,
    charInventory: character.inventory
},
{
    timestamps:false,
    freezeTableName: true
}).then((results)=>{
    res.json(results);
})
})

}