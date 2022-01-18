// Use childNodes to list all the children from the <ul>
const childNodesFromList = document.querySelector('ul').childNodes;



// Write a for loop to iterate over every child. In this loop:
// Use a condition in the loop to only iterate over element nodes (see: nodeTypes. Use child.nodeType === 1)
let nrOfItems = 0;

for(let i = 1; i < childNodesFromList.length; i += 2) {   
    // Find the element that contains Fast and Furious. If it's not the first element move it to the top of the list
    if(childNodesFromList[i].innerHTML === "Fast and Furious" && nrOfItems != 0) {
        const fastFurious = childNodesFromList[i];
        fastFurious.parentNode.insertBefore(fastFurious, childNodesFromList[0]);
        
        // Since Fast and Furious is the most important franchise ever, add a class .important to the element
        fastFurious.classList.add("important");
    }

    // --- EXTRA: Change cursor to a hand when you hover over list items to make it look clickable
    document.body.style.cursor = "pointer";

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




// TODO: Add a special condition to the previous function if the clicked item is Fast and Furious the alert() should display The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.
// TODO: (*) Remove duplicates using removeChild (duplicates are items with the exact same textContent, isEqualNode might be useful).