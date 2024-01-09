// script.js
//  Add event listener to the button with id "button-contact"
document.addEventListener("DOMContentLoaded", function () {
    var contactButton = document.getElementById("button-contact");
    if (contactButton) {
      contactButton.addEventListener("click", handleButtonClick);
    }
  
    // Add event listener for changes in the phone input
    var phoneInput = document.getElementById("phone");
    if (phoneInput) {
      phoneInput.addEventListener("input", handlePhoneInputChange);
    }
  });
  
  // Function to log the text from the "email" input
  function handleButtonClick() {
    var emailInput = document.getElementById("email");
    if (emailInput) {
      var emailText = emailInput.value;
      console.log("Email:", emailText);
    }
  }
  
  // Function to create a <p> tag with the given text
  function createParagraph(text) {
    var paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
  }
  
  // Function to handle changes in the phone input
  function handlePhoneInputChange(event) {
    var phoneValue = event.target.value;
    var paragraph = createParagraph("Phone changed: " + phoneValue);
    console.log(paragraph.outerHTML);
  }
