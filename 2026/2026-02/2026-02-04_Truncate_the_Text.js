/*
freeCodeCamp - Daily Coding Challenges (04/02/2026) 

**Truncate the Text**

Given a string, return it as-is if it's 20 characters or shorter. If it's longer than 20 characters, truncate it to the first 17 characters and append "..." to the end of it (so it's 20 characters total) and return the result.
*/

function truncateText(text) {
  return text.length <= 20 ? text : text.slice(0, 17) + "...";
}

truncateText("Hello, world!"); // should return "Hello, world!".
truncateText("This string should get truncated."); // should return "This string shoul...".
truncateText("Exactly twenty chars"); // should return "Exactly twenty chars".
truncateText("....................."); // should return "....................".
