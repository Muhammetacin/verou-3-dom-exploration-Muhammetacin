// EX. 1
console.log(document.title);

// EX. 2
document.title = "Modifying the DOM";
console.log(document.title);

// EX. 3
console.log("Changing the background color...");
document.body.style.backgroundColor = '#FF69B4';

// EX. 3.1
// console.log("Changing the background color again...");
// document.body.style.backgroundColor = 'rgb(75, 164, 209)';

// EX. 4
for (let elem of document.body.children) {
    console.log(elem);
}