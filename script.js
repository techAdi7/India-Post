// script.js

document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    const cartItems = [];
    const cartSummary = document.getElementById('cart-summary');
    const cartTotal = document.getElementById('cart-total');
    const cartItemsList = document.getElementById('cart-items');

    // Rating System
    stars.forEach(star => {
        star.addEventListener('click', () => {
            const value = star.getAttribute('data-value');
            stars.forEach(s => {
                s.classList.remove('selected');
                if (s.getAttribute('data-value') <= value) {
                    s.classList.add('selected');
                }
            });
        });
    });

    // Add to Cart Functionality
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const card = button.parentElement;
            const productName = card.querySelector('h3').innerText;
            const productPrice = parseInt(card.querySelector('p').innerText.replace('Price: ₹', ''));
            const productQuantity = parseInt(card.querySelector('.quantity').value);

            // Add product to cart array
            const product = { name: productName, price: productPrice, quantity: productQuantity };
            cartItems.push(product);

            // Update Cart Summary
            updateCartSummary();
        });
    });

    function updateCartSummary() {
        cartItemsList.innerHTML = ''; // Clear previous items
        let total = 0;

        cartItems.forEach(item => {
            const li = document.createElement('li');
            li.innerText = `${item.name} - ₹${item.price} x ${item.quantity}`;
            cartItemsList.appendChild(li);
            total += item.price * item.quantity;
        });

        cartTotal.innerText = total;
        cartSummary.style.display = cartItems.length > 0 ? 'block' : 'none';
    }
});
