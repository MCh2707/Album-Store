// Cart Elements
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

// Open Cart
cartIcon.onclick = () => {
    cart.classList.add("cart-active");
};

// Close Cart
closeCart.onclick = () => {
    cart.classList.remove("cart-active");
};

// Cart Working JS
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

// Ready Function
function ready() {
    // Remove Items From Cart
    var removeCartButtons = document.getElementsByClassName('cart-remove');
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }

    // Add Event Listener for Quantity Change
    var quantityInputs = document.getElementsByClassName('cart-quantity');
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', validateQuantity);
    }

    // Add to Cart
    var addCartButtons = document.getElementsByClassName('add-cart');
    for (var i = 0; i < addCartButtons.length; i++) {
        var button = addCartButtons[i];
        button.addEventListener('click', addCartClicked);
    }

    // Initial Update Total
    updateTotal();
}

// Remove Items From Cart
function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal(); // Update total after removing an item
}

// Validate Quantity
function validateQuantity(event) {
    var input = event.target;
    if (input.value < 0) {
        input.value = 0;
    }
    updateTotal(); // Update total after changing quantity
}

// Add to Cart
function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;

    addProductToCart(title, price, productImg);
    updateTotal();
}

function addProductToCart(title, price, productImg) {
    var cartItems = document.getElementsByClassName('cart-content')[0];
    var cartItemsNames = cartItems.getElementsByClassName('cart-product-title');

    // Check if item already exists
    for (var i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerText === title) {
            // If item exists, increase quantity
            var quantityElement = cartItems.getElementsByClassName('cart-quantity')[i];
            quantityElement.value = parseInt(quantityElement.value) + 1;
            updateTotal(); // Update total when quantity is increased
            return; // Exit the function to prevent adding a duplicate
        }
    }

    // Create new cart item if it doesn't exist
    var cartShopBox = document.createElement('div');
    cartShopBox.classList.add('cart-box');

    var cartBoxContent = `
        <img src="${productImg}" alt="" class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity" min="0">
        </div>
        <i class='bx bxs-trash-alt cart-remove'></i>
    `;

    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
    cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', validateQuantity);
}

// Update Total
function updateTotal() {
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var total = 0;

    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = parseFloat(quantityElement.value);
        total += (price * quantity);
    }

    document.getElementsByClassName('total-price')[0].innerText = "$" + total.toFixed(2);
}

document.addEventListener('DOMContentLoaded', () => {
    // Cart Elements
    let cartIcon = document.querySelector("#cart-icon");
    let cart = document.querySelector(".cart");
    let closeCart = document.querySelector("#close-cart");

    // Open Cart
    cartIcon.onclick = () => {
        cart.classList.add("cart-active");
    };

    // Close Cart
    closeCart.onclick = () => {
        cart.classList.remove("cart-active");
    };

    ready();
});

// Ready Function
function ready() {
    // Remove Items From Cart
    var removeCartButtons = document.getElementsByClassName('cart-remove');
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }

    // Add Event Listener for Quantity Change
    var quantityInputs = document.getElementsByClassName('cart-quantity');
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', validateQuantity);
    }

    // Add to Cart
    var addCartButtons = document.getElementsByClassName('add-cart');
    for (var i = 0; i < addCartButtons.length; i++) {
        var button = addCartButtons[i];
        button.addEventListener('click', addCartClicked);
    }

    // Add Event Listener for Buy Button
    var buyButton = document.querySelector('.btn-buy');
    buyButton.addEventListener('click', buyNowClicked);
}

// Remove Items From Cart
function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal(); // Update total after removing an item
}

// Validate Quantity
function validateQuantity(event) {
    var input = event.target;
    if (input.value < 0) {
        input.value = 0;
    }
    updateTotal(); // Update total after changing quantity
}

// Add to Cart
function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;

    addProductToCart(title, price, productImg);
    updateTotal();
}

function addProductToCart(title, price, productImg) {
    var cartItems = document.getElementsByClassName('cart-content')[0];
    var cartItemsNames = cartItems.getElementsByClassName('cart-product-title');

    // Check if item already exists
    for (var i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerText === title) {
            // If item exists, increase quantity
            var quantityElement = cartItems.getElementsByClassName('cart-quantity')[i];
            quantityElement.value = parseInt(quantityElement.value) + 1;
            updateTotal(); // Update total when quantity is increased
            return; // Exit the function to prevent adding a duplicate
        }
    }

    // Create new cart item if it doesn't exist
    var cartShopBox = document.createElement('div');
    cartShopBox.classList.add('cart-box');

    var cartBoxContent = `
        <img src="${productImg}" alt="" class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity" min="0">
        </div>
        <i class='bx bxs-trash-alt cart-remove'></i>
    `;

    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
    cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', validateQuantity);
}

// Buy Now Clicked
function buyNowClicked() {
    var soldMessage = document.getElementById('sold-message');
    soldMessage.style.display = 'block';

    // Optionally, you could clear the cart after purchase
    var cartContent = document.getElementsByClassName('cart-content')[0];
    while (cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild);
    }

    updateTotal(); // Update total to zero
}

// Update Total
function updateTotal() {
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var total = 0;

    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = parseFloat(quantityElement.value);
        total += (price * quantity);
    }

    document.getElementsByClassName('total-price')[0].innerText = "$" + total.toFixed(2);
}
