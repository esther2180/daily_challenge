// Selectors

const decimal = document.getElementById("decimal");
const clear = document.getElementById("clear");

// Selects the h1 tag that holds the input and result
const displayValElement = document.getElementById("display__numbers");

// Selects the 10 digits (0-9)
const btnNumbers = document.getElementsByClassName("btn--number");

// Selects the four operators (add/subtract/divide/multiply) and equal operator
const btnOperators = document.getElementsByClassName("btn--operator");

// Value that is being shown.  The default value is 0. The eval() method will take 
// a string and run it.  Our array will hold the buttons we care clicking, and we will 
// later convert it to a string.
let displayVal = "0";
let pendingVal;
let evalStringArray = [];

// Updating the display field.  If the value is currently equal to 0, we will reset 
// the value so that our input does not start with a 0.
updateDisplayVal = (e) => {
    let btnText = e.target.innerText;
    if (displayVal === "0") {
        displayVal = "";
    }

    // Append the content of the button we clicked to our displayVal variable
    // and display it.
    displayVal += btnText;
    displayValElement.innerText = displayVal;
}

// Perform the mathemetical operations

// Event listeners for the number and operator buttons
for (let i = 0; i < btnNumbers.length; i++) {
    btnNumbers[i].addEventListener('click', updateDisplayVal);
}

// On clicking AC button, all values and the display are being reset
clear.onclick = () => {
    displayVal = "0";
    pendingVal = undefined;
    evalStringArray = [];
    displayValElement.innerHTML = displayVal;
}

// Not allowing two decimal points in input
decimal.onclick = () => {
    if (!displayVal.includes(".")) {
        displayVal += ".";
    }
    displayValElement.innerText = displayVal;
}