const CompChoiceDisplay = document.getElementById("CompChoice");
const UserChoiceDisplay = document.getElementById("userchoice");
const resultDisplay = document.getElementById("result");
const options = document.querySelectorAll("button");
const effectsContainer = document.getElementById("effects-container");

let userChoice;
let CompChoice;
let result;

options.forEach((choice) =>
  choice.addEventListener("click", (e) => {
    clearEffects();
    userChoice = e.target.id;
    UserChoiceDisplay.innerHTML = userChoice;
    generateCompChoice();
    getresult();
  })
);

function generateCompChoice() {
  const RandomNumber = Math.floor(Math.random() * 3) + 1; //1,2,3

  if (RandomNumber === 1) {
    CompChoice = "Rock";
  }
  if (RandomNumber === 2) {
    CompChoice = "Paper";
  }
  if (RandomNumber === 3) {
    CompChoice = "Scissor";
  }
  CompChoiceDisplay.innerHTML = CompChoice;
}

function getresult() {
  if (CompChoice === userChoice) {
    result = "It's a Draw!";
  } else if (
    (CompChoice === "Rock" && userChoice === "Paper") ||
    (CompChoice === "Paper" && userChoice === "Scissor") ||
    (CompChoice === "Scissor" && userChoice === "Rock")
  ) {
    result = "YOU WON!";
    triggerConfetti();
  } else {
    result = "YOU lost";
    triggerVisualEffect(CompChoice);
  }
  resultDisplay.innerHTML = result;
}

function triggerVisualEffect(type) {
  for (let i = 0; i < 15; i++) {
    const elem = document.createElement("div");
    elem.classList.add("effect", type.toLowerCase());
    elem.style.left = Math.random() * 100 + "vw";
    effectsContainer.appendChild(elem);
  }
  setTimeout(clearEffects, 3000);
}

function triggerConfetti() {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
    confetti.style.animationDelay = Math.random() * 2 + "s";
    effectsContainer.appendChild(confetti);
  }
  setTimeout(clearEffects, 3000);
}

function clearEffects() {
  effectsContainer.innerHTML = "";
}
