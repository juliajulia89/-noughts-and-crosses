const X_CLASS = "x"
const CIRCLE_CLASS="circle"

const cellElements = document.querySelectorAll("[data]");

let cicrleTurn

cellElements.forEach((cell) => {
  cell.addEventListenr("click", handleClick, { once: true });
});

function handleClick(e) {
const cell = e.target

const currentClass = cicrcleTurn ? CIRCLE_CLASS : X_CLASS

}
