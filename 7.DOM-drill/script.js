// Use childNodes to list all the children from the <ul>
const childNodesFromList = document.querySelector('ul').childNodes;



// Write a for loop to iterate over every child. In this loop:
// Use a condition in the loop to only iterate over element nodes (see: nodeTypes. Use child.nodeType === 1)

// Count how many items there are in the list
let nrOfItems = 0;

for(let i = 1; i < childNodesFromList.length; i += 2) {
    // --- EXTRA: Change cursor to a hand when you hover over list items to make it look clickable
    document.body.style.cursor = "pointer";

    // Find the element that contains Fast and Furious. If it's not the first element move it to the top of the list
    if(childNodesFromList[i].innerHTML === "Fast and Furious" && nrOfItems != 0) {
        const fastFurious = childNodesFromList[i];
        fastFurious.parentNode.insertBefore(fastFurious, childNodesFromList[0]);
        
        // Since Fast and Furious is the most important franchise ever, add a class .important to the element
        fastFurious.classList.add("important");

        // Add a special condition to the previous function if the clicked item is Fast and Furious the alert() should display The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.
        fastFurious.addEventListener("click", (event) => {
            alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.");
        });
    }

    // Add an eventListener on every item of the list. If the item is clicked an alert() pops up to display the name of clicked element
    childNodesFromList[i].addEventListener("click", (event) => {
        alert(event.target.innerHTML);
    });

    

    nrOfItems++
}

// --- FOR LOOP VERSION 2 ---
// for(let child of childNodesFromList) {
//     if(child.nodeType === 1 ) {
//         console.log(child);
//     }
// }
// TODO: (*) Remove duplicates using removeChild (duplicates are items with the exact same textContent, isEqualNode might be useful).




// TODO: (*) Add an eventListener on the document body, listening for keyup. When pressing the r key of the keyboard the list should get sorted in a random order, however Fast and Furious should remain the first element (most important franchise ever, remember?)
// TODO: (*) Modify the previous function so that when you press the letter d of your keyboard, the Fast and Furious element gets cloned
// TODO: Create a new <div> before the list, using createElement and insertBefore
// TODO: Using createElement, create a <select> tag into the previously created <div>, with two <option>s in it: "important franchises" and "normal franchises"
// TODO: Add an eventListener to the <select>, on change, if the option "important franchise" is chosen, only display items of the list that have the class .important. (hint: you can toggle visibility using element.style.visibility = 'hidden')