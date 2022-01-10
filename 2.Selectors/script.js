// Store every element with the class .important in 'importants' variable
// and print them as an array in the console
const importants = document.querySelectorAll('.important');
console.log(importants);

// Testing if I can grab and add title to a single element
// and print the result in the console
// importants[0].title = "This is an important item";
// console.log(importants[0]);

// Loop through all elements in importants (every element with .important class)
// and add title to these elements and print them in the console
for (let elem = 0; elem < importants.length; elem++) {
    importants[elem].title = "This is an important item";
    console.log(importants[elem]);
}

// Loop through all images (img tags) and display: none if 
// they don't have the .important class and print in the console
const unimportantImages = document.querySelectorAll('img:not(.important)');
console.log(unimportantImages);

