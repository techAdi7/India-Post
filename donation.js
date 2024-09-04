// Existing JavaScript code...

// Donation Form Script
document.getElementById("donationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Collect form data
    const sellerName = document.getElementById("sellerName").value;
    const productName = document.getElementById("productName").value;
    const description = document.getElementById("description").value;
    const price = document.getElementById("price").value;
    const contactNumber = document.getElementById("contactNumber").value;
    
    // Simulate form submission (replace with real submission logic)
    alert(`Thank you, ${sellerName}! Your donation for ${productName} has been received.`);
    
    // Optionally clear the form
    document.getElementById("donationForm").reset();
});
