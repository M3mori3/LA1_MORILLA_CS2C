//strings

//variables
var favActorFirstName = "Cillian";
var favActorLastName = "Murphy";

//create fullname by concatinating both first name and last name
let favActorFullName = favActorFirstName + " " + favActorLastName;

//capitalize fullname
let upperCase = favActorFullName.toUpperCase()

//appending variable message
let message = "My favorite actor is " + favActorFullName.toUpperCase();
message += ", his best show is 28 Days Later.";

//log in all variables
console.log(favActorFirstName);
console.log(favActorLastName);
console.log(upperCase);
console.log(message);