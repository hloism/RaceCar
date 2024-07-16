//get values from the screen and display them
function getValues(){
   let PalindromeMessage = document.getElementById("message").value;

   let reverseMessage = reverse(PalindromeMessage);
   let isPalindrome = checkForPalindrome(PalindromeMessage, reverseMessage);
   //convert palindrome message to lowercase then reverse it then compare to see if same
   NotaPalindromeMessage.innerHTML = displayResults(PalindromeMessage, reverseMessage, isPalindrome);
}


function checkForPalindrome(message, reversemessage){
   if(message == reversemessage){
    return true;
   } else{
    return false;

   }
}

//return the message in reverse (Pallindrome)
function reverse(message){
      let reverseMessage = "";
      for(let index = message.length-1; index>=0; index--){
         reverseMessage += message[index]; 
      }

      return reverseMessage;
}


     
  function displayResults(PalindromeMessage, reverseMessage, isPalindrome){  
    let alertElement = document.getElementById("alertMessage");

    alertElement.style.opacity = 1;  
    
    
    let message = `<div>Your phrase reversed is:<strong> ${reverseMessage}, your phrase is a palindrone :<strong>${isPalindrome}, your phrase is a:<strong> ${PalindromeMessage}.</strong>. </div>`;
 alertElement.innerHTML = message
}