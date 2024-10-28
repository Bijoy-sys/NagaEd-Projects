document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way
  
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const successMessage = document.getElementById('successMessage');
  
    // Simple validation
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
      return;
    }
    
    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    // Log data to the console
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  
    // Display success message
    successMessage.style.display = "block";
  
    // Clear form
    document.getElementById('contactForm').reset();
  });