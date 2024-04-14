const staticText = "I am ";
const cursor = "|"; 
const dynamicTexts = ["a Student", "a Networking Lover", "a Security Enthusiast", "a Tech Nerd"]; 

let count = 0; // Variabile per tener traccia della parola corrente
let index = 0; // Variabile per tener traccia della lettera corrente
let currentText = ""; // Variabile per memorizzare la parola corrente
let letter = ""; // Variabile per memorizzare la lettera corrente

function type() {
    if (count === dynamicTexts.length) {
        count = 0;
    }
    currentText = dynamicTexts[count]; // Take the current word from the list
    letter = currentText.slice(0, ++index); // Take the current letter
    const textToShow = staticText + letter + cursor; // Add the cursor
    document.getElementById("text").textContent = textToShow; // Update the HTML docss

    if (letter.length === currentText.length) { // If the word is completely written
        setTimeout(erase, 500); // Wait 0.5s before erasing the word
    } else {
        const nextChar = currentText[index];
        const timeoutDuration = 200;
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
    setTimeout(erase, 100); // Continue erasing
}

type();
