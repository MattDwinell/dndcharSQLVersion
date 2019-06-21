//character constructor
const CharConst = function(userEmail, str, dex, con, int, wis, cha, ac, spd, hp, init, charName, charClass, charLevel, charAlignment, charBackground,charPersonality, charInventory){
    this.userEmail = userEmail;
    this.str= str;
    this.dex= dex;
    this.con = con;
    this.int = int;
    this.wis = wis;
    this.cha = cha;
    this.ac = ac;
    this.spd= spd;
    this.hp = hp;
    this.init = init;
    this.name = charName
    this.raceClass = charClass;
    this.level = charLevel;
    this.alignment = charAlignment;
    this.background = charBackground;
    this.personality = charPersonality;
    this.inventory= charInventory;

}

//on click event for user-created character
$("#submit-char").on("click", makeChar);

// function for user generated character-- NEEDS TO BE ADAPTED TO MYSQL
function makeChar(){
    var str = $('#str').val();
    var dex = $('#dex').val();
    var con = $('#con').val();
    var int = $('#int').val();
    var wis = $('#wis').val();
    var cha = $('#cha').val();
    var ac = $('#ac').val();
    var spd = $("#spd").val();
    var hp = $('#max-hp').val();
    var init = $('#init').val();
    var charName = $("#char-name").val();
    var charClass = $("#char-class").val();
    var charLevel = $("#char-level").val();
    var charAlignment = $("#char-alignment").val();
    var charBackground = $("#char-background").val();
    var charPersonality = $("#char-personality").val();
    var charInventory = $("#char-inventory").val();
    var userEmail = $("#userEmail").text();
    // dex, con, int, wis, cha, ac, spd, hp, init, charName, charLevel (add to if statement when done testing)
    if(str){
        console.log(userEmail);
    
    var tempChar = new CharConst(userEmail, str, dex, con, int, wis, cha, ac, spd, hp, init, charName, charClass, charLevel, charAlignment,charBackground,charPersonality,charInventory);
    console.log(tempChar);
    $.post('/api/characters', tempChar, (data, status)=>{
        console.log(status);
        console.log('data from post: ');
        console.log(data);
        console.log( data.charName);

    })


    }
}
