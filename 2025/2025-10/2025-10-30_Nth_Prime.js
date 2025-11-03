/*
freeCodeCamp - Daily Coding Challenges (10/30/2025) 

*Nth Prime*
A prime number is a positive integer greater than 1 that is divisible only by 1 and itself. The first five prime numbers are 2, 3, 5, 7, and 11.

Given a positive integer n, return the nth prime number. For example, given 5 return the 5th prime number: 11.
*/

function nthPrime(n) {
    let count = 0;
    let num = 1;

    while (count < n) {
        num++;
        if (isPrime(num)) count++;
    }

    return num;
}

function isPrime(num) {
    if (num < 2) return false;

    for (let cont = 2; cont <= Math.sqrt(num); cont++) {
        if (num % cont == 0) return false;
    }

    return true;
}

nthPrime(5); // should return 11.
nthPrime(10); // should return 29.
nthPrime(16); // should return 53.
nthPrime(99); // should return 523.
nthPrime(1000); // should return 7919.
