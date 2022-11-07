// Assignment Code
var generateBtn = document.querySelector("#generate");
var characterLength = 8;
var chioceArr = [];

var specialCharArr = ["!","@", "#", "$", "%","^", "&", "*", "(",")", "_", "+", "=", "-", "{", "}", "[", "]", "~", "`", "<", ">", ",", ".", "/",];
var lowerCassArr = ["a","b", "c", "d", "e","f", "g", "h", "i","j", "k", "l", "m","n", "o", "p", "q","r", "s", "t", "u","v", "w", "x", "y","z"];
var uppercaseArr = ["A","B", "C", "D", "E","F", "G", "H", "I","J", "K", "L", "M","N", "O", "P", "Q","R", "S", "T", "U","V", "W", "X", "Y","Z"];
var numberArr = ["1","2", "3", "4", "5","", "6", "7", "8","9", "0"];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {

  var correctPrompts = getPrompts(); //either true or false
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordTest.value = "";
  }
}


function generatePassword() {
  // I will generatePassword base on the prompts
  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * chioceArr.length);
    password = password + chioceArr[randomIndex];
  }
  return password;
}

function getPrompts(){
  chioceArr = [];
  characterLength = parseInt(prompt("How many characters lenghth of password(8 - 128 characters")); //NaN
  if (isNaN(characterLength) || characterLength <  8 || characterLength > 128){  //i am hopping this is all false
    alert("character length has to be number, 8 - 128 digits. Please try again.");
    return false;
  }

  if (confirm("would you like lowercase letters in your password?")) {
    chioceArr = chioceArr.concat(lowerCassArr);       
  }
  if (confirm("Would you like uppercase letters in your password?")) {
    chioceArr = chioceArr.concat(uppercaseArr);
  }
  if (confirm("Would you like special characters in your password?")) {
    chioceArr = chioceArr.concat(specialCharArr);
  }
  if (confirm("would you like numbers in your password?")) {
    chioceArr = chioceArr.concat(numberArr);
  }

  return true;
}  