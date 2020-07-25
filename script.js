//Spells: stupefy, depulso, confringo, rictusempra
//Stupefy: charm that renders a victim unconscious and halts moving objects
//Depulso: Pushes an object away with a powerful blast
//Confringo: Causes fireballs to shoot out from the user's wand
//Rictusempra: Also known as the tickling charm, Rictusempra causes the opponent to buckle over laughing.

const game = () => {
  let pScore = 0;
  let cScore = 0;

  // Start the game
  const startGame = () => {
    const playBtn = document.querySelector(".answerYes");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".duel");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  // Opponent Image
  const opponentImg = () => {
    const deImage = document.querySelector("#opponentImg");

    // Show random Image
    const imageArray = [
      "assets/Bellatrix_Lestrange.png",
      "assets/Death_Eater.png",
      "assets/Lord_Voldemort.png",
    ];

    const randomImage = Math.floor(Math.random() * imageArray.length);
    deImage.src = imageArray[randomImage];
  };

  // Play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");

    // Computer options
    const computerOptions = ["stupefy", "depulso", "confringo", "rictusempra"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        //Computer Choice
        const computerNumber = Math.floor(Math.random() * 4);
        const computerChoice = computerOptions[computerNumber];

        // Here is where we call compare spells
        compareSpells(this.textContent, computerChoice);
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".your-score p");
    const computerScore = document.querySelector(".de-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareSpells = (playerChoice, computerChoice) => {
    // Update Text
    const winner = document.querySelector(".winner");
    //Checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      return;
    }

    //Check for Stupefy
    if (playerChoice === "stupefy") {
      if (computerChoice === "depulso") {
        winner.textContent = "You Win";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Death Eater Wins";
        cScore++;
        updateScore();
        return;
      }
    }

    //Check for Depulso
    if (playerChoice === "depulso") {
      if (computerChoice === "rictusempra") {
        winner.textContent = "You Win";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Death Eater Wins";
        cScore++;
        updateScore();
        return;
      }
    }

    //Check for Confringo
    if (playerChoice === "confringo") {
      if (computerChoice === "stupefy") {
        winner.textContent = "Death Eater Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "You Win";
        pScore++;
        updateScore();
        return;
      }
    }

    //Check for Rictusempra
    if (playerChoice === "rictusempra") {
      if (computerChoice === "confringo") {
        winner.textContent = "Death Eater Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "You Win";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  // call all inner functions
  startGame();
  opponentImg();
  playMatch();
};

// start the game function
game();
