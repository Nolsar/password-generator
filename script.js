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
var symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", " ", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// Add event listener to generate button//
generateBtn.addEventListener("click", writePassword);

// start function to generate password//
function generatePassword() {

  // Asks for user input
  enter = parseInt(prompt("How many symbolss would you like your password? Choose between 8 and 128"));

  // WHEN prompted for the length of the password, THEN choose a length of at least 8 symbolss and no more than 128 symbolss 

  // // if no value is entered//
  if (!enter) {
    alert("Please enter a value");
    return "Could not generate password";

    //if a value does not meet criteria//
  } else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt("You must choose a number between 8 and 128"));


    //once length of password is validated//
  } else {
    // confirm if they want numeric
    confirmNumber = confirm("Will this contain numbers?");

    // confirm if they want symbolss
    confirmSymbols = confirm("Will this contain special symbols?");

    // confirm if they want uppercase
    confirmUppercase = confirm("Will this contain Uppercase letters?");

    // confirm if they want lowercase
    confirmLowercase = confirm("Will this contain Lowercase letters?");
  };

  // If no options were chosen
  if (!confirmSymbols && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    choices = alert("You must choose a criteria!");

    // If all choices were chosen
  } else if (confirmSymbols && confirmNumber && confirmUppercase && confirmLowercase) {

    choices = symbols.concat(number, lower, upper);

    // If only 3 choices were chosen
  } else if (confirmSymbols && confirmNumber && confirmUppercase) {
    choices = symbols.concat(number, upper);

  } else if (confirmSymbols && confirmNumber && confirmLowercase) {
    choices = symbols.concat(number, lower);

  } else if (confirmSymbols && confirmLowercase && confirmUppercase) {
    choices = symbols.concat(lower, upper);

  } else if (confirmNumber && confirmLowercase && confirmUppercase) {
    choices = number.concat(lower, upper);

    // If 2 choices were chosen 
  } else if (confirmSymbols && confirmNumber) {
    choices = symbols.concat(number);

  } else if (confirmSymbols && confirmLowercase) {
    choices = symbols.concat(lower);

  } else if (confirmSymbols && confirmUppercase) {
    choices = symbols.concat(upper);

  } else if (confirmLowercase && confirmNumber) {
    choices = alpha.concat(number);

  } else if (confirmLowercase && confirmUppercase) {
    choices = alpha.concat(upper);

  } else if (confirmNumber && confirmUppercase) {
    choices = number.concat(upper);

    // Else if for 1 positive option
  } else if (confirmSymbols) {
    choices = symbols;

  } else if (confirmNumber) {
    choices = number;

  } else if (confirmLowercase) {
    choices = lower;
  }

  // password variable is an array placeholder for user generated amount of length
  var password = [];

    // Random selection for all variables: 
  for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
  }

  // This joins the password array and converts it to a string
  var ps = password.join("");
  UserInput(ps);
  return ps;
}

// This puts the password value into the textbox
// Changed function input to use textcontent
function UserInput(ps) {
  document.getElementById("password").textContent = ps;
}

// ************************ function ends here *********************************