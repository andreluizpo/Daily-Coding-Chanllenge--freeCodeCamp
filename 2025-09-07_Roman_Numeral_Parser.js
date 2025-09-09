/*
freeCodeCamp - Daily Coding Challenges (09/07/2025) 

**Roman Numeral Parser**

Given a string representing a Roman numeral, return its integer value.

Roman numerals consist of the following symbols and values:

+-------+------+
|Symbol |Value |
+-------+------+
|   I   | 1    |
|   V   | 5    |
|   X   | 10   |
|   L   | 50   |
|   C   | 100  |
|   D   | 500  |
|   M   | 1000 |
+-------+------+

- Numerals are read left to right. If a smaller numeral appears before a larger one, the value is subtracted. Otherwise, values are added.
*/

function parseRomanNumeral(numeral) {
  let currentNum = 0;
  let prevNum = 0;
  let total = 0;

  for (let i = numeral.length - 1; i >= 0; i--) {
    switch (numeral[i]) {
      case "I":
        currentNum = 1;
        break;
      case "V":
        currentNum = 5;
        break;
      case "X":
        currentNum = 10;
        break;
      case "L":
        currentNum = 50;
        break;
      case "C":
        currentNum = 100;
        break;
      case "D":
        currentNum = 500;
        break;
      case "M":
        currentNum = 1000;
        break;
    }
    
    if (currentNum < prevNum) {
      total -= currentNum; 
    } else {
      total += currentNum;
    }
    prevNum = currentNum;
  }

  return total;
}

console.log(parseRomanNumeral("III")) // should return 3.
console.log(parseRomanNumeral("IV")) // should return 4.
console.log(parseRomanNumeral("XXVI")) // should return 26.
console.log(parseRomanNumeral("XCIX")) // should return 99.
console.log(parseRomanNumeral("CDLX")) // should return 460.
console.log(parseRomanNumeral("DIV")) // should return 504.
console.log(parseRomanNumeral("MMXXV")) // should return 2025.