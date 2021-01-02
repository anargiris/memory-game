const cards = Array.prototype.slice.call(document.querySelectorAll(".card"));
const header = document.getElementById("header");
const container = document.querySelector(".container");
const form = document.getElementById("form-sub");
const scoreP = document.getElementById("scoreP");
let timerInt;
//TIMER STUFF
let seconds = 0;
let millis = 0;
let colors = [
  "red",
  "yellow",
  "blue",
  "purple",
  "green",
  "pink",
  "brown",
  "orange",
  "olive",
  "gray",
];
const styling = getComputedStyle(header).width;
let score = "";

let points = 0;
let newCards = [...cards];
let preventClick = false;
//Set up colors
for (color of colors) {
  let cardA = newCards[parseInt(Math.random() * newCards.length)];
  cardA.classList.add(`${color}`, "hidden");
  newCards.splice(newCards.indexOf(cardA), 1);
  let cardB = newCards[parseInt(Math.random() * newCards.length)];
  cardB.classList.add(`${color}`, "hidden");
  newCards.splice(newCards.indexOf(cardB), 1);
}

//GAME
const goBtn = document.getElementById("goBtn");
let timer = document.getElementById("timer");
//Set up click event listeners
let clickedCard = null;
let target = null;

getPoint = (a, b) => {
  points++;
  a.classList.add("done");
  b.classList.add("done");
  clickedCard = null;
  target = null;
  preventClick = false;

  if (points == 1) {
    clearInterval(timerInt);
    scoreP.innerHTML = seconds + "." + millis;
    header.classList.add("daddy");
    for (card of cards) {
      gsap.to(card, { duration: 1, x: -50 });
      gsap.to(card, { duration: 1, x: 1000, delay: 1 });
    }
    gsap.from(form, {
      duration: 2,
      opacity: 0,
      delay: 3.5,
    });
    gsap.to(container, { duration: 1, opacity: 0, zIndex: -1, delay: 2 });
    gsap.to(timer, { duration: 2, opacity: 0 });
    setTimeout(() => {
      form.style.display = "block";
      container.style.display = "none";
    }, 3500);

    score = Number(seconds + "." + millis);
    console.log(score);
  }
};
runTimer = () => {
  ++millis;
  if (millis == 99) {
    ++seconds;
    millis = 0;
  }
  if (seconds >= 10 && millis >= 10) {
    timer.innerHTML = seconds + ":" + millis;
  } else if (seconds < 10) {
    timer.innerHTML = "0" + seconds + ":" + millis;
  } else if (millis < 10) {
    timer.innerHTML = seconds + ":" + "0" + millis;
  }
};
//GAME STARTS
goBtn.addEventListener("click", () => {
  timerInt = setInterval(runTimer, 10);
  gsap.to(goBtn, {
    duration: 1,
    opacity: 0,
    rotateY: 360,
    y: -200,
    x: 50,
    width: 10,
    display: "none",
  });
  gsap.from(timer, { duration: 1, y: 200 });
  gsap.to(timer, { duration: 1, display: "block", opacity: 1 });

  cards.map((card) =>
    card.addEventListener("click", (e) => {
      if (
        clickedCard &&
        clickedCard != e.target &&
        !clickedCard.classList.contains("done") &&
        preventClick == false
      ) {
        preventClick = true;
        target = e.target;
        target.classList.remove("hidden");
        clickedCard.classList.value === target.classList.value
          ? getPoint(clickedCard, target)
          : setTimeout(() => {
              preventClick = true;
              clickedCard.classList.add("hidden");
              target.classList.add("hidden");
              clickedCard = null;
              target = null;
              preventClick = false;
            }, 500);
      } else if (!preventClick) {
        clickedCard = e.target;
        clickedCard.classList.remove("hidden");
      }
    })
  );
});
