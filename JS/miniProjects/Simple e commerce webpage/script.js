document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Product 1", price: 29.99 },
    { id: 2, name: "Product 2", price: 49.997 },
    { id: 3, name: "Product 3", price: 69.998 },
    { id: 4, name: "Product 4", price: 80.998 },
  ];

  const cart = [];

  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessege = document.getElementById("empty-cart");
  const cartTotalMessege = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkoutBtn = document.getElementById("checkout-btn");

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
    <span>${product.name} - $${product.price.toFixed(2)}</span>
    <button  data-id="${product.id}">Add to cart</button>
    `;
    productList.appendChild(productDiv);
  });
  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productID = parseInt(e.target.getAttribute("data-id"));
      const product = products.find((p) => p.id === productID);
      addTOCart(product);
    }
  });

  function addTOCart(product) {
    cart.push(product);
    renderCart();
  }

  function renderCart() {
    cartItems.innerHTML = "";
    let totalPrice = 0;
    if (cart.length > 0) {
      emptyCartMessege.classList.add("hidden");
      cartTotalMessege.classList.remove("hidden");
      cart.forEach((item, index) => {
        totalPrice += item.price;
        let cartItem = document.createElement("div");
        cartItem.innerHTML = `
    ${item.name} -$${item.price.toFixed(2)}`;
        cartItems.appendChild(cartItem);
        totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`;
      });
    } else {
      emptyCartMessege.classList.remove("hidden");
      totalPriceDisplay.textContent = `$0.00`;
    }
  }

  checkoutBtn.addEventListener("click", () => {
    cart.length = 0;
    alert("Checkout successfully");
    renderCart();
  });
});
