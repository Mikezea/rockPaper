let userScore = 0;
let computerScore =0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("comp-score");
let scoreBoard_div = document.querySelector("score-board")
let result_p = document.querySelector(".message >p");
let rock_div = document.getElementById("rock");
let paper_div = document.getElementById("paper");
let scissors_div = document.getElementById("scissors");

function convertletter(word){
    if(word==="r")return "rock"
    else if(word==="p") return "paper"
    else return "scissors"
}
function getComputerChoice(){
    let compChoice = ["r", "p", "s"]
    let randNo = (Math.floor(Math.random()*3))
    return compChoice[randNo]
}

function win(user, computer){
    userScore++
    userScore_span.innerHTML=userScore
    computerScore_span.innerHTML = computerScore
    result_p.innerHTML = `${convertletter(user)}  beats  ${convertletter(computer)} " you win"` 
}
function lose(user, computer){
    computerScore++
    userScore_span.innerHTML=userScore
    computerScore_span.innerHTML = computerScore
    result_p.innerHTML = `${convertletter(user)}  beats  ${convertletter(computer)} " you lose"` 
}
function draw(){
    userScore++
    userScore_span.innerHTML=userScore
}

function game(userChoice){
    let computerChoice = getComputerChoice()
     switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            break
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice,computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice)
    }
}

function main(){
    rock_div.addEventListener("click",function(){
        game("r")
    } )
    paper_div.addEventListener("click", function(){
        game("p")
    })
    scissors_div.addEventListener("click", function(){
        game("s")
    })
}
main()