// Assignment Code
// GIVEN I need a new, secure password
// need a button or link to get a new password
// need to show the password on the page

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // WHEN I click the button to generate a password
  // THEN I am presented with a series of prompts for password criteria
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page
  passwordText.value = password;

}

// ************************ function here *********************************

//user input variables//
// User input variables: 
var enter;
var confirmNumber;
var confirmSymbols;
var confirmUppercase;
var confirmLowercase;

//Password criteria//
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "|", "[", "]", ";", "'", ":", "<", ">", "?", "/"];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// Add event listener to generate button//
generateBtn.addEventListener("click", writePassword);

// start function to generate password//
function generatePassword() {

  // Asks for user input
  enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));

  // WHEN prompted for the length of the password, THEN choose a length of at least 8 characters and no more than 128 characters 
  // if no value is entered//
  if (!enter) {
    alert("Please enter a value");

    //if a value does not meet criteria//
  } else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt("You must choose a number between 8 and 128"));

    //once length of password is validated//
  } else {
    // confirm if they want numeric
    confirmNumber = confirm("Will this contain numbers?");

    // confirm if they want characters
    confirmSymbols = confirm("Will this contain special characters?");

    // confirm if they want uppercase
    confirmUppercase = confirm("Will this contain Uppercase letters?");

    // confirm if they want lowercase
    confirmLowercase = confirm("Will this contain Lowercase letters?");
  };

  // Else if for 4 negative options
  if (!confirmSymbols && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    choices = alert("You must choose a criteria!");

  }


}


// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// we need to show an error if they gave us no characters to choose from

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// from all the characters chosen, choose one randomly and add it to our password X number of times
// 

// ************************ function ends here *********************************

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); { }

  // ************************ function ends here ********************************//