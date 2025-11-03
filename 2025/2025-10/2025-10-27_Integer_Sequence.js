/*
freeCodeCamp - Daily Coding Challenges (10/27/2025) 

*Integer Sequence*
Given a positive integer, return a string with all of the integers from 1 up to, and including, the given number, in numerical order.

For example, given 5, return "12345".
*/

function sequence(n) {
    let str = "";

    for (let count = 1; count <= n; count++) {
        str += count;
    }

    return str;
}

sequence(5); // should return "12345".
sequence(10); // should return "12345678910".
sequence(1); // should return "1".
sequence(27); // should return "123456789101112131415161718192021222324252627".
