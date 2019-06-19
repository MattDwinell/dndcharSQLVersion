$(document).ready(function () {
    var firebaseConfig = {
        apiKey: "AIzaSyCfx7JuJ4eEZIpbbgNmvNPTOkPUDuIVyyo",
        authDomain: "dndcharcreator-2c7a2.firebaseapp.com",
        databaseURL: "https://dndcharcreator-2c7a2.firebaseio.com",
        projectId: "dndcharcreator-2c7a2",
        storageBucket: "dndcharcreator-2c7a2.appspot.com",
        messagingSenderId: "427842856156",
        appId: "1:427842856156:web:71475bda7a01b447"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    database = firebase.database();
    console.log('this working');
    var messageCount = 1;
    const CharConst = function(str, dex, con, int, wis, cha, ac, spd, hp, init, charName, charClass, charLevel, charAlignment, charBackground,charPersonality, charInventory){
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





    //on click events
    $("#char-view").on("click", viewChar);
    function viewChar() {
        console.log('this working');
    }
    $("#char-create").on("click", makeCharPage);
    function makeCharPage() {
        console.log('this working');
        window.location.href="./maker.html";
    }
    $("#dice").on("click", genDice);
    function genDice() {
        console.log('this working');
        window.location.href = "./dice.html";
    }
    $(".return").on("click", mainPage);
    function mainPage() {
        window.location.href = "./index.html";
    }
    $("#d4").on("click", rollDie);
    $("#d6").on("click", rollDie);
    $("#d8").on("click", rollDie);
    $("#d10").on("click", rollDie);
    $("#d12").on("click", rollDie);
    $("#d20").on("click", rollDie);
    $("#d100").on("click", rollDie);
    $("#submit-char").on("click", makeChar);



//dice rolling code
    function rollDie(element) {
        showDie();
        var numOfDice = parseInt($("#num-of-dice").val().trim());
        console.log(numOfDice);
        if ( !numOfDice){
            numOfDice = 1;
        }
        console.log(numOfDice);
        document.getElementById('num-of-dice').value = 1;
        console.log(numOfDice);
        var diceSize = element.target.id;
        var diceNum = parseFloat(diceSize.substr(1));
        console.log(diceNum);
        var dieRoll = Math.ceil(Math.random() * diceNum);
        console.log(dieRoll);
        rollDisplay(diceNum, dieRoll, numOfDice);
    }

    function rollDisplay(maxNum, ActualNum, numDice) {
        console.log(maxNum,ActualNum, numDice)
        if(numDice == 1 || numDice == 0){
        var rollMessage = $("<p>").text('rolled a(n) ' + ActualNum + ' using a d' + maxNum).attr("class", "roll-message");
        $("#roll-holder").prepend(rollMessage);
        } else {
            for(let i=1; i<numDice; i++){
                ActualNum += Math.ceil(Math.random()*maxNum);
            }
            console.log(ActualNum);
            var rollMessage = $("<p>").text('rolled a(n) ' + ActualNum + ' using ' + numDice  + " d" + maxNum +"s").attr("class", "roll-message");
        $("#roll-holder").prepend(rollMessage);
        }
        messageCount++;
        rollScrubber();
    }
    function rollScrubber() {

        if (messageCount > 7) {
            var dialogBox = document.getElementById("roll-holder");
            dialogBox.removeChild(dialogBox.childNodes[8]);
        }
    }
    function showDie() {
        console.log('die being shown');
        $("#dicePic").attr("src", "./images/moving_d20.gif");
        setTimeout(stillDie, 1000);
    }
    function stillDie() {
        $("#dicePic").attr("src", "./images/d20_still_2.png");
    }
    //end of dice rolling code


//character creator
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
    // dex, con, int, wis, cha, ac, spd, hp, init, charName, charLevel (add to if statement when done testing)
    if(str){
    
    var tempChar = new CharConst(str, dex, con, int, wis, cha, ac, spd, hp, init, charName, charClass, charLevel, charAlignment,charBackground,charPersonality,charInventory);
    console.log(tempChar);
    
     console.log(currentUser.uid);
    
    database.ref('users/' + currentUser.uid + '/' + charName ).push({
        str: str,
        dex: dex,
        con: con,
        int: int,
        wis: wis,
        cha: cha,
        ac: ac,
        spd: spd,
        hp: hp,
        init: init,
        charName: charName,
        charClass: charClass,
        charLevel: charLevel,
        charAlignment: charAlignment,
        charBackground: charBackground,
        charPersonality: charPersonality,
        charInventory: charInventory
    })
    }
}

//when stuff is added or taken away from the system for the user:
database.ref().on("value", function(snap){
    console.log(snap.val());
    var path = snap.val().users.currentUser.uid;
    console.log(path);
})






    //firebase authentication stuff:
    $("#sign-in").on("click", function (event) {
        event.preventDefault();
        var email = $("#email").val().trim();
        var password = $("#password").val().trim();
        console.log(email, password);
        if (!email || !password) {
            $("#sign-in-message").text("please input both email and password to sign in, or create one by registering an account.");
        } else {
            firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
                console.log(error, error.message);
                $("#sign-in-message").text(error.message);
            });
        }
    })

    $("#register").on("click", function (event) {
        event.preventDefault();
        var email = $("#email").val().trim();
        var password = $("#password").val().trim();
        console.log(email, password);
        if (!email || !password) {
            $("#sign-in-message").text("please input both email and password to sign in, or create one by registering an account.");
        } else {
            firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
                $("#sign-in-message").text(error.message);
            });
        }
    })


    $(".sign-out").on("click", function () {
        firebase.auth().signOut();
    })






var currentUser;

    //firebase on user login stuff
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            currentUser = user;
            console.log(currentUser);
            $("#welcome-banner").text("Welcome to the Character Creator, " + user.email + "!");
            $(".welcome").text("Welcome to the Dice Roller, " + user.email);
            $(".welcome-maker").text("Forge a new character, " + user.email);

            console.log(user, user.email);
            $("#sign-in-wrapper").css("display", "none");
            $("#app-wrapper").css("display", "block");
        } else {
            console.log("test");
            $("#sign-in-wrapper").css("display", "block");
            $("#app-wrapper").css("display", "none");
        }
    })









})

