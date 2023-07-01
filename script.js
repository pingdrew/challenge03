// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // Creates all the arrays containing the characters that will be referenced to create our password
  var lowercaseLetters = ["a","b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
      uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M",'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
      specialCharacters = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"],
      numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      chosenChars = [];

  // It first asks you how many characters you want, only returning non naan values that are numbers indicated by +prompt and makes sure your choice is in the acceptable range
  var lengthChoice = +prompt("How many characters? 8 - 128?");
  if(lengthChoice < 8 || lengthChoice > 128) {
    return;
  };

  // Asks boolean questions to insure one data type is saved of the users preference in password styles
  var lowerChoice = window.confirm("Would you like lowercase letters?");
  var upperChoice = window.confirm("Would you like uppercase letters?");
  var specialChoice = window.confirm("Would you like special characters?");
  var numberChoice = window.confirm("Would you like numbers?");

  // if statements concat all chosen character types into the chosen chars variable
  if(lowerChoice) {
    chosenChars = chosenChars.concat(lowercaseLetters)
  };

  if(upperChoice) {
    chosenChars = chosenChars.concat(uppercaseLetters)
  };

  if(specialChoice) {
    chosenChars = chosenChars.concat(specialCharacters)
  };

  if(numberChoice) {
    chosenChars = chosenChars.concat(numbers)
  };

  // makes the variable that will contain the final product
  var password = "";

  // This for loop grabs one random string from the array of chosen characters, puts it in the password variable, and repeats lengthChoice amount of times
  for(var i = 0; i < lengthChoice; i++) {
    var l = Math.floor(Math.random()*chosenChars.length);
    password += chosenChars[l]
  }

  // Generated password is given to user.
  return password;
};