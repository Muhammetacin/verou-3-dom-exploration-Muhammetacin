// Ex.1: Modify the script.js to create a new <section> with a random background-color for each learner in your promo.
//       This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article>
console.log("Exercise 1");

// let article = document.getElementsByTagName('article')[0];
article = document.querySelector('article');
console.log(article);

function addNewLearner(name) {
    // const randomColor = 'rgb(' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ')';
    const r = Math.floor(Math.random() * 255), g = Math.floor(Math.random() * 255), b = Math.floor(Math.random() * 255);
    const randomColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';

    const sectionParent = document.createElement("section");
    sectionParent.style.backgroundColor = randomColor;

    const pChild = document.createElement("p");
    const pName = document.createTextNode(name);

    pChild.appendChild(pName);
    sectionParent.appendChild(pChild);
    article.appendChild(sectionParent);
}

addNewLearner('Muhammet Cin -> Without background color checking function');



// Ex.2: If the background is dark the text should be white, if the background is light the text should be black
console.log("Exercise 2");

const names = [
    "Ahmad",
    "Jian",
    "Michael",
    "Dante",
    "Muhammet",
    "Nicolas",
    "Beryl",
    "Cynthia",
    "Ruben",
    "Magali",
    "Jawid",
    "Koen",
    "Kevin",
    "Benjamin",
    "Dery",
    "Michelle",
    "Colin",
    "Feruz",
    "Pierter",
    "Ellen",
    "Sara",
    "Jordy"
];

function addNewLearnerWithLighterColor(name) {
    const r = Math.floor(Math.random() * 255), g = Math.floor(Math.random() * 255), b = Math.floor(Math.random() * 255);
    let randomColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';

    const sectionParent = document.createElement("section");
    sectionParent.style.backgroundColor = randomColor;

    // source: https://stackoverflow.com/questions/12043187/how-to-check-if-hex-color-is-too-black
    let luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
    if (luma < 128) {
        sectionParent.style.color = '#FFF';
    }

    const pChild = document.createElement("p");
    const pName = document.createTextNode(name);

    pChild.appendChild(pName);
    sectionParent.appendChild(pChild);
    article.appendChild(sectionParent);
}

names.forEach((learner) => {
    addNewLearnerWithLighterColor(learner);
});



// Ex.3: Find a way so that everytime you load the page the order of the elements changes!
console.log("Exercise 3");

let sections = article.querySelectorAll('section');
for (let i = 0; i < sections.length; i++) {
    article.appendChild(sections[Math.floor(Math.random() * sections.length)]);
    console.log(sections[i]);
}