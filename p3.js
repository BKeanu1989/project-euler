// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

let inputNumber = 600851475143;

function generatePrimes(maxNumber) {
    let number = 2;
    let primeNumbers = [];
    for (let i = 2; i < maxNumber; i++) {
        if (numberIsPrime(i)) primeNumbers.push(i);
    }
    return primeNumbers;
}

function numberIsPrime(number) {
    let isPrime = true;
    for (let i = 2; i <= number / 2; ++i) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
}

let primeArray = generatePrimes(5000);

function primeFactors(inputVal) {
    let input = inputVal;
    let finished = false;
    let primeFactorArray = [];
    for (let i = 0; i < primeArray.length; i++) {
        let divisor = primeArray[i];
        let quotient = input / divisor;
        if ((Number.isInteger(quotient))) {
            input = quotient;
            primeFactorArray.push(divisor);
            if (numberIsPrime(quotient)) {
                primeFactorArray.push(quotient);
                finished = true;
                break;
            }
        }
    }
    return primeFactorArray;
}

console.log(primeFactors(inputNumber));