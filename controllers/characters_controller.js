var Characters = require("../models/character.js");
var Users = require("../models/users.js");
module.exports = function(app){
    app.get("/api/characters", (req, res)=>{
        Characters.findAll().then((result)=>{
            return res.json(result);
        })
    })
app.post("/api/characters", (req,res)=>{
    console.log(JSON.stringify(req.body));
    let character = req.body;
Characters.create({
    userEmail: 'testemail@gmail.com',
    charName: character.charName,
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
    charClass: character.charClass,
    charLevel: character.charLevel,
    charAlignment: character.charAlignment,
    charBackground: character.charBackground,
    charPersonality: character.charPersonality,
    charInventory: character.charInventory

}).then((results)=>{
    res.json(results);
})
})

}