/*
freeCodeCamp - Daily Coding Challenges (09/08/2025) 

**Acronym Builder**

Given a string containing one or more words, return an acronym of the words using the following constraints:

- The acronym should consist of the first letter of each word capitalized, unless otherwise noted.
- The acronym should ignore the first letter of these words unless they are the first word of the given string: a, for, an, and, by, and of.
- The acronym letters should be returned in order they are given.
- The acronym should not contain any spaces.
*/

function buildAcronym(str) {
  let words = str.split(" ");
  let acronym = "";

  console.log(words);

  for (let i = 0; i < words.length; i++) {
    console.log(`${words[i][0]} - ${words[i]}`);
  
    switch (words[i].toLocaleLowerCase()) {
      case "a":
        if (i == 0) acronym += words[i][0];
        break;
      case "for":
        if (i == 0) acronym += words[i][0];
        break;
      case "an":
        if (i == 0) acronym += words[i][0];
        break;
      case "and":
        if (i == 0) acronym += words[i][0];
        break;
      case "by":
        if (i == 0) acronym += words[i][0];
        break;
      case "of":
        if (i == 0) acronym += words[i][0];
        break;
      default:
        acronym += words[i][0];
        break;
    }
  }
  
  return acronym.toLocaleUpperCase();
}
console.log(buildAcronym("Search Engine Optimization")) // should return "SEO".
console.log(buildAcronym("Frequently Asked Questions")) // should return "FAQ".
console.log(buildAcronym("National Aeronautics and Space Administration")) // should return "NASA".
console.log(buildAcronym("Federal Bureau of Investigation")) // should return "FBI".
console.log(buildAcronym("For your information")) // should return "FYI".
console.log(buildAcronym("By the way")) // should return "BTW".
console.log(buildAcronym("An unstoppable herd of waddling penguins overtakes the icy mountains and sings happily")) // should return "AUHWPOTIMSH".