const _initTime = Date.now();

function getElapsedTime() {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + "s";
}

const actionsquares = document.querySelectorAll(".actionsquare");
for (let actionsquare of actionsquares) {
  actionsquare.addEventListener("click", clickOnSquare);
  actionsquare.addEventListener("click", createColoredBox);
}

// TODO: Ex.1.1: Create a new <div> with a class .displayedsquare and the corresponding clicked color in the div above (.displayedsquare-wrapper)
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

  // TODO: Ex. 3: Create a system so that when a user clicks on a generated square an alert pops-up with the color of that square
  divSquare.addEventListener("click", function() {
    alert("This square is " + this.classList[1].toUpperCase() + ".");
  });
}

// TODO: Ex.1.2: Create a new <li> in the log below to state when the action was done
const sectionWithLogs = document.querySelector("ul");

function clickOnSquare(e) {
  // console.log(e.target.classList[1]);
  // console.log(getElapsedTime());
  let logItem = document.createElement("li");

  const logColor = e.target.classList[1];
  const logTime = getElapsedTime();

  logItem.appendChild(
    document.createTextNode(
      "[" + logTime + "] " + "Created a new " + logColor.toUpperCase() + " square"
    )
  );

  sectionWithLogs.appendChild(logItem);
}

// TODO: Ex.2: Add an event listener on the document <body>, listening for the keypress event.
const body = document.querySelector("body");
body.addEventListener("keypress", hitSpacebar);
body.addEventListener("keypress", logSpacebar);

// TODO: Ex. 2.1: When the spacebar is hit randomly change the background color of the whole page
function hitSpacebar() {
  const randomValueR = Math.floor(Math.random() * 255),
    randomValueG = Math.floor(Math.random() * 255),
    randomValueB = Math.floor(Math.random() * 255);
  const randomColor =
    "rgb(" + randomValueR + ", " + randomValueG + ", " + randomValueB + ")";
  body.style.backgroundColor = randomColor;

  isLightOrDark(randomValueR, randomValueG, randomValueB);
}

// TODO: Ex. 2.2: Log when the spacebar is used the same way you used for the generated squares.
function logSpacebar() {
  let logSpacebarValue = document.createElement("li");
  const bgColor = document.body.style.backgroundColor;
  const logTime = getElapsedTime();

  logSpacebarValue.appendChild(
    document.createTextNode(
      "[" + logTime + "] " + "Changed background color to: " + bgColor
    .toUpperCase())
  );

  sectionWithLogs.appendChild(logSpacebarValue);
}

// TODO: Ex. 2.3: When the l key is pressed the log gets deleted (erases the generated <li>s)


// TODO: Ex. 2.4: When the s key is pressed the squares get deleted (erases the generated squares)


// To change the color of text when background color is too dark
function isLightOrDark(red, green, blue) {
  // Variables for red, green, blue values
  var r = red,
    g = green,
    b = blue,
    hsp;

  // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
  hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

  // Using the HSP value, determine whether the color is light or dark
  if (hsp > 127.5) {
    document.body.style.color = "rgb(15, 15, 15)";
  } else {
    document.body.style.color = "rgb(240, 240, 240)";
  }
}
