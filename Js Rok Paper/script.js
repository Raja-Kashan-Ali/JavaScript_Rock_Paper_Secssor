let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
    // Rock, Paper, Scessor
    const options = ["rock", "paper","scissors"];
    const randIdx =  Math.floor(Math.random() * 3); 
    return options [randIdx];
};

const drawGame = () => {
   
    msg.innerText = "Game Draw Play Again";
    msg.style.backgroundColor = "#081b31"
}

showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You Win ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"
    } else{    
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You lose. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red"
    }
}

const playGame = (userChoice) => {
   console.log("user choice =", userChoice)
  // Generate Computer Choice
   const compChoice = genCompChoice();
   console.log("comp choice =", compChoice)

   if(userChoice === compChoice){
    // Draw Game
    drawGame();
   }else{
    let userWin = true;
     if(userChoice === "rock"){
        // Scissor,paper
        compChoice === "paper" ? false : true;
     }else if(userChoice === "paper"){
        // Rock, Scissor
        compChoice === "scessors" ? false : true;
     }else{
        // rock,paper
        userWin = compChoice === "rock" ? false : true;
     }
     showWinner(userWin, userChoice, compChoice);
   }
};

choices.forEach((choice) => {
     choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
     });
});