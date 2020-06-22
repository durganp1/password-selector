// create a series of prompts for password criteria
//  *length 8-128 characters - (window.prompt)
//  *character types - checkboxes for each choice - one prompt
//    * lowercase
//    * uppercase
//    * numeric
//    * special charecters
// validate that at least one character type was selected
// generate random password based off selected types
// display password in alert or in window

var passwordSize = function(event) {
  var promptSize = prompt("How many characters would you like your password to be?  Please choose between 8 - 128");
    if (promptSize < 8 || promptSize > 128 || !promptSize) {
      alert("You need to make a valid selection.");
      return passwordSize();
    }
    else if (promptSize > 8 && promptSize < 128) {
      alert("You have chosen " + promptSize + " characters.")
    }
    characterSelection();
  };
var characterSelection = function() {
  var confirmUpperCase = confirm("Would you like to use UPPERCASE in your password?");
    if (confirmUpperCase) {
      
    }
  var confirmLowerCase = confirm("Would you like to use lowercase in your password?");
    if (confirmLowerCase) {
      
    }
  var confirmNumbers = confirm("Would you like to use numbers in your password?");
    if (confirmNumbers) {
      
    }
  var confirmSymbols = confirm("Would you like to use symbols in your password?");
    if (confirmSymbols) {
    
    }
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", passwordSize);
