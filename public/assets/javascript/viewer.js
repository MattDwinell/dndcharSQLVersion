$(document).ready(()=>{
console.log('inside ready function');
charactersCall();


//time to call some data from the database, wrap it inside a function and run the function at the start to populate our character options. everything else will be on click events for character classes using 'this' to pass in to the sql search.
function charactersCall(){
   $.get("/api/characters", (data)=>{
       let characters = data;
       for (let i=0; i<data.length; i++){
           let name = data[i].charName;
           console.log(name);
           let tempChar = $("<div>").text(name).attr("character-name", name).addClass("character cyan darken-4");
           $("#character-buttons").append(tempChar);
       }
       console.log(characters);
})
}

$(document).on("click", ".character", findCharacter);
function findCharacter(){
    let queryTerm = $(this).attr("character-name");
    console.log(queryTerm);
}

})