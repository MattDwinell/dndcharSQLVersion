    //on click events
    $("#char-view").on("click", viewChar);
    function viewChar() {
        console.log('this working');
        var route= window.location.href;
        var rootRoute =route.includes('index');
        if(!rootRoute){
            console.log('root route ');
            window.location.href='./assets/html/viewer.html'
        } else {
            window.location.href='./viewer.html';
        }
    }
    $("#char-create").on("click", makeCharPage);
    function makeCharPage() {
        console.log('this working');
        window.location.href = "./maker.html";
    }
    $("#dice").on("click", genDice);
    function genDice() {
        console.log('this working');
        console.log(window.location.href);
        var route = window.location.href;
        var rootRoute =route.includes('index');
        if (!rootRoute){
            console.log('this working')
            window.location.href = './assets/html/dice.html'
        } else {
        window.location.href = "./dice.html";
        }
    }