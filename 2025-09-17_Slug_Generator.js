/*
freeCodeCamp - Daily Coding Challenges (09/17/2025) 

**Slug Generator**
Given a string, return a URL-friendly version of the string using the following constraints:

- All letters should be lowercase.
- All characters that are not letters, numbers, or spaces should be removed.
- All spaces should be replaced with the URL-encoded space code %20.
- Consecutive spaces should be replaced with a single %20.
- The returned string should not have leading or trailing %20.
*/

function generateSlug(str) {
    const lowercaseString = str.toLowerCase();
    let stringWithoutSpecialCharacters = "";
    let previousCharacter = "";
    let finalString = "";

    for (let character of lowercaseString) {
        if(/[a-z0-9]/.test(character) || character == " ") {
            stringWithoutSpecialCharacters += character;
        }
    }

    const stringTrimmed = stringWithoutSpecialCharacters.trim()

    for (let i = 0; i < stringTrimmed.length; i++) {
        let character = stringTrimmed[i];

        if (character === " ") {
            if (previousCharacter !== " ") {
            finalString += "%20";
            }
        } else {
            finalString += character;
        }

        previousCharacter = character;
    }

    return finalString;
}

console.log(generateSlug("helloWorld")) // should return "helloworld".
console.log(generateSlug("hello world!")) // should return "hello%20world".
console.log(generateSlug(" hello-world ")) // should return "helloworld".
console.log(generateSlug("hello  world")) // should return "hello%20world".
console.log(generateSlug("  ?H^3-1*1]0! W[0%R#1]D  ")) // should return "h3110%20w0r1d".