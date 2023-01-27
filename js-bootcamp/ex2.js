/*
Write a series of conditional statements that:
- Prints "not a group" if musicians is less than or equal to 0
- Prints "solo" if musicians is equal to 1
- Prints "duet" if musicians is equal to 2
- Prints "trio" if musicians is equal to 3
- Prints "quartet" if musicians is equal to 4
- Prints "this is a large group" if musicians is greater than 4
*/

let musicians = 4;
let message = "";

switch(musicians){
    case 0:
    musicians <= 0;
    message = "It's not a group";
    break;

    case 1:
    musicians == 1;
    message = "Solo";
    break;

    case 2:
    musicians == 2;
    message = "Duet";
    break;

    case 3:
    musicians == 3;
    message = "Trio";
    break;

    case 4:
    musicians == 4;
    message = "Quartet";
    break;

    default:
    musicians > 4;
    message = "This is a large group";
    break;
}
console.log(message);
