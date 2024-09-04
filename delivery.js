// Existing JavaScript code...

// Delivery Tracking Script
document.getElementById("trackingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const orderId = document.getElementById("orderId").value;
    
    // Simulate tracking lookup (replace with real tracking logic)
    const resultMessage = `Tracking information for Order ID: ${orderId}. Your order is in transit and will reach you soon.`;
    
    document.getElementById("trackingResult").textContent = resultMessage;
});
