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

var upperCaseArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbersArr = ["1","2","3","4","5","6","7","8","9","0"];
var symbolsArr = ["!","@","#","$","%","^","&","*"];

var passwordSize = function(event) {
  var promptSize = prompt("How many characters would you like your password to be?  Please choose between 8 - 128");
  console.log(promptSize);  
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
  var confirmLowerCase = confirm("Would you like to use lowercase in your password?");
  var confirmNumbers = confirm("Would you like to use numbers in your password?");
  var confirmSymbols = confirm("Would you like to use symbols in your password?");
    if (confirmUpperCase === false && confirmLowerCase === false && confirmNumbers === false && confirmSymbols === false) {
      alert("You need to choose at least one option!");
      characterSelection();
    }
    else {

    }
    
};

     
    

var userChoices = function() {
  var userPassword = ""
  
  if (characterSelection.confirmUpperCase && userPassword < promptSize) {
    userPassword = userPassword + upperCaseArr[Math.floor(Math.random() * upperCaseArr.length)]
    userPassword += upperCaseArr
  }
  else if (userPassword === promptSize){
    alert("Your new password is " + userPassword);
  };
  if (characterSelection.confirmLowerCase && userPassword < promptSize) {
    userPassword = userPassword + lowerCaseArr[Math.floor(Math.random() * lowerCaseArr.length)]
    userPassword += lowerCaseArr
  }
  else if (userPassword === promptSize){
    alert("Your new password is " + userPassword);
  };
  if (characterSelection.confirmNumbers && userPassword < promptSize) {
    userPassword = userPassword + numbersArr[Math.floor(Math.random() * numbersArr.length)]
    userPassword += numbersArr
  }
  else if (userPassword === promptSize){
    alert("Your new password is " + userPassword);
  };
  if (characterSelection.confirmSymbols && userPassword < promptSize) {
    userPassword = userPassword + symbolsArr[Math.floor(Math.random() * symbolsArr.length)]
    userPassword += symbolsArr
  }
  else if (userPassword === promptSize){
    alert("Your new password is " + userPassword);
  };
  console.log(userPassword).value;
  return;

};
  
// Get references to the #generate element
 var generateBtn = document.querySelector("#generate");

// //Write password to the #password input
// function writePassword() {
//   var password = userChoices;
//   var passwordText = document.querySelector("#userChoices");

//   passwordText.value = password;

// };

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", passwordSize);
