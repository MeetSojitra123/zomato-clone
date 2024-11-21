let cart = [];
let totalAmount = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const productName = product.querySelector('h3').innerText;
        const productPrice = parseFloat(product.getAttribute('data-price'));

        cart.push({ name: productName, price: productPrice });
        totalAmount += productPrice;

        updateCart();
    });
});

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });
    document.getElementById('total-amount').innerText = totalAmount.toFixed(2);
}

document.getElementById('address-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Order placed! Total: $' + totalAmount.toFixed(2));
    // Reset cart and total
    cart = [];
    totalAmount = 0;
    updateCart();
});