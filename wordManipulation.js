// Get the word from the user
const word = prompt("Please enter a word:");

// Replace the second character with '!'
let modifiedWord = "";
for (let i = 0; i < word.length; i++) {
  modifiedWord += i === 1 ? "!" : word[i];
}

console.log(modifiedWord);

// Reverse the word
let reversedWord = "";
for (let i = word.length - 1; i >= 0; i--) {
  reversedWord += word[i];
}
console.log(reversedWord);

// Make 6th letter uppercase
let uppercaseWord = "";
for (let i = 0; i < word.length; i++) {
    uppercaseWord += i === 5 ? word[i].toUpperCase() : word[i];
}
console.log(uppercaseWord);

// Create an array of the ASCII values for each character in the word
const asciiValues = [];
for (let i = 0; i < word.length; i++) {
  asciiValues.push(word.charCodeAt(i));
}
console.log(asciiValues);
