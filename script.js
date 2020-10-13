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

  // Prompt for lowercase characters
  let lower
  while (true) {
    lower = prompt("Do you want lowercase characters? (Yes/No)");
    if (lower.toLowerCase() == "yes") {
      break;
      
    }
    else if (lower.toLowerCase() == "no") {
      break;
    }
    alert("Must select Yes or No.");
  }
  
  if (lower.toLowerCase() == "yes") {
    characters = characters + "abcdefghijklmnopqrstuvwxyz"
    alert("Lowercase characters will be inlcuded in your password.")
  }
  else {
    alert("Lowercase charaters will not be inlcuded in your password.")
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

  // Prompt for number characters
  let numbers
  while (true) {
    numbers = prompt("Do you want number characters? (Yes/No)");
    if (numbers.toLowerCase() == "yes") {
      break;
    
    }
    else if (numbers.toLowerCase() == "no") {
      break;
    }
    alert("Must select Yes or No.");
  }

  if (numbers.toLowerCase() == "yes") {
    characters = characters + "0123456789"
    alert("Number characters will be inlcuded in your password.")
  }
  else {
    alert("Number charaters will not be inlcuded in your password.")
  }

  // Prompt for special characters
  let specials
  while (true) {
    specials = prompt("Do you want special characters? (Yes/No)");
    if (specials.toLowerCase() == "yes") {
      break;
    
    }
    else if (specials.toLowerCase() == "no") {
      break;
    }
    alert("Must select Yes or No.");
  }

  if (specials.toLowerCase() == "yes") {
    characters = characters + "!#$%&*+-.:?@^`~"
    alert("Special characters will be inlcuded in your password.")
  }
  else {
    alert("Special charaters will not be inlcuded in your password.")
  }

  // create for loop to create password 
  let password = "";

  for (var i = 0; i < size; i++) {
    password = password + characters.charAt(Math.floor(Math.random() * Math.floor(characters.length - 1)));
  }
  
  return password

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
