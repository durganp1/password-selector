// create a series of prompts for password criteria
//  *length 8-128 characters - (window.prompt)
//  *character types - checkboxes for each choice - one prompt
//    * lowercase
//    * uppercase
//    * numeric
//    * special charecters
// validate that at least one character type was selected
// generate random password based off selected types
// display password in alert or in window

var upperCaseArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbersArr = ["1","2","3","4","5","6","7","8","9","0"];
var symbolsArr = ["!","@","#","$","%","^","&","*"];
var confirmUpperCase;
var confirmLowerCase;
var confirmNumbers;
var confirmSymbols;
var userPassword = "";
var passwordSize = function(event) {
  var promptSize = prompt("How many characters would you like your password to be?  Please choose between 8 - 128"); 
    if (promptSize < 8 || promptSize > 128 || !promptSize) {
      alert("You need to make a valid selection.");
      return passwordSize();
    }
    else if (promptSize > 8 && promptSize < 128) {
      alert("You have chosen " + promptSize + " characters.")
    };
    characterSelection(promptSize);
}; 
var characterSelection = function(promptSize) {  
    confirmUpperCase = confirm("Would you like to use UPPERCASE in your password?");
    confirmLowerCase = confirm("Would you like to use lowercase in your password?");
    confirmNumbers = confirm("Would you like to use numbers in your password?");
    confirmSymbols = confirm("Would you like to use symbols in your password?");
    if (confirmUpperCase === false && confirmLowerCase === false && confirmNumbers === false && confirmSymbols === false) {
      alert("You need to choose at least one option!");
      characterSelection();
    }
    else {
      userChoices(promptSize);
    }
};
var userChoices = function(promptSize) {
    debugger;
    if (confirmUpperCase === true) {
   for (var i = userPassword.length; i < promptSize; i++) {
      var upperPassword = upperCaseArr[Math.floor(Math.random() * upperCaseArr.length)];
      userPassword += upperPassword;
    };
  };
    // else {
    //   alert("Your new password is " + userPassword);
    //   return;
    // }

  
    if (confirmLowerCase === true) {
  for (var i = userPassword.length; i < promptSize; i++) {
      var lowerPassword = lowerCaseArr[Math.floor(Math.random() * lowerCaseArr.length)];
      userPassword += lowerPassword;
    };
  };
    // else {
    //   alert("Your new password is " + userPassword);
    //   return;
    // }
  
  
    if (confirmNumbers === true) {
  for (var i = userPassword.length; i < promptSize; i++) {
      var numberPassword = numbersArr[Math.floor(Math.random() * numbersArr.length)];
      userPassword += numberPassword;
    };
  };
    // else {
    //   alert("Your new password is " + userPassword);
    //   return;
    // }

  
    if (confirmSymbols === true) {
  for (var i = userPassword.length; i < promptSize; i++) {
      var symbolPassword = symbolsArr[Math.floor(Math.random() * symbolsArr.length)];
      userPassword += symbolPassword;
    };
  }
    else if 
      (userPassword.length === promptSize); {
      alert("Your new password is " + userPassword);
      return;
    }
  
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
    generateBtn.addEventListener("click", passwordSize);