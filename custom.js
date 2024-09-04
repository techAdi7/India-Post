document.getElementById('custom-product-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Gather form data
    const productName = document.getElementById('product-name').value;
    const customizationDetails = document.getElementById('customization-details').value;
    const deliveryAddress = document.getElementById('delivery-address').value;
    const deliveryTime = document.getElementById('delivery-time').value;
    const purchaseType = document.querySelector('input[name="purchase-type"]:checked').value;

    // You can now use the collected data to send to a server, show a confirmation, etc.
    // Here, we'll just log the information to the console for demonstration purposes.
    console.log("Product Name:", productName);
    console.log("Customization Details:", customizationDetails);
    console.log("Delivery Address:", deliveryAddress);
    console.log("Delivery Time:", deliveryTime);
    console.log("Purchase Type:", purchaseType);

    alert("Form submitted successfully!");

    // Reset the form
    document.getElementById('custom-product-form').reset();
});
