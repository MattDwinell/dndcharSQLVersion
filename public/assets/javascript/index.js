    //on click events
    $("#char-view").on("click", viewChar);
    function viewChar() {
        console.log('this working');
    }
    $("#char-create").on("click", makeCharPage);
    function makeCharPage() {
        console.log('this working');
        window.location.href = "./maker.html";
    }
    $("#dice").on("click", genDice);
    function genDice() {
        console.log('this working');
        window.location.href = "./dice.html";
    }