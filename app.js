
const result = document.querySelector("#result")
// Sabhi lowercase alphabets
const lowercaseAlphabets = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];
  
  // Sabhi uppercase alphabets
  const uppercaseAlphabets = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ];
  
  // Numbers 1 se 9 tak
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Special characters
  const specialCharacters = [
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '[',
    ']', '{', '}', '|', ';', ':', ',', '.', '<', '>', '?', '/', '~',
    '`', '-', '='
  ];
  
  // Combined array
  const allCharacters = [
    ...lowercaseAlphabets,
    ...uppercaseAlphabets,
    ...numbers,
    ...specialCharacters
  ];
  
let passwordvalidation = 10;

function generatePassword(length) {
    let password = ''
for (let i = 0; i < length; i++) {
let combineRemdon = Math.floor(Math.random() * allCharacters.length)
password += allCharacters[combineRemdon]
}
return password;
}
let password = generatePassword(passwordvalidation)
console.log(password);
  