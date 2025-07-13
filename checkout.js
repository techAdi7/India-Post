document.addEventListener('DOMContentLoaded', () => {
    const orderItemsList = document.getElementById('order-items-list');
    const orderTotalAmount = document.getElementById('order-total-amount');

    // Retrieve order items and total from localStorage
    const orderItems = JSON.parse(localStorage.getItem('orderItems')) || [];
    const orderTotal = localStorage.getItem('orderTotal') || 0;

    // Populate order summary
    orderItems.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.name} - ₹${item.price} x ${item.quantity}`;
        orderItemsList.appendChild(li);
    });

    orderTotalAmount.innerText = orderTotal;

    // Handle form submission
    const checkoutForm = document.getElementById('checkout-form');
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Order placed successfully!');
        localStorage.removeItem('orderItems');
        localStorage.removeItem('orderTotal');
        location.href = 'product_page.html'; // Redirect back to the product page after order placement
    });
});
