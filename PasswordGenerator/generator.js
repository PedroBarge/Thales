//Variables Area
const arrayUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const arrayLower = "abcdefghijklmnopqrstuvwxyz";
const arrayNumber = "0123456789";
const arraySpecial = "!@#$%^&*()_+?><:;";

const uppercaseCheck = document.getElementById("uppercase");
const lowercaseCheck = document.getElementById("lowercase");
const numbersCheck = document.getElementById("numbers");
const specialCheck = document.getElementById("special");

let caracteresForPassword = [];
let password = "";

const rangeInput = document.getElementById("range");
let maxCharacters = document.getElementById("maxCharacters");

let showPassword = document.getElementById("showPassword");

let checkedPasswordStrength = document.getElementById("checkPasswordStrength");
//----------------------------------------------------------------
cleanOptions();
function cleanOptions() {
  uppercaseCheck.checked = false;
  lowercaseCheck.checked = false;
  numbersCheck.checked = false;
  specialCheck.checked = false;
  rangeInput.value = 6;
  maxCharacters.innerHTML = 6;
  showPassword.value = "";
  checkedPasswordStrength.value = "";
}
//----------------------------------------------------------------
rangeInput.addEventListener("input", function () {
  maxCharacters.innerHTML = rangeInput.value;
});

function generatePassword() {
  caracteresForPassword = [];
  password = "";

  if (
    !uppercaseCheck.checked &&
    !lowercaseCheck.checked &&
    !numbersCheck.checked &&
    !specialCheck.checked
  ) {
    alert("Need to at least choose one option");
    showPassword.value = "";
    cleanOptions();
    return;
  }

  if (uppercaseCheck.checked) {
    caracteresForPassword.push(arrayUpper);
  }
  if (lowercaseCheck.checked) {
    caracteresForPassword.push(arrayLower);
  }
  if (numbersCheck.checked) {
    caracteresForPassword.push(arrayNumber);
  }
  if (specialCheck.checked) {
    caracteresForPassword.push(arraySpecial);
  }

  let allCharacters = caracteresForPassword.join("");

  for (let i = 0; i < rangeInput.value; i++) {
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }

  showPassword.value = password;
  functionCheckedPasswordStrength();
}

function copyPassword() {
  navigator.clipboard.writeText(password);
  alert("Password Copied!");
}

function functionCheckedPasswordStrength() {
  const length = password.length;
  const hasLowerCase = /[a-z]/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecialChar = /[@#$%^&*()_+?><:;]/.test(password);

  if (
    length >= 16 &&
    hasLowerCase &&
    hasUpperCase &&
    hasDigit &&
    hasSpecialChar
  ) {
    checkedPasswordStrength.value = "Very High Strength";
  } else if (length >= 12 && hasLowerCase && hasUpperCase && hasDigit) {
    checkedPasswordStrength.value = "High Strength";
  } else if (length >= 8 && hasLowerCase && hasUpperCase && hasDigit) {
    checkedPasswordStrength.value = "Medium Strength";
  } else if (length >= 6 && (hasLowerCase || hasDigit)) {
    checkedPasswordStrength.value = "Low Strength";
  } else {
    checkedPasswordStrength.value = "Invalid Password";
  }
}
