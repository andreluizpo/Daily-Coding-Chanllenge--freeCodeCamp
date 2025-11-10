/*
freeCodeCamp - Daily Coding Challenges (11/01/2025) 

*Signature Validation*
Given a message string, a secret key string, and a signature number, determine if the signature is valid using this encoding method:

- Letters in the message and secret key have these values:
    - a to z have values 1 to 26 respectively.
    - A to Z have values 27 to 52 respectively.
- All other characters have no value.
- Compute the signature by taking the sum of the message plus the sum of the secret key.
For example, given the message "foo" and the secret key "bar", the signature would be 57:
    f (6) + o (15) + o (15) = 36
    b (2) + a (1) + r (18) = 21
    36 + 21 = 57
Check if the computed signature matches the provided signature.
*/

function verify(message, key, signature) {
    let sum = 0;

    sum += getCodeStr(message);
    sum += getCodeStr(key);

    return sum === signature;
}

function getCodeStr(str) {
    let sum = 0;

    for (const char of str) {
        if (/[a-z]/.test(char)) sum += char.charCodeAt(0) - 96;

        if (/[A-Z]/.test(char)) sum += char.charCodeAt(0) - 38;
    }

    return sum;
}

verify("foo", "bar", 57); // should return true.
verify("foo", "bar", 54); // should return false.
verify("freeCodeCamp", "Rocks", 238); // should return true.
verify("Is this valid?", "No", 210); // should return false.
verify("Is this valid?", "Yes", 233); // should return true.
verify("Check out the freeCodeCamp podcast,", "in the mobile app", 514); // should return true.
