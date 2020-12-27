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

//Password criteria//
var character = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "|", "[", "]", ";", "'", ":", "<", ">", "?", "/"];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var alphaLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// Add event listener to generate button//
generateBtn.addEventListener("click", writePassword);

// write a function called generatePassword which will have a series of prompts for user input//
function generatePassword() {
  let newPassword = "";
  let passwordCharset = "";

  // WHEN prompted for the length of the password, THEN I choose a length of at least 8 characters and no more than 128 characters 
  let passwordLengthInput = prompt("How many characters would you like your password to be?");
  if (Number(passwordLengthInput < 8) | Number(passwordLengthInput > 128) | isNaN(passwordLengthInput))
    alert("Please enter a number between 8 and 128!");
    return;}

  // WHEN prompted for password criteria//
  // THEN I select which criteria to include in the password
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  // We have to ask the user for how many characters they want in a password
  // we have to check to make sure it is between 8 and 128
  // otherwise, we tell user to fix their input.

  // WHEN prompted for character types to include in the password
  // THEN I choose lowercase, uppercase, numeric, and/or special characters
  // confirm if they want lowercase
  // confirm if they want uppercase
  // confirm if they want numeric
  // confirm if they want special characters

  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  // we need to show an error if they gave us no characters to choose from

  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
// from all the characters chosen, choose one randomly and add it to our password X number of times
// 

// ************************ function ends here *********************************

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);{}

  // ************************ function ends here ********************************//