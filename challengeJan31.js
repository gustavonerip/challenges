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



// //Corrected

// function resultFactorial(number){
//     if(number === 0 || number === 1) return 1;

//     return number * resultFactorial(number-1);  
// }

// function factorialNoRecursion(number){
//     let sum = 1;
//     while(number >= 1){
//         sum *= number;
//         number--;
//     }
//     return sum;
// }

// console.log(resultFactorial(5));
// console.log(resultFactorial(6));

// console.log(factorialNoRecursion(5));
// console.log(factorialNoRecursion(6));