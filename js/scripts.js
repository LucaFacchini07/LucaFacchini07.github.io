const staticText = "I am ";
const cursor = "|"; 
const dynamicTexts = ["a Student", "a Networks Appassionate", "a Linux Bro", "a CyberSecurity Lover"]; 

let count = 0; // word tracker
let index = 0; // letter tracker
let currentText = ""; // current word
let letter = ""; // current letter

function type() {
    if (count === dynamicTexts.length) {
        count = 0;
    }
    currentText = dynamicTexts[count]; // take the current word from the list
    letter = currentText.slice(0, ++index); // Take the current letter
    const textToShow = staticText + letter + cursor; // Add the cursor
    document.getElementById("text").textContent = textToShow; // Update the HTML doc

    if (letter.length === currentText.length) { // If the word is completely written
        setTimeout(erase, 500); // Wait 0.5s before erasing the word
    } else {
        const nextChar = currentText[index];
        const timeoutDuration = 150;
        setTimeout(type, timeoutDuration); // Continue writing
    }
}

function erase() {
    if (index === 0) { // If we're at the start of the word
        count++; // Increase the word count
        setTimeout(type, 500); // Wait 0.5s before typing the next word
        return; 
    }
    letter = currentText.slice(0, --index); // Erase the current letter
    const textToShow = staticText + letter + cursor; // Add the cursor
    document.getElementById("text").textContent = textToShow; // Update the HTML
    setTimeout(erase, 20); // Continue erasing
}

type();
