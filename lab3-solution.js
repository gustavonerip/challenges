//Q1 Declare a variable x and assign it the value 10. Write a program that will check if the variable is greater than 5 and print "x is greater than 5" if it is, otherwise print "x is not greater than 5"

function isGreater(number){
    if(number > 5){
        console.log("Q1: " + number + " is greater than 5");
    }else{
        console.log("Q1: " + number + " is not greater than 5");
    }
}

isGreater(6);

//Q2 Declare a variable name and assign it a string value. Write a program that will check if the length of the string is greater than 5 and print "The name is longer than 5 characters" if it is, otherwise print "The name is 5 characters or less".

function checkLength(chars){
    if(chars.length > 5){
        console.log("Q2: " + "The name is longer than 5 characters");
    }else{
        console.log("Q2: " + "The name is 5 characters or less");
    }
}

checkLength("gustavo");

//Q3 Declare a variable age and assign it a number. Write a program that will check if the age is between 18 and 65 (inclusive) and print "You are an adult" if it is, otherwise print "You are not an adult".

function checkAge(age){
    if(age >= 18 && age < 65){
        console.log("Q3: You are an adult!");
    }else{
        console.log("Q3: You are not an adult");
    }
}

checkAge(66);

//Q4 Declare a function multiply that takes two numbers as arguments and returns the product of the two numbers. Test the function by calling it with the numbers 4 and 5, and store the result in a variable result and print the variable.

function product(a, b){
    let result = a * b;
    console.log("Q4: " + result);
}

product(4,5);

//Q5 Declare a function greet that takes a name as an argument and returns the string "Hello, [name]!". Test the function by calling it with the name "John", and store the result in a variable greeting and print the variable.

function greet(name){
    let greeting = "Q5: Hello, " + name + "!";

    console.log(greeting);
}
greet("John");

//Q6 Declare a variable numbers with an array of numbers. Write a program that will use a for loop to iterate over the array and print each number.
function arrayNumbers(){
let numbers = [23,45,53,78,80,100];

for(i = 0; i < numbers.length; i++){
    console.log("Q6: Index: " + i + " | Value: " + numbers[i]);
}
}

console.log(arrayNumbers());

//Q7 Declare a variable counter with a value of 0. Write a program that will use a while loop to increment the counter by 1, and print the counter, as long as the counter is less than 10.

function incrementCounter(){
let counter = 0;

while(counter < 10){
    console.log(counter);
    counter++;
}
}
console.log("Q7: " + incrementCounter());

//Q8 Declare a variable numbers with an array of numbers. Write a program that will use a for loop to iterate over the array and find the sum of all the numbers.

function sumOfArrays(){
    let numbers = [23,56,80,5,11];

for(i = 0; i < numbers.length; i++){
    numbers += numbers[0];
    numbers++;
}
return numbers;
}
console.log("Q8: " + sumOfArrays());



//Q9 Declare a variable numbers with an array of numbers. Write a program that will use a while loop to iterate over the array and find the maximum number.

let numberOfArray = [53,3,5,20,100, 200,12,1];

function checkLargest(arr){
    let largest = arr[0];
    let index = 1;

    while(index < arr.length){
        if(arr[index] > largest){
            largest = arr[index];
        }
        index++;
    }
    return largest;
}

console.log("Q9: " + checkLargest(numberOfArray));

//Q10 Declare a function reverseString that takes a string as an argument and returns the string reversed. Test the function by calling it with the string "hello", and store the result in a variable reversedString and print the variable.

function reverseString(list){
    return  "Q10: " + list.split("").reverse().join("");
}

let result = reversedString = reverseString("hello");
console.log(result);