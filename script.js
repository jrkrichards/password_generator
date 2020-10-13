// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Prompts to get user password preferences


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
