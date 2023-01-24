/*  
Lab 1
Q: Write a program that prints all numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz". For numbers that are multiples of both 3 and 5, print "FizzBuzz".

Q: Write a program that uses a for loop to find the sum of all even numbers between 1 and 100.

Q: Write a program that uses a for loop to find the largest number in a given array.
*/

//Q1:::

//Declare variable
let counter = 1;


//Loop numbers from 1 to 100
while (counter < 101) {
    //Check if counter is multiple of 3 and 5
    if(counter % 3 == 0 && counter % 5 == 0){
        //Increment counter first
        counter++;
        //print FizzBuzz
        console.log("FizzBuzz");
    //if the first argument is false, check if counter is multiple of 3     
    }else if(counter % 3 == 0){ //Check i f
        //Increment counter first
        counter++;
        //Print Fizz
        console.log("Fizz");
    //If the previous statement is false, check if counter is multiple of 5
    }else if(counter % 5 == 0){
        //increment counter
        counter++;
        //Print Buzz instead
        console.log("Buzz");
    //If all conditions are false, just execute the code block below
    }else{
        //print the number
        console.log(counter);
        //increment counter
        counter++;
    }
}

//Q2

