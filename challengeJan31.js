/*
Factorial (recursion) Challenge
Write a JavaScript program to calculate the factorial of a number.
Output function should return the result as Number.

console.log(factorial(5)) // 120
console.log(factorial(6)) // 720
*/

function factorialOfNumber(number){
    if(number === 0 number ){
        return 1;
    }
    for(i = 1; i <= number; i++){
        let fact = number *= i;
        return fact;
    }
}

console.log(factorialOfNumber(5));
console.log(factorialOfNumber(6));