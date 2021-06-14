// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");
// Write password to the #password input
function writePassword() {
  
  var lengthofPassword = prompt("Please enter the length of password." + " Include lowercase, uppercase,numeric, and or special characters.")

  console.log(lengthofPassword);

  if (lengthofPassword <= 8){
    console.log("password should be greater than 8");
    alert("password should be greater than 8");

  }
  
  if (lengthofPassword >= 128){
    console.log("password should be less than 128");
    alert("password should be less than 128");
     
    return lengthofPassword;
  }

 

  
  // If password is valid, generate lengthofPassword in passwordText.value box.
 // return lengthofPassword;
  

 
  passwordText.value = password;

}


  


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
