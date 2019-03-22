let userScore = 0;
let computerScore = 0;
let userWins = 0;
let computerWins = 0;
const userName = prompt("What is your username?");
const userName_span = document.getElementById("user-label");
const computerName = prompt("What is the computer's name?")
const computerName_span = document.getElementById("computer-label");
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const winner_div = document.querySelector(".result > h3");
const userWins_div = document.querySelector(".result > h4")
const computerWins_div = document.querySelector(".result > h5")
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getUserName(userName) {
    userName_span.innerHTML = userName;
}
function getComputerName(computerName) {
    computerName_span.innerHTML = computerName;
}
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = (Math.floor(Math.random() * 3));
    computerChoice = choices[randomNumber]
    return computerChoice;
}

function win(userChoice, computerChoice) {
    const smallUserWord = userName.fontsize(3).sup();
    const smallComputerWord = computerName.fontsize(3).sup();
    userScore++;
    userScore_span.innerHTML = userScore;
    if ( userScore >= 10) {
      userWins++;
      winner_div.innerHTML = "Game over!";
      result_div.innerHTML = userName + " won the game!";
      userWins_div.innerHTML = userName + " wins: " + userWins;
      computerWins_div.innerHTML = computerName + " wins: " + computerWins;
      userScore = 0;
      userScore_span.innerHTML = userScore;
      computerScore = 0;
      computerScore_span.innerHTML = computerScore;
    } else {
      result_div.innerHTML = smallUserWord + " " + userChoice + " beats " + computerChoice +  " " + smallComputerWord;
      winner_div.innerHTML = userName + " wins!!";
    }
    document.getElementById(userChoice).classList.add("win-glow");
    setTimeout(function() { document.getElementById(userChoice).classList.remove("win-glow") }, 450);
}
function lose(userChoice, computerChoice) {
    const smallUserWord = userName.fontsize(3).sup();
    const smallComputerWord = computerName.fontsize(3).sup();
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    if ( computerScore >= 10) {
      computerWins++;
      winner_div.innerHTML = "Game over!";
      result_div.innerHTML = computerName + " won the game!";;
      userWins_div.innerHTML = userName + " wins: " + userWins;
      computerWins_div.innerHTML = computerName + " wins: " + computerWins;
      computerScore = 0;
      computerScore_span.innerHTML = computerScore;
      userScore = 0;
      userScore_span.innerHTML = computerScore;
    } else {
      result_div.innerHTML = smallComputerWord + " " + computerChoice + " beats " + userChoice + " " + smallUserWord;
      winner_div.innerHTML = computerName + " wins!!";
    }
    document.getElementById(userChoice).classList.add("lose-glow");
    setTimeout(function() { document.getElementById(userChoice).classList.remove("lose-glow") }, 900);
}
function draw(userChoice, computerChoice) {
    const smallUserWord = userName.fontsize(3).sup();
    const smallComputerWord = computerName.fontsize(3).sup();
    console.log("It's a tie.");
    result_div.innerHTML = smallUserWord + " " + userChoice + " ties " + computerChoice + " " + smallComputerWord;
    winner_div.innerHTML = "It's a draw!";
    document.getElementById(userChoice).classList.add("draw-glow");
    setTimeout(function() { document.getElementById(userChoice).classList.remove("draw-glow") }, 900);
}

function game(userChoice) {
    const compChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, computerChoice);
            break;
}

}

function main() {
    getUserName(userName);
    getComputerName(computerName);
      rock_div.addEventListener('click', function() {
          game("rock");
      })
      paper_div.addEventListener('click', function() {
          game("paper");
      })
      scissors_div.addEventListener('click', function() {
          game("scissors");
      })
}

main();
