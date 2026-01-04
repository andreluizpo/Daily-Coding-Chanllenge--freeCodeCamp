/*
freeCodeCamp - Daily Coding Challenges (01/04/2026) 

**Leap Year Calculator**

Given an integer year, determine whether it is a leap year.

A year is a leap year if it satisfies the following rules:

- The year is evenly divisible by 4, and
- The year is not evenly divisible by 100, unless
- The year is evenly divisible by 400.
*/

function isLeapYear(year) {
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  return year % 4 === 0;
}

isLeapYear(2024); // should return true.
isLeapYear(2023); // should return false.
isLeapYear(2100); // should return false.
isLeapYear(2000); // should return true.
isLeapYear(1999); // should return false.
isLeapYear(2040); // should return true.
isLeapYear(2026); // should return false.
