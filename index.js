let arr = ["rock", "paper", "scissors"]
function getComputerChoice(){
    let randno = Math.floor(Math.random()*arr.length)
    return arr[randno] + " game"
}
console.log(getComputerChoice())

function playRound(playerSelection, computerSelection){
    return "congratulations"
}
let playerSelection = "rock"
let computerSelection = getComputerChoice()
console.log(playRound(playerSelection, computerSelection))