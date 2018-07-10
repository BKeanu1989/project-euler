// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

let maxDigit = 999;

function isPalindrome(input) {
    if (typeof input === 'number') {
        input = input.toString();
    }

    return input === input.split('').reverse().join("");
}

function solution(maxInput) {
    let productDigits = [];

    for (let i = maxInput; i > 0; i--) {
        let found = false;
        for (y = i; y > 0; y--) {
            let product = i * y;
            if (isPalindrome(product)) {
                productDigits.push(i);
                productDigits.push(y);
                found = true;
                break;
            }
        }
        if (found) break;
    }
    return productDigits;
}

console.log(solution(maxDigit));