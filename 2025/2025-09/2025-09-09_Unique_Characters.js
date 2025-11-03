/*
freeCodeCamp - Daily Coding Challenges (09/09/2025) 

**Unique Characters**

Given a string, determine if all the characters in the string are unique.

- Uppercase and lowercase letters should be considered different characters.
*/

function allUnique(str) {
  const charactersRead = [];

  for (let character of str) {
    //console.log(character);
    for (let seenChar of charactersRead) {
      if (seenChar == character) return false;
    }
    charactersRead.push(character);
    //console.log(charactersRead);
  }
  return true;
  
}

console.log(allUnique("abc")) // should return true.
console.log(allUnique("aA")) // should return true.
console.log(allUnique("QwErTy123!@")) // should return true.
console.log(allUnique("~!@#$%^&*()_+")) // should return true.
console.log(allUnique("hello")) // should return false.
console.log(allUnique("freeCodeCamp")) // should return false.
console.log(allUnique("!@#*$%^&*()aA")) // should return false.