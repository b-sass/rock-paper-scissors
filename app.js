const options = ["rock", "paper", "scissors"];
let computerScore = 0;
let humanScore = 0;


function getComputerChoice() {
	choice = Math.floor(Math.random() * 3)
	return options[choice];
}

let getHumanChoice = () => {
	let option = "";
	while (!(options.includes(option.toLowerCase()))) {
		option = prompt(`Type "rock", "paper", or "scissors".`);
	}
	return option.toLowerCase();
}

let playRound = (humanChoice, computerChoice) => {
	console.log(`You chose "${humanChoice}". Computer chose "${computerChoice}".`)
	if (humanChoice === computerChoice) {
		console.log("Draw!");
	}
	else if ((humanChoice === "rock" && computerChoice === "scissors")
	|| (humanChoice === "paper" && computerChoice === "rock")
	|| (humanChoice === "scissors" && computerChoice === "paper")) {
		console.log("You win!");
		humanScore++;
	}
	else {
		console.log("You lose!");
		computerScore++;
	}
}

let playGame = () => {
	while (humanScore != 5 && computerScore != 5) {
		playRound(getHumanChoice(), getComputerChoice());
		console.log(`HS: ${humanScore}\nCS: ${computerScore}`);
	}

	if (humanScore > computerScore) console.log("You win!")
	else console.log("You lose!");
}

playGame();