let hasLower
let hasUpper
let hasNumbers
let hasSpecial
let passLength
let chosenString

const passPrompt = () => {
  passLength = parseInt(prompt('how long should your password be? (between 8 and 128 characters)'))
    if(isNaN(passLength)==true || passLength < 8 || passLength > 128 ) {
    alert('your password must be a number between 8 and 128')
    passPrompt()
    return
  }
  hasLower = confirm('include lowercase characters?')
  hasUpper = confirm('include uppercase characters?')
  hasNumbers = confirm('include numbers?')
  hasSpecial = confirm('include special characters?')
  console.log(passLength, hasLower, hasUpper, hasNumbers, hasSpecial)
}

const passGenerate = () => {
  let lowerString = "abcdefghijklmnopqrstuvwxyz";
  let upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numString = "0123456789";
  let specString = "!#$%&'()*+,-./:;<>?@=[^_`{|}~";
  let password = ''
  
  let chosenString = ''
  
  if(hasLower) {
    chosenString += lowerString 
  }
  if (hasUpper) {
   chosenString += upperString;
 }  
  if (hasNumbers) {
   chosenString += numString;
 }

 if (hasSpecial) {
   chosenString += specString;
 } 
 

for (let i = 0; i < passLength; i++) {
let randomIndex = Math.floor(Math.random() * chosenString.length)
  let randomChar = chosenString[randomIndex]
  password = password + randomChar
}
console.log(password)
return password

}

let tentativePassword

const passVerify = () => {
  tentativePassword = passGenerate()
  if(hasLower) {
    let verifiedLower = false
    for (let i = 0; i < passLength; i++) {
      let possibleLower = tentativePassword[i]
      console.log(possibleLower)
      if(possibleLower == 'a' || possibleLower == 'b' ||possibleLower == 'c' ||possibleLower == 'd' ||possibleLower == 'e' ||possibleLower == 'f' ||possibleLower == 'g' ||possibleLower == 'h' ||possibleLower == 'i' ||possibleLower== 'j' ||possibleLower == 'k' ||possibleLower== 'l' ||possibleLower == 'm' ||possibleLower == 'n' ||possibleLower == 'o' ||possibleLower== 'p' ||possibleLower == 'q' ||possibleLower == 'r' ||possibleLower == 's' ||possibleLower == 't' ||possibleLower== 'u' ||possibleLower == 'v' ||possibleLower == 'w' ||possibleLower == 'x' ||possibleLower == 'y' ||possibleLower == 'z'){
        verifiedLower = true
      }
      
      }
      if(verifiedLower === false) {
        console.log('no lowercases')
        passVerify()
  } 
    }

      if(hasSpecial) {
        let verifiedSpecial = false
        for (let i = 0; i < passLength; i++) {
          let possibleSpec = tentativePassword[i]
          if(possibleSpec == '!' || possibleSpec == '#' || possibleSpec == '$' || possibleSpec == '%' || possibleSpec == '&' || possibleSpec == "'" || possibleSpec == '(' || possibleSpec == ')' || possibleSpec == '*' || possibleSpec == '+' || possibleSpec == ':' || possibleSpec == ';' || possibleSpec == '<' || possibleSpec == ',' || possibleSpec == '-' || possibleSpec == '.' || possibleSpec == '/' || possibleSpec == '>' || possibleSpec == '?' || possibleSpec == '@' || possibleSpec == '=' || possibleSpec == '[' || possibleSpec == '^' || possibleSpec == '_' || possibleSpec == '`' || possibleSpec == '{' || possibleSpec == '|' || possibleSpec == '}' || possibleSpec == '~') {
            verifiedSpecial = true
          }

        }
        if(verifiedSpecial === false) {
          console.log("no specials")
          passVerify()
        }
      }
      if(hasUpper) {
        let verifiedUpper = false
        for (let i = 0; i < passLength; i++) {
          let possibleUpper = tentativePassword[i]
          if(possibleUpper === 'A' || possibleUpper === 'B' || possibleUpper === 'C' || possibleUpper === 'D' || possibleUpper === 'E' || possibleUpper === 'F' || possibleUpper === 'G' || possibleUpper === 'H' || possibleUpper === 'I' || possibleUpper === 'J' || possibleUpper === 'K' || possibleUpper === 'L' || possibleUpper === 'M' || possibleUpper === 'N' || possibleUpper === 'O' || possibleUpper === 'P' || possibleUpper === 'Q' || possibleUpper === 'R' || possibleUpper === 'S' || possibleUpper === 'T' || possibleUpper === 'U' || possibleUpper === 'V' || possibleUpper === 'W' || possibleUpper === 'X' || possibleUpper === 'Y' || possibleUpper === 'Z') {
            verifiedUpper = true
          }
      }
        if(verifiedUpper === false) {
          console.log("no uppercases")
          passVerify()
        }
      }
      if(hasNumbers) {
        let verifiedNumber = false
        for (let i = 0; i < passLength; i++) {
          let possibleNumber = tentativePassword[i]
          if(possibleNumber === '1' || possibleNumber === '2' || possibleNumber === '3' || possibleNumber === '4' || possibleNumber === '5' || possibleNumber === '6' || possibleNumber === '7' || possibleNumber === '8' || possibleNumber === '9' || possibleNumber === '0') {
            verifiedNumber = true
          }
      }
      if(verifiedNumber === false) {
        console.log("no numbers")
        passVerify()
      }
    }
    return tentativePassword
}




document.getElementById('generate').addEventListener('click', () => {
  passPrompt()
  let newPassWord = passVerify()
  console.log(newPassWord)
  document.getElementById('password').innerHTML = newPassWord
})