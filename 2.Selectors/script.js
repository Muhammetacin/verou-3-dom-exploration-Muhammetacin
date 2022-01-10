// Ex.1: Add a title attribute to every element that has the important class, stating This is an important item

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



// Ex.2: Select all the img tags and loop through them. If they have no important class, turn their display property to none

// Loop through all images (img tags) and display: none if 
// they don't have the .important class and print in the console
const unimportantImages = document.querySelectorAll('img:not(.important)');
console.log(unimportantImages);

// unimportantImages is a list so I loop through it and for every element
// in it I will add display: none to hide it
for (let elem = 0; elem < unimportantImages.length; elem++) {
    unimportantImages[elem].style.display = "none";
}



// Ex.3: Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname has well