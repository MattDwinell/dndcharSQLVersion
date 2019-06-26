var Characters = require("../models/character.js");
var Users = require("../models/users.js");
module.exports = function (app) {

    //returns all characters in the characters table
    app.get("/api/characters/user/:user", (req, res) => {
        const {user} = req.params;
        Characters.findAll({
            where: {
                userEmail: user
            }
        }).then((result) => {
            return res.json(result);
        })
    })
    //returns a character with the name specified by the character element the user clicks on in viewer.html
    app.get("/api/characters/:id", (req, res)=>{
        let searchId = req.params.id
        console.log('in api character search');
        console.log(searchId);
        Characters.findAll({
            where:{
                id: searchId
            }
        }).then((result)=>{
            return res.json(result);
        })
    })

//adds a new character to the table
    app.post("/api/characters", (req, res) => {
        console.log('this is what is sent to the post request' + JSON.stringify(req.body));
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
            charInventory: character.inventory,
            spells: character.spells,
            notes: character.notes

        },
            {
                timestamps: false,
                freezeTableName: true
            }).then((results) => {
                res.json(results);
            })
    })

    app.delete("/api/characters/:id", (req, res)=> {
        Characters.destroy({
          where: {
            id: req.params.id
          }
        })
          .then(function(dbPost) {
            res.json(dbPost);
          });
      });

}