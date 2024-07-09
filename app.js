const options = ["Rock", "Paper", "Scissors"];
let optionList = document.querySelector("ul");
let humanOption = "";
let computerPoints = 0;
let humanPoints = 0;
let playing = true;

let humanPlay = document.querySelector(".human");
let computerPlay = document.querySelector(".computer");
let score = document.querySelector(".score");

let roundsPlayed = 0;

function getComputerChoice() {
	choice = Math.floor(Math.random() * 3)
	return options[choice];
}

let getHumanChoice = target => {
	// When user clicks on an emoji
	if (target.className == "emoji") {
		// Set their option
		let sign = target.parentNode.id;
		return sign.substring(0,1).toUpperCase() + sign.substring(1);
	}
	return null;
}

let getEmoji = s => {
	switch(s) {
		case "Rock":
			return "👊";
		case "Paper":
			return "🖐️";
		case "Scissors":
			return "✌️";
	}
}

let createElements = (humanChoice, computerChoice) => {
	// Define human elements
	humanEmoji = document.createElement("div");
	humanText = document.createElement("p");

	humanEmoji.classList.add("emoji");
	humanEmoji.textContent = getEmoji(humanChoice);
	humanText.textContent = humanChoice;
	
	// Define computer elements
	computerEmoji = document.createElement("div");
	computerText = document.createElement("p");
	
	computerEmoji.classList.add("emoji");
	computerEmoji.textContent = getEmoji(computerChoice);
	computerText.textContent = computerChoice;

	return [
		[humanEmoji, humanText],
		[computerEmoji, computerText]
	]
}

let playRound = e => {
	let winner = document.querySelector(".winner");
	let winnerText = "";
	let winnerColour = "";
	
	humanChoice = getHumanChoice(e.target);

	// Exit if user didn't click on emoji
	if (humanChoice == null) {
		return;
	}

	computerChoice = getComputerChoice();

	// Game logic
	if (humanChoice === computerChoice) {
		draw = true;
	}
	else if ((humanChoice === "Rock" && computerChoice === "Scissors")
	|| (humanChoice === "Paper" && computerChoice === "Rock")
	|| (humanChoice === "Scissors" && computerChoice === "Paper")) {
		humanPoints++;
		roundsPlayed++;
	}
	else {
		computerPoints++;
		roundsPlayed++;
	}

	if (roundsPlayed < 6 && playing) {

		// Create HTML elements
		let elements = createElements(humanChoice, computerChoice);
		
		// Create score
		humanScore = document.createElement("p");
		divider = document.createElement("p");
		computerScore = document.createElement("p");
		
		humanScore.textContent = humanPoints;
		divider.textContent = ":";
		computerScore.textContent = computerPoints;
		
		humanPlay.innerHTML = "";
		score.innerHTML = "";
		computerPlay.innerHTML = "";
		
		humanPlay.appendChild(elements[0][0]);
		humanPlay.appendChild(elements[0][1]);
		computerPlay.appendChild(elements[1][0]);
		computerPlay.appendChild(elements[1][1]);
		
		score.appendChild(humanScore);
		score.appendChild(divider);
		score.appendChild(computerScore);
	}


	// Winning conditions
	if (roundsPlayed == 5) {
		if (humanPoints > computerPoints) {
			winnerText = "You won!";
			winnerColour = "#8aadf4";
		}
		else {
			winnerText = "You lost!";
			winnerColour = "#ed8796"
		}
		winner.textContent = winnerText;
		winner.style.color = winnerColour;
		playing = false;
		return;
	}
}

optionList.addEventListener("click", playRound);