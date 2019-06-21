//on click functions for rolling dice
$("#d4").on("click", rollDie);
$("#d6").on("click", rollDie);
$("#d8").on("click", rollDie);
$("#d10").on("click", rollDie);
$("#d12").on("click", rollDie);
$("#d20").on("click", rollDie);
$("#d100").on("click", rollDie);
//initial message count variable, for message scrubber
var messageCount = 1;

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
    $("#dicePic").attr("src", "./../images/moving_d20.gif");
    setTimeout(stillDie, 1000);
}
function stillDie() {
    $("#dicePic").attr("src", "./../images/d20_still_2.png");
}
//end of dice rolling code
