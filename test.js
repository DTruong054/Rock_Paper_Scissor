// var things = ['Rock', 'Paper', 'Scissor'];
// var thing = things[Math.floor(Math.random()*things.length)];
// alert('The computer chose:' + thing);
// ============================================
// while(true){
//     var things = ['Rock', 'Paper', 'Scissor'];
//     var thing = things[Math.floor(Math.random()*things.length)];
//     alert('Rock, Paper, Scissor, Shoot! (' + thing + ")");
// }
//These are the var for the buttons
var rockButton = document.getElementById("rock");
var paperButton = document.getElementById("paper");
var scissorButton = document.getElementById("scissor");
var things = ['Rock', 'Paper', 'Scissor'];

//This is going to put a cycle though rock, paper, and scissor randomly.
function computerChoose() {
  // var things = ['Rock', 'Paper', 'Scissor'];
  var thing = things[Math.floor(Math.random()*things.length)];
  alert('Rock, Paper, Scissor, Shoot! (' + thing + ')');
}

function winner() {
  var win = true;
  var lose = false;
}

//This makes the button work
rockButton.addEventListener("click", computerChoose);
paperButton.addEventListener("click", computerChoose);
scissorButton.addEventListener("click", computerChoose);
