// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// declare function generatePassword
function generatePassword() {
  //variables holding the different characters
var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'];
var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '+', '=', '(', ')'];

var numericCharacters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var selectedCharacters = [];

//ie. uppercase = ['A', 'B', 'C', 'D',]
//i.e. selected characters = []
//I need to use prompt() to gather password criteria.

var passwordLength = prompt("How many characters would you like in your password?")



if(passwordLength < 8 || passwordLength > 128) {
  return "Please pick a number between 8 and 128";
}

//prompt("How many characters would you like in your password?")
//if statements are how you handle variables.
//passwordLength var
// if(passwordLength < 8) stop function
// if(passwordLength > 128) stop function

var uppercaseConfirm = confirm("Do you want uppercase characters?")

//confirm() for upper case letters
var lowercaseConfirm = confirm("Do you want lowercase characters?")
//confirm() for lowercase
var specialConfirm = confirm("Do you want special characters?")
//confirm() for special characters
var numericConfirm = confirm("Do you want numeric characters?")
//confirm() for numeric characters

//once each confirm/prompt has been answered, 
//if confirms are true, keep or get character type for the confirm
//at least one has to be true.
//if no confirm is true, stop function

//if a confirm is true then concat relatead arr to selected characters arr
//ie ['A', 'B', 'C', a, b, c, 1, 2, 3, %]

if(!uppercaseConfirm && !lowercaseConfirm && !specialConfirm && !numericConfirm) {
 
 return "You must choose at least one character type.";
}

if(uppercaseConfirm) {
  selectedCharacters = selectedCharacters.concat(uppercaseCharacters);
}
if(lowercaseConfirm) {
  selectedCharacters = selectedCharacters.concat(lowercaseCharacters);
}

if(specialConfirm) {
  selectedCharacters = selectedCharacters.concat(specialCharacters);
}
if(numericConfirm) {
  selectedCharacters = selectedCharacters.concat(numericCharacters);
}
//for loop based on passwordLength prompt
// use Math.floor(Math.random() * selectedCharacters.length) to get random index of selectedCharacters
//i needs to increase each time to become the password length as soon as pw length > pw length selected, it will stop running.
var password = ""; 
console.log(selectedCharacters);
for(var i=0; i <=passwordLength; i++) {
  //below will spit out a number to be used in our index
  var index = Math.floor(Math.random()* selectedCharacters.length);
  var randomString= selectedCharacters[index]
  password = password + randomString;
}

return password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


