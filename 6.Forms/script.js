/*** 
 * Add a keyup listener on the first input field, so that once you type a letter in this field, 
 * it goes into the <span id="display-firstname">.
 * The content of the field and the span should always remain the same. 
 */
const firstNameInput = document.getElementById('firstname');
const firstNameDisplay = document.getElementById('display-firstname');

const getFirstName = () => {
    firstNameDisplay.innerHTML = firstNameInput.value;
}

firstNameInput.addEventListener('keyup', getFirstName);



/***
 * Add a keyup listener on the second input (the number input), 
 * so that if the age is below 18 the content of the section a-hard-truth remains hidden, 
 * otherwise show them this hard to swallow fact.
 */
const ageInput = document.getElementById('age');
const displayHardTruth = document.getElementById('a-hard-truth');

const getAge = () => {
    if(ageInput.value > 17) {
        displayHardTruth.style.visibility = "visible";
    }
    else {
        displayHardTruth.style.visibility = "hidden";
    }
}

ageInput.addEventListener('keyup', getAge);
ageInput.addEventListener('change', getAge);



/*** 
 * Well this is a common one. Add a keyup listener on both fields and show a visual hint 
 * (for instance turn the field red) if the password is too short (less than 6 characters) 
 * or if the password and its confirmation do not match.
 */ 
const passwordInput = document.getElementById('pwd');
const passwordRepeatInput = document.getElementById('pwd-confirm');

const correctPwd = () => {
    if(passwordInput.value.length < 6) {
        passwordInput.style.backgroundColor = "hsl(348, 100%, 61%)";
    }
    else {
        passwordInput.style.backgroundColor = "hsl(171, 100%, 41%)";
    }

    if(passwordRepeatInput.value != 0) {
        if(passwordRepeatInput.value != passwordInput.value) {
            passwordRepeatInput.style.backgroundColor = "hsl(348, 100%, 61%)";
        } 
        else {
            passwordRepeatInput.style.backgroundColor = "hsl(171, 100%, 41%)";
        }
    }
}

passwordInput.addEventListener('keyup', correctPwd);
passwordRepeatInput.addEventListener('keyup', correctPwd);



/*** 
 * Finally, use a change listener on the <select> field to toggle a dark mode on the whole page. 
 * For ease of use, we'll say that the dark mode is just turning the background black and the text white.
 */ 
const darkModeToggle = document.getElementById('toggle-darkmode');
let documentBody = document.body;

darkModeToggle.addEventListener('change', (event) => {
    if(event.target.value === "dark") {
        documentBody.style.backgroundColor = "#111";
        documentBody.style.color = "#EEE";
    }
    if(event.target.value === "light") {
        documentBody.style.backgroundColor = "#FFF";
        documentBody.style.color = "#111";
    }
});