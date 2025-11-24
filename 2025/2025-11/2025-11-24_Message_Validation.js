/*
freeCodeCamp - Daily Coding Challenges (11/24/2025) 

*Message Validator*

Given a message string and a validation string, determine if the message is valid.

- A message is valid if each word in the message starts with the corresponding letter in the validation string, in order.
- Letters are case-insensitive.
- Words in the message are separated by single spaces.
*/

function isValidMessage(message, validator) {
    const words = message.toLowerCase().split(" ");
    const letters = validator.toLowerCase();

    if (words.length !== letters.length) return false;

    for (let i = 0; i < words.length; i++) {
        if (!words[i].startsWith(letters[i])) return false;
    }

    return true;
}

isValidMessage("hello world", "hw"); // should return true.
isValidMessage("ALL CAPITAL LETTERS", "acl"); // should return true.
isValidMessage("Coding challenge are boring.", "cca"); // should return false.
isValidMessage("The quick brown fox jumps over the lazy dog.", "TQBFJOTLD"); // should return true.
isValidMessage("The quick brown fox jumps over the lazy dog.", "TQBFJOTLDT"); // should return false.
