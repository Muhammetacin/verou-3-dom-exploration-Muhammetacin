const _initTime = Date.now();

function getElapsedTime() {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + "s";
}

const actionsquares = document.querySelectorAll(".actionsquare");
for (let actionsquare of actionsquares) {
  actionsquare.addEventListener("click", clickOnSquare);
  actionsquare.addEventListener("click", createColoredBox);
}

// TODO: Ex.1: Create a new <div> with a class .displayedsquare and the corresponding clicked color in the div above (.displayedsquare-wrapper)
const sectionWithBoxes = document.querySelector("section:first-child");

function createColoredBox(e) {
  let divSquare = document.createElement("div");
  divSquare.classList.add("actionsquare");

  if (e.target.classList.contains("orange")) {
    divSquare.classList.add("orange");
  } else if (e.target.classList.contains("green")) {
    divSquare.classList.add("green");
  } else {
    divSquare.classList.add("violet");
  }

  sectionWithBoxes.appendChild(divSquare);
}

// TODO: Ex.2: Create a new <li> in the log below to state when the action was done
const sectionWithLogs = document.querySelector("ul");

function clickOnSquare(e) {
  // console.log(e.target.classList[1]);
  // console.log(getElapsedTime());
  let logItem = document.createElement("li");

  const logColor = e.target.classList[1];
  const logTime = getElapsedTime();

  logItem.appendChild(document.createTextNode("[" + logTime + "] " + "Created a new " + logColor + " square"));
  
  sectionWithLogs.appendChild(logItem);
}