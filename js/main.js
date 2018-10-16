// Grab elements Create Variables

const die = document.querySelector(".die");
const roll = document.querySelector(".roll");
const img = die.querySelector("img");

const players = [
    {player : document.querySelector(".player1"), location: 0},
    {player : document.querySelector(".player2"), location: 0},
    {player : document.querySelector(".player3"), location: 0},
    {player : document.querySelector(".player4"), location: 0}
]


const numPlayers = players.length;
let turn = 0;
const maxRoll = 6;
const maxSpots = getSpots().length -1;

// Define Function
function rollDie(e) {
    roll.textContent = "";
    img.src="img/Dodecahedron3.gif";
    setTimeout(() => {
        const num = Math.ceil(Math.random() * maxRoll);
        roll.textContent = num;
        movePlayer(num, getSpots());
        changeTurn();
    }, 1900)
}

function movePlayer(num, spots) {
    //Increment the location of the player by the amount of the roll
    players[turn].location += num;
    //Check if we went around the board
    players[turn].location = players[turn].location > maxSpots ? players[turn].location - maxSpots : players[turn].location;
    //Depending on the players new location append the player element in its appropriaate location
    spots[players[turn].location].appendChild(players[turn].player)

}

function changeTurn () {
    //Increment the turn variable
    turn = turn >= numPlayers -1 ? 0 : turn + 1;
}


// Add event listeners call function
die.addEventListener("click", rollDie);
roll.addEventListener("click",rollDie);