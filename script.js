// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input

let lowerAlphabetExample = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let upperAlphabetExample = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let characterExample = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '?']
let numberExample = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

let builtArray = [...lowerAlphabetExample, ...upperAlphabetExample, ...characterExample, ...numberExample]

// let generatedLetterIndex = math.floor(math.random() * builtArray.length)

// math.floor(math.random()*builtArray.length)
function generatePassword() {
  if (confirm("lowercase Allowed?")) {
    builtArray = [...builtArray, ...lowerAlphabetExample];


  }

  if (confirm("Uppercase Allowed?")) {
    builtArray = [...builtArray, ...upperAlphabetExample];
  }

  if (confirm("Special Characters Allowed?")) {
    builtArray = [...builtArray, ...characterExample];
  }

  let password = "";
  let passwordLength = prompt("how many characters in the password?");
  // passwordLength = math.max(8, math.min(128, passwordLength));

  for (let index = 0; index < passwordLength; index++) {
    const randomIndex = builtArray[Math.floor(builtArray.length * Math.random())];
    password += randomIndex;

  }
  // console.log("Password:" + password)
  return password;
}

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// user clicks button
  // addeventlistener to button
// get password length
  // add prompt for pw length
// character types
  // add confirm for characters
  // create array of chosen characters
  // randomly select characters from array
  // display characters
// user gets password