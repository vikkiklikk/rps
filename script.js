function getRandomValue() {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

const getUserChoice = () => {
  let userInput = prompt(
    "What do you choose? Write rock, paper, or scissors."
  ).toLowerCase();

  while (!["rock", "paper", "scissors"].includes(userInput)) {
    alert("Please write rock, paper, or scissors to continue.");
    userInput = prompt(
      "What do you choose? Write rock, paper, or scissors."
    ).toLowerCase();
  }

  return userInput;
};

function playRound(userChoice, computerChoice) {
  if (computerChoice === userChoice) {
    return "It's a tie!";
  } else if (
    (computerChoice === "rock" && userChoice === "scissors") ||
    (computerChoice === "paper" && userChoice === "rock") ||
    (computerChoice === "scissors" && userChoice === "paper")
  ) {
    return `Computer wins! ${computerChoice} beats ${userChoice}.`;
  } else {
    return `You win! ${userChoice} beats ${computerChoice}.`;
  }
}

function playGame() {
  const userChoice = getUserChoice();
  const computerChoice = getRandomValue();

  console.log(`Your choice: ${userChoice}`);
  console.log(`Computer's choice: ${computerChoice}`);

  const result = playRound(userChoice, computerChoice);
  console.log(result);
}

// Play the game
playGame();
