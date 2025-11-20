/*
freeCodeCamp - Daily Coding Challenges (11/20/2025) 

*Longest Word*

Given a sentence string, return the longest word in the sentence.

- Words are separated by a single space.
- Only letters (a-z, case-insensitive) count toward the word's length.
- If there are multiple words with the same length, return the first one that appears.
- Return the word as it appears in the given string, with punctuation removed.
*/

function longestWord(sentence) {
    let biggestWord = "";

    const words = sentence.replace(/\s+/g, " ").split(" ");

    for (const word of words) {
        const newWord = word.replace(/[^a-zA-Z]/g, "");

        if (newWord.length > biggestWord.length) biggestWord = newWord;
    }

    return biggestWord;
}

longestWord("The quick red fox"); // should return "quick".
longestWord("Hello coding challenge."); // should return "challenge".
longestWord("Do Try This At Home."); // should return "This".
longestWord("This sentence... has commas, ellipses, and an exclamation point!"); // should return "exclamation".
longestWord("A tie? No way!"); // should return "tie".
longestWord("Wouldn't you like to know."); // should return "Wouldnt".
