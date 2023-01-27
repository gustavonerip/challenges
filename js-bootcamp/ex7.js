/*
In 2015, the U.S. Bureau of Labor Statistics conducted research to reveal how average salary is directly related to the number of years spent in school. In their findings, they found that people with:
no high school diploma earned an average of $25,636/year,
a high school diploma earned an average of $35,256/year,
an Associate's degree earned an average of $41,496/year,
a Bachelor's degree earned an average of $59,124/year,
a Master's degree earned an average of $69,732/year,
a Professional degree earned an average of $89,960/year,
and a Doctoral degree earned an average of $84,396/year.
Write a switch statement to set the average salary of a person based on their type of completed education.
Afterwards, print the following to the console.
In 2015, a person with __________ earned an average of __________/year.
Fill in the blanks with the type of education and the expected average salary. Make sure to use correct grammar in your printed statement, and watch out for any extra or missing characters (including spaces and punctuation marks). For help, refer to the findings above.
In 2015, a person with a Bachelor's degree earned an average of $59,124/year.
TIP: To print out the average salary with commas (i.e. 59,124), use the toLocaleString() method and pass it the locale "en-US". For example, salary.toLocaleString("en-US"). 
*/

var completedEducation = "Master's Degree";
var averageWage = "";

switch(completedEducation){
    case "Associate's Degree":
    averageWage = "$41,496";
    break;

    case "Bachelor's Degree":
    averageWage = "$59,124";
    break;

    case "Master's Degree":
    averageWage = "$69,732";
    break;
    
    case "Professional Degree":
    averageWage = "$89,960";
    break;

    case "Doctoral Degree":
    averageWage = "$84,396";
    break;

    default:
    averageWage = "$25,636";
    break;
}

console.log("In 2015, a person with " + completedEducation + " earned an average of " + averageWage + "/year.");
