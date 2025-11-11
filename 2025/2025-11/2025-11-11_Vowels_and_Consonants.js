/*
freeCodeCamp - Daily Coding Challenges (11/11/2025) 

*Vowels and Consonants*
Given a string, return an array with the number of vowels and number of consonants in the string.

- Vowels consist of a, e, i, o, u in any case.
- Consonants consist of all other letters in any case.
- Ignore any non-letter characters.
For example, given "Hello World", return [3, 7].
*/

function count(str) {
    const vowels = ["a", "e", "i", "o", "u"];

    let numberVowels = 0;
    let numberConsonants = 0;

    for (const character of str) {
        if (/[a-zA-Z]/.test(character)) {
            if (vowels.includes(character)) {
                numberVowels += 1;
            } else {
                numberConsonants += 1;
            }
        }
    }

    return [numberVowels, numberConsonants];
}

count("Hello World"); // should return [3, 7].
count("JavaScript"); // should return [3, 7].
count("Python"); // should return [1, 5].
count("freeCodeCamp"); // should return [5, 7].
count("Hello, World!"); // should return [3, 7].
count("The quick brown fox jumps over the lazy dog."); // should return [11, 24].
