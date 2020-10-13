// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Prompts to get user password preferences
function generatePassword () {
  // password values
  let characters = ""

  let size
  while (true) {
    size = prompt("What is the required password length? Must be between 8 and 128.");
    if (size > 7 && size < 129) {
      break;
    }
    alert("Password length must be 8 - 128 characters.");
  }
  alert("Your password will be "+size+" characters");
}

// Prompt for uppercase characters
let upper
while (true) {
  upper = prompt("Do you want uppercase characters? (Yes/No)");
  if (upper.toLowerCase() == "yes") {
    break;
    
  }
  else if (upper.toLowerCase() == "no") {
    break;
  }
  alert("Must select Yes or No.");
}

if (upper.toLowerCase() == "yes") {
  characters = characters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  alert("Uppercase characters will be inlcuded in your password.")
}
else {
  alert("Uppercase charaters will not be inlcuded in your password.")
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
