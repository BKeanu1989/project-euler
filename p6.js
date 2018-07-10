// The sum of the squares of the first ten natural numbers is,

// 1^2 + 2^2 + ... + 10^2 = 385
// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)^2 = 55^2 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

function addSquareNumbers(to) {
    let sum = 0;
    for (let i = 1; i <= to; i++) {
        let square = i * i;
        sum += square;
    }
    return sum;
}

function numberSumToSquare(to) {
    let result = to * (to + 1) / 2;
    return result * result;
}

function handler(to) {
    let sumOfSquares = addSquareNumbers(to);
    let squareOfSum = numberSumToSquare(to);

    return squareOfSum - sumOfSquares;
}

console.log(handler(10));
console.log(handler(100));