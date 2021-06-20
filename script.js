// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


var lowerCaseS = "abcdefghijklmnopqrstuvwxyz";
var upperCaseS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbersS = "0123456789";
var symbolsS = "!@#$%^&*_-+=";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password == undefined) {
    return;
  }
  else {

  passwordText.value = password;
  }
};


var generatePassword = function(){
  var password=[];
  var passwordLength = window.prompt("What's the length of password you need? Choose between 7 and 129 characters:");
  
  if (!passwordLength) {
    window.alert("Please choose a number between 7 to 129. Click generate button to start over.");
    return;

  }
  else if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please choose a number between 7 to 129. Click button, try again.");
    return;
  }
  else if (passwordLength >= 8 || passwordLength <= 128) {
  }

  var lowerCase = confirm("Do you need lowercase? Ok for yes cancel for no");
  var upperCase = confirm("Do you need uppercase?");
  var numbers = confirm("Do you need numbers?");
  var symbols = confirm("Do you need special characters?");

  if (lowerCase === false && upperCase === false && numbers === false && symbols
     === false){
    window.alert("Choose at least one options to help a better protected password");
    return;
  }

  else {
    //combines the password together based on options selected
      var combinePassword = "";
    
      if (lowerCase) {
      combinePassword += lowerCaseS;
      }
      if (upperCase) {
      combinePassword += upperCaseS;
      }
      if (numbers) {
      combinePassword += numbersS;
      }
      if (symbols) {
      combinePassword += symbolsS;
    };

    // if any of the conditions are true run the code
  if (lowerCase === true || upperCase === true || numbers === true || symbols === true){
    //random string generator for password
      for ( var i = 0; i < passwordLength; i++ ) {
      password += combinePassword[Math.floor(Math.random() * combinePassword.length)];
      }
      return password;
    }
  }
};
