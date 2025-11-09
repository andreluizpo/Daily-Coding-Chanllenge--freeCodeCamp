/*
freeCodeCamp - Daily Coding Challenges (11/05/2025) 

*Matrix Builder*
Given two integers (a number of rows and a number of columns), return a matrix (an array of arrays) filled with zeros (0) of the given size.

For example, given 2 and 3, return:
*/

function buildMatrix(rows, cols) {
    const matrix = [];

    for (let x = 0; x < rows; x++) {
        const row = [];

        for (let y = 0; y < cols; y++) {
            row.push(0);
        }
        matrix.push(row);
    }

    return matrix;
}

buildMatrix(2, 3); // should return [[0, 0, 0], [0, 0, 0]].
buildMatrix(3, 2); // should return [[0, 0], [0, 0], [0, 0]].
buildMatrix(4, 3); // should return [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]].
buildMatrix(9, 1); // should return [[0], [0], [0], [0], [0], [0], [0], [0], [0]].
