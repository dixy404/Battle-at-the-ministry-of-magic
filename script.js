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

  //Help Modal
  const helpModal = () => {
    const modal = document.querySelector("#helpModal");
    const btn = document.querySelector("#modalBtn");
    const span = document.querySelector(".close");

    //Open modal
    btn.onclick = function () {
      modal.style.display = "block";
    };

    //Close modal
    span.onclick = function () {
      modal.style.display = "none";
    };

    //Close modal when clicked anywhere outside it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
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

  // Game Over message
  const gameOver = () => {
    const alertW = document.querySelector("#alert-winner");
    const alertL = document.querySelector("#alert-loser");

    //When the score is 10 show message
    addEventListener("click", function () {
      if (pScore === 10) {
        alertW.style.display = "block";
      } else if (cScore === 10) {
        alertL.style.display = "block";
      }
    });
  };

  // call all inner functions
  startGame();
  helpModal();
  opponentImg();
  playMatch();
  gameOver();
};

// start the game function
game();
