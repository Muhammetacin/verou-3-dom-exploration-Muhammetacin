// Ex.1: Modify the script.js to create a new <section> with a random background-color for each learner in your promo.
//       This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article>
console.log("Exercise 1");

let article = document.getElementsByTagName('article')[0];
console.log(article);

function addNewLearner(name) {
    const randomColor = 'rgb(' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ')';

    const sectionParent = document.createElement("section");
    sectionParent.style.backgroundColor = randomColor;

    const pChild = document.createElement("p");
    const pName = document.createTextNode(name);

    pChild.appendChild(pName);
    sectionParent.appendChild(pChild);
    article.appendChild(sectionParent);
}

addNewLearner('Muhammet Cin');
addNewLearner('Falador Massacre');
addNewLearner('User 2');



// Ex.2: If the background is dark the text should be white, if the background is light the text should be black
console.log("Exercise 2");

