let randomNumber = Math.round(Math.random() * 20) + 1;
console.log(randomNumber);
let score = 10;
let highscore = 0;

const messageDisplay = function (message) {
  document.querySelector(".message").textContent = message;
};
const updateScore = function (message) {
  document.querySelector(".score").textContent = message;
};
const updateHighscore = function (message) {
  document.querySelector(".highscore").textContent = message;
};
const newInput = function () {
  document.querySelector(".guess").value = "";
};

document.querySelector(".check").addEventListener("click", function () {
  const input = Number(document.querySelector(".guess").value);

  if (!input || input > 20 || input < 1) {
    messageDisplay("❌ Enter a Number Between 1 and 20");
  } else {
    if (input == randomNumber) {
      messageDisplay("✅ You guessed it right");
      document.querySelector(".number").textContent = randomNumber;
      if (score > highscore) {
        updateHighscore(score);
      }
      document.querySelector("body").style.backgroundColor = "green";
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".check").style.visibility = "hidden";
      document.querySelector(".guess").style.visibility = "hidden";
    }
    if (input != randomNumber) {
      messageDisplay(input > randomNumber ? "Too high" : "Too low");
      score--;
      if (score < 1) {
        messageDisplay("💥 You lost the game !!");
        updateScore(0);
        document.querySelector(".check").style.visibility = "hidden";
        document.querySelector(".guess").style.visibility = "hidden";
      } else {
        updateScore(score);
      }
    }
    newInput();
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 10;
  randomNumber = Math.round(Math.random() * 20) + 1;
  //   document.querySelector(".number").textContent = randomNumber;
  messageDisplay("start guessing......");
  document.querySelector(".number").textContent = "?";
  updateScore(10);
  newInput();

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".check").style.visibility = "visible";
  document.querySelector(".guess").style.visibility = "visible";
});
