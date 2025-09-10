// Script for handling form submission

document.getElementById("infoForm").addEventListener("submit", function(event) {

    event.preventDefault(); // Prevent page reload

    let name = document.getElementById("username").value;

    let email = document.getElementById("useremail").value;

    let message = document.getElementById("message").value;

    // Display response message

    let response = document.getElementById("formResponse");

    response.textContent = "Thank you " + name + "! Your information has been submitted successfully.";

    response.style.color = "green";

    // Reset form

    this.reset();

});