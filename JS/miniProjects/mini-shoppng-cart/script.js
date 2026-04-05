class Cart {
  constructor() {
    this.items = [];
  }

  addItem(product) {
    const exiting = this.items.find((i) => i.id === product.id);
    if (exiting) {
      exiting.quantity += 1;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }
  }

  removeItem(id) {
    this.items = this.items.filter((i) => i.id !== id);
  }

  updateQuantity(id, qty) {
    if (qty <= 0) {
      this.removeItem(id);
    } else {
      const item = this.items.find((i) => i.id === id);
      item.quantity = qty;
    }
  }

  getTotal() {
    return this.items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }

  getItems() {
    return this.items;
  }
}

let products = [
  {
    id: 1,
    name: "Mouse",
    price: 29.99,
    image: "https://picsum.photos/id/1/60/60",
  },
  {
    id: 2,
    name: "Mouse",
    price: 39.99,
    image: "https://picsum.photos/id/2/60/60",
  },
  {
    id: 3,
    name: "Mouse",
    price: 49.99,
    image: "https://picsum.photos/id/3/60/60",
  },
  {
    id: 4,
    name: "Mouse",
    price: 59.99,
    image: "https://picsum.photos/id/4/60/60",
  },
];

let cart = new Cart();

const cartItems = document.getElementById("cart");
const productItems = document.getElementById("products");
const total = document.getElementById("cart-total");

function renderProducts() {
  productItems.innerHTML = "";
  products.forEach((p) => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `<img src= "${p.image}" /> <span>${p.name}</span> <span>${p.price}</span> <button onclick="addToCart${p.id}">Add to Cart </button>`;
    productItems.appendChild(div);
  });
}

renderProducts();
