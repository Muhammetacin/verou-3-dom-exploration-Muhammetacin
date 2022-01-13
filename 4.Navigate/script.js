// TODO: Ex.1: Select the last child of the <ol> tag and put it at the beginning of the list

let oList = document.querySelector("ol");
oList.insertBefore(oList.lastElementChild, oList.firstElementChild);



// TODO: Ex.2: Move the <h2> of the third section in the second one and vice-versa

let sections = document.querySelectorAll("section");

let secondSection = sections[1];
let thirdSection = sections[2].firstElementChild;

let heading2 = thirdSection.querySelector("h2"); // the second heading
let heading3 = secondSection.querySelector("h2"); // the third heading

secondSection.insertBefore(heading2, secondSection.firstElementChild);
thirdSection.insertBefore(heading3, thirdSection.firstElementChild);



// TODO: Ex.3: Delete the last section from the DOM, we don't need it anyways
let lastSection = document.querySelector("section:last-child");
lastSection.parentNode.removeChild(lastSection);