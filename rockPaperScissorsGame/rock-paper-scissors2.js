let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let final = document.getElementById("Final");

let array = [rock, paper, scissors];

let Player_choice = document.getElementById("Player-choice");
let Computer_choice = document.getElementById("Computer-choice");

let Player_score = document.getElementById("Player-score");
let Computer_score = document.getElementById("Computer-score");

let Player = "";
let playerScore = 0;
let computerScore = 0;

rock.addEventListener("click" , () => {
    Player = "rock";
    PlayGame (Player);
});
paper.addEventListener("click" , () => {
    Player = "paper";
    PlayGame (Player);
});
scissors.addEventListener("click" , () => {
    Player = "scissors";
    
    PlayGame (Player);
});

function PlayGame (playerChoice){
    let choice = Math.floor(Math.random()*3);
    let computerChoice = (choice == 1)? "rock" : (choice == 2)? "paper" : "scissors";
    let result = "";

    Player_choice.textContent = `Player : ${playerChoice}`;
    Computer_choice.textContent = `Computer : ${computerChoice}`;
    
    if (playerChoice == computerChoice)
        result = "It's a tie!🪢";
    else if (playerChoice == "rock"){
        if (computerChoice == "scissors"){
            result = "You win!!🎉...Computer loses";
            playerScore++;
        }
        else{
            result = "You Lose!!👎...Computer Wins";
            computerScore++;
        }
    }
    else if (playerChoice == "paper"){
        if (computerChoice == "rock"){
            result = "You win!!🎉...Computer loses";
            playerScore++;
        }
        else{
            result = "You Lose!!👎...Computer Wins";
            computerScore++;
        }
    }
    else{
        if (computerChoice == "paper"){
            result = "You win!!🎉...Computer loses";
            playerScore++;
        }
        else{
            result = "You Lose!!👎...Computer Wins";
            computerScore++;
        }
    }

    final.textContent = result;

    Player_score.textContent = `Player Score: ${playerScore}`;
    Computer_score.textContent = `Computer Score: ${computerScore}`;

};
// array.forEach(element => {
//     setTimeout((element) => {
//        element.style.box-shadow = 0 0 5px yellow;
// },2000)
// });
