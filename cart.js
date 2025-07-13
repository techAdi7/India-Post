document.addEventListener('DOMContentLoaded', () => {
    const cartItemsList = document.getElementById('cart-items-list');
    const cartTotalAmount = document.getElementById('cart-total-amount');
    
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let total = 0;

    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.name} - ₹${item.price} x ${item.quantity}`;
        cartItemsList.appendChild(li);
        total += item.price * item.quantity;
    });

    cartTotalAmount.innerText = total;
});
