/* alert('hi') */
function generateMyPassword(
  passwordLength,
  includeLowerCase,
  includeUpperCase,
  includeNumberCase,
  includeSymbolCase
) {
    let lowerCase = "abcdefghijklmopqrstuvwxyz"
    let upperCase = "ABCDEFGHIJKLMOPQRSTUVWXYZ"
    let number = " 0123456789"
    let symbol = '@#$%^&*()'

    let password =""
    let allowedChars= ""

    allowedChars += includeLowerCase? lowerCase:"" 
allowedChars += includeUpperCase?upperCase:""
allowedChars += includeNumberCase? number:""
allowedChars += includeSymbolCase?  symbol:""

if(!Number.isInteger(passwordLength) || passwordLength <= 0){
     return "Please enter a password length greater than 0.";
}
if (allowedChars.length === 0){
  return "No character types selected. Cannot generate a password.";  
}

for(i = 0; i <= passwordLength; i++){
 let randomNum = Math.floor(Math.random() * allowedChars.length)
 password += allowedChars[randomNum];
}
return password;
}


const passwordLength = 8
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumberCase = true;
const includeSymbolCase = true;

const password = generateMyPassword(
  passwordLength,
  includeLowerCase,
  includeUpperCase,
  includeNumberCase,
  includeSymbolCase
);
console.log(`MyGenerated-Password is ${password} `);