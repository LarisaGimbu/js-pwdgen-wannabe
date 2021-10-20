const firstname = prompt("To find out your password please enter your firstname")
const lastname = prompt("To find out your password please enter your lastname")
const favouriteColor = prompt("To find out your password please enter your favourite color")

// console.log (firstname)
// console.log (lastname)
// console.log (favouriteColor)

const textToPrint = `
  <strong> Your new password is:</strong> ${firstname}${lastname}${favouriteColor}21
`
// console.log(textToPrint)
document.getElementById("password-generator").innerHTML = textToPrint