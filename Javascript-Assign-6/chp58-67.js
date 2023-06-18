

document.addEventListener("DOMContentLoaded", function() {
  // i. Get element of id "main-content" and assign them in a variable.
  var mainContentElement = document.getElementById("main-content");

  // ii. Display all child elements of "main-content" element.
  var childElements = mainContentElement.children;
  for (var i = 0; i < childElements.length; i++) {
    console.log(childElements[i]);
  }

  // iii. Get all elements of class "render" and show their innerHTML in browser.
  var renderElements = document.getElementsByClassName("render");
  for (var j = 0; j < renderElements.length; j++) {
    console.log(renderElements[j].innerHTML);
  }

  // iv. Fill input value whose element id is "first-name" using JavaScript.
  var firstNameInput = document.getElementById("first-name");
  firstNameInput.value = "Laiba";

  // v. Repeat part iv for id "last-name" and "email".
  var lastNameInput = document.getElementById("last-name");
  lastNameInput.value = "Hamid";

  var emailInput = document.getElementById("email");
  emailInput.value = "laibahamid012@gmail.com";
});

// document.write("i. The node type of the element with the id form-content is an HTMLDivElement. This is because it is a <div> element.")
