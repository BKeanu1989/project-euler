// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

let sum = 0;
let numbers = [];
let three = 0;
let five = 0;
let maxRange = 1000;

while (sum <= maxRange) {
    // console.log(sum);
    three += 3;
    numbers.push(three);
        if (countNumbers() > maxRange) {
            numbers.pop();
            break;
        }
    sum = countNumbers();
    five += 5;
    numbers.push(five);
        if (countNumbers() > maxRange) {
            numbers.pop();
            break;
        }
    sum = countNumbers();
}

numbers.sort(function(a,b) {
    return a - b;
});

console.log(numbers);
console.log(sum);
function countNumbers() {
    // global numbers
    return numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
    
}
