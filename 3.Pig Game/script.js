const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const current0 = document.querySelector("#current--0");
const current1 = document.querySelector("#current--1");
const diceImage = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const name0 = document.querySelector(`#name--0`);
const name1 = document.querySelector("#name--1");
let currentScore = 0;
let scores = [0, 0];
let activeuser = 0;
let playing = true;

const init = function () {
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  diceImage.classList.add("hidden");
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  name0.textContent = "Player 1";
  name1.textContent = "player 2";
  currentScore = 0;
  scores = [0, 0];
  activeuser = 0;
  playing = true
};
const switchuser = function () {
  currentScore = 0;
  document.querySelector(`#current--${activeuser}`).textContent = 0;
  activeuser = activeuser === 0 ? 1 : 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};
init();

btnRoll.addEventListener("click", function () {
  if (playing) {
    diceNumber = Math.trunc(Math.random() * 6) + 1;
    diceImage.classList.remove("hidden");
    diceImage.src = `images/dice-${diceNumber}.png`;
    if (diceNumber == 1) {
      switchuser();
    } else {
      currentScore += diceNumber;
      document.querySelector(`#current--${activeuser}`).textContent =
        currentScore;
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activeuser] += currentScore;
    document.querySelector(`#score--${activeuser}`).textContent =
      scores[activeuser];
    if (scores[activeuser] >= 50) {
      playing = false;
      document
        .querySelector(`.player--${activeuser}`)
        .classList.add("player--winner");
      diceImage.classList.add("hidden");
      document.querySelector(`#name--${activeuser}`).textContent = `Player ${
        activeuser + 1
      } 🏆`;
    } else {
      switchuser();
    }
  }
});

btnNew.addEventListener("click", init);
