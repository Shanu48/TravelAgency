// scripts/contact.js

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Log form data (for demonstration purposes)
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // You can add functionality here to send the data to a server or display a success message
});
