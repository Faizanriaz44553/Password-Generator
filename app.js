
function generatePassword() {
  let para = document.querySelector("#result")
// Sabhi lowercase alphabets
let lowercaseAlphabets = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];
  
  // Sabhi uppercase alphabets
  let uppercaseAlphabets = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ];
  
  // Numbers 1 se 9 tak
  let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Special characters
  let specialCharacters = [
    '!', '@', '#', '$', '%', '^', '&', '*', '_', '+', ';', ':', ',', '.', '<', '>', '?', '/', '~',
    '`', '-', '='
  ];
  
  // Combined array
  let allCharacters = [
    ...lowercaseAlphabets,
    ...uppercaseAlphabets,
    ...numbers,
    ...specialCharacters
  ];

    let password = ''
for (let i = 0; i < 10; i++) {
let combineRemdon = Math.floor(Math.random() * allCharacters.length)
password += allCharacters[combineRemdon]
}
para.innerHTML = password
}
function copypaste() {
  let passwordInput = document.querySelector("#result")
  let alertMassage = document.querySelector("#alert-massage")
  navigator.clipboard.writeText(passwordInput.value);

  if (passwordInput.value) {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Copy Password",
      showConfirmButton: false,
      timer: 1500
    });
  }
}