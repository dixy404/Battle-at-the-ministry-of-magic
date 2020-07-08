//Spells: stupefy, duro, depulso, confringo, rictusempra
//Stupefy: charm that renders a victim unconscious and halts moving objects
//Duro: Turns objects and even people into stone
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
  startGame();
};

// start the game function
game();
