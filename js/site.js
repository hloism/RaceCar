//get values from the screen and display them
function getValues() {
   let PalindromeMessage = document.getElementById("message").value;
   PalindromeMessage = PalindromeMessage.toLowerCase().replace(/\s/g, "");
   let reverseMessage = reverse(PalindromeMessage);
   let isPalindrome = checkForPalindrome(PalindromeMessage, reverseMessage);
   //convert palindrome message to lowercase then reverse it then compare to see if same
   displayResults(PalindromeMessage, reverseMessage, isPalindrome);
}
//check for Palindrome
function checkForPalindrome(message, reversemessage) {
   if (message == reversemessage) {
      return true;
   } else {
      return false;

   }
}

//return the message in reverse (Pallindrome)
function reverse(message) {
   let reverseMessage = "";
   for (let index = message.length - 1; index >= 0; index--) {
      reverseMessage += message[index];
   }

   return reverseMessage;
}


//display the results     
function displayResults(PalindromeMessage, reverseMessage, isPalindrome) {
   //This retrieves the alert element
   let alertElement = document.getElementById("alertMessage");
   let message = "";
   if (isPalindrome) {
      alertElement.classList.add("alert-success");
      alertElement.classList.remove("alert-danger");
      message =
         `<div>
                  You've entered :<strong> ${PalindromeMessage} </strong> 
                  Your phrase reversed is:<strong> ${reverseMessage},</strong>
                  your phrase is a palindrone :<strong>${isPalindrome},</strong>.</div>`;
   } else {
      alertElement.classList.remove("alert-success");
      alertElement.classList.add("alert-danger");
      message =
         `<div>
                  You've entered :<strong> ${PalindromeMessage} </strong> 
                  Your phrase reversed is:<strong> ${reverseMessage},</strong>
                  your phrase is not a palindrone :<strong>${isPalindrome},</strong>.</div>`;
   }

   alertElement.style.opacity = 1;

   alertElement.innerHTML = message
}