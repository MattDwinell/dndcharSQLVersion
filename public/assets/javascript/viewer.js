$(document).ready(()=>{
    
charactersCall();
let selectedChar = {
    name: "",
    id: "",
    warned: false,
    char: {}
}

//time to call some data from the database, wrap it inside a function and run the function at the start to populate our character options. everything else will be on click events for character classes using 'this' to pass in to the sql search.
function charactersCall(){
    let userEmail = $(".userEmail").text();
    console.log(userEmail + 'test');
    if(!userEmail){
        setTimeout(charactersCall, 100);
    } else {
   $.get("/api/characters/user/" + userEmail, (data)=>{


       $("#character-buttons").empty();
       let characters = data;
       for (let i=0; i<data.length; i++){
           let name = data[i].charName;
           let charId = data[i].id
           console.log(name);
           let tempChar = $("<div>").text(name).attr({"character-name": name, "char-id": charId}).addClass("character cyan darken-4");
           $("#character-buttons").append(tempChar);
       }
       console.log(characters);
    })
}
}
//on click events
$(document).on("click", ".character", findCharacter);
$("#delete").on("click", deleteChar);
$("#edit").on("click", editChar);

//editing a current character, needs to pop up a submit button after clicking edit and making those changes.
function editChar(){
    $("#submit").css("visibility", "visible");
}
//getting rid of a user;s character. double checks that they want to delete the character first.
function deleteChar(){
    if (selectedChar.warned){
    console.log(selectedChar)
    
        $.ajax({
          method: "DELETE",
          url: "/api/characters/" + selectedChar.id
        })
          .then(charactersCall);
      } else {
          selectedChar.warned = true;
          alert("Are you sure? pressing delete again will delete " + selectedChar.name + " forever.");
      }
    }


//calling the server and populating the corresponding divs with character stats, also setting that character as the selected character
function findCharacter(){

    $(".character").css("border", "1px solid #009688" );
    $(this).css("border", "5px solid blue");
    $("#delete").css("visibility", "visible");
    $("#edit").css("visibility", "visible");
    let queryTerm = $(this).attr("char-id");
    $.get("/api/characters/" + queryTerm, (data)=>{
  
        console.log(data);
        let {strength, dexterity, constitution, intelligence, wisdom, charisma, armor_class, speed, hitpoints, initiative, charClass, charLevel,charAlignment, charBackground, charPersonality, charInventory, charName, spells, notes} = data[0];
        selectedChar.name = charName;
        selectedChar.id  = data[0].id;
        selectedChar.warned = false;
        selectedChar.char = {
            strength: strength,
            dexterity: dexterity,
            constitution: constitution,
            intelligence: intelligence,
            wisdom: wisdom,
            charisma: charisma,
            armor_class: armor_class,
            speed: speed,
            hitpoints: hitpoints,
            initiative: initiative,
            charClass: charClass,
            charLevel: charLevel,
            charAlignment: charAlignment,
            charBackground: charBackground,
            charPersonality: charPersonality,
            charInventory: charInventory,
            charName: charName,
            charSpells: spells,
            charNotes: notes
        }
        console.log(selectedChar);
        let proficiency = 2+ Math.floor(parseInt(charLevel)/4);
      
        let prof = $("<span>").text("+" + proficiency).addClass("cyan darken-4");
        let str = $("<span>").text(strength).addClass("cyan darken-4");
        let dex = $("<span>").text(dexterity).addClass("cyan darken-4");
        let con = $("<span>").text(constitution).addClass("cyan darken-4");
        let int = $("<span>").text(intelligence).addClass("cyan darken-4");
        let wis = $("<span>").text(wisdom).addClass("cyan darken-4");
        let cha = $("<span>").text(charisma).addClass("cyan darken-4");
        let ac = $("<span>").text(armor_class).addClass("cyan darken-4");
        let spd = $("<span>").text(speed).addClass("cyan darken-4");
        let hp = $("<span>").text(hitpoints).addClass("cyan darken-4");
        let init = $("<span>").text(initiative).addClass("cyan darken-4");
        let characterClass = $("<span>").text(charClass).addClass("cyan darken-4");
        let level = $("<span>").text(charLevel).addClass("cyan darken-4");
        let alignment = $("<span>").text(charAlignment).addClass("cyan darken-4");
        let background = $("<span>").text(charBackground).addClass("cyan darken-4");
        let personality = $("<span>").text(charPersonality).addClass("cyan darken-4");
        let inventory = $("<span>").text(charInventory).addClass("cyan darken-4");
        let displayName = $("<span>").text(charName).addClass("cyan darken-4");
        let charNotes = $("<span>").text(notes).addClass("cyan darken-4");
        let charSpells = $("<span>").text(spells).addClass("cyan darken-4");


        $("#char-str").empty().append(str);
        $("#char-dex").empty().append(dex);
        $("#char-con").empty().append(con);
        $("#char-int").empty().append(int);
        $("#char-wis").empty().append(wis);
        $("#char-cha").empty().append(cha);
        $("#char-ac").empty().append(ac);
        $("#char-spd").empty().append(spd);
        $("#char-hp").empty().append(hp);
        $("#char-init").empty().append(init);
        $("#char-race").empty().append(characterClass);
        $("#char-background").empty().append(background);
        $("#char-inventory").empty().append(inventory);
        $("#char-personality").empty().append(personality);
        $("#char-level").empty().append(level);
        $("#char-alignment").empty().append(alignment);
        $("#char-name").empty().append(displayName);
        $("#char-notes").empty().append(charNotes);
        $("#char-spells").empty().append(charSpells);
        $("#char-prof").empty().append(prof);

    })
}

})