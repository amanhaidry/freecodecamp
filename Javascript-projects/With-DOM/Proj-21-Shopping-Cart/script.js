const cartContainer = document.getElementById("cart-container");
const productsContainer = document.getElementById("products-container");
const dessertCards = document.getElementById("dessert-card-container");
const cartBtn = document.getElementById("cart-btn");
const clearCartBtn = document.getElementById("clear-cart-btn");
const totalNumberOfItems = document.getElementById("total-items");
const cartSubTotal = document.getElementById("subtotal");
const cartTaxes = document.getElementById("taxes");
const cartTotal = document.getElementById("total");
const showHideCartSpan = document.getElementById("show-hide-cart");
const cartCountBadge = document.getElementById("cart-count");

let isCartShowing = false;

const products = [
  {
    id: 1,
    name: "Vanilla Cupcakes (6 Pack)",
    price: 12.99,
    category: "Cupcake",
    image:
      "https://www.allrecipes.com/thmb/i9KCEbxUGQ1Sa4F7Gts7SGBOpoM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/157877-vanilla-cupcakes-ddmfs-4X3-0397-59653731be1d4769969698e427d7f5bc.jpg",
  },
  {
    id: 2,
    name: "French Macaron",
    price: 3.99,
    category: "Macaron",
    image:
      "https://www.jordanwinery.com/wp-content/uploads/2020/04/French-Macaron-Cookie-Recipe-WebHero-6435.jpg",
  },
  {
    id: 3,
    name: "Pumpkin Cupcake",
    price: 3.99,
    category: "Cupcake",
    image:
      "https://www.allrecipes.com/thmb/7UTUkXeMt68iRqCEk42xLC-JRtI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ar-153245-pumpkin-spice-cupcakes-ddmfs-hero_7672-b7e20b1e1dfb4462b10b18fb79ccb6fe.jpg",
  },
  {
    id: 4,
    name: "Chocolate Cupcake",
    price: 5.99,
    category: "Cupcake",
    image:
      "https://www.lifeloveandsugar.com/wp-content/uploads/2023/06/Chocolate-Cupcakes-Recipe3.jpg",
  },
  {
    id: 5,
    name: "Chocolate Pretzels (4 Pack)",
    price: 10.99,
    category: "Pretzel",
    image:
      "https://static.toiimg.com/thumb/84885293.cms?imgsize=299702&width=800&height=800",
  },
  {
    id: 6,
    name: "Strawberry Ice Cream",
    price: 2.99,
    category: "Ice Cream",
    image:
      "https://www.recipetineats.com/tachyon/2018/07/Strawberry-Ice-Cream-No-Churn_3b.jpg",
  },
  {
    id: 7,
    name: "Chocolate Macarons (4 Pack)",
    price: 9.99,
    category: "Macaron",
    image:
      "https://sugarspunrun.com/wp-content/uploads/2023/03/Chocolate-Macarons-Recipe-1-of-1.jpg",
  },
  {
    id: 8,
    name: "Strawberry Pretzel",
    price: 4.99,
    category: "Pretzel",
    image:
      "https://www.seededatthetable.com/wp-content/uploads/2013/03/Strawberry-Pretzel-Dessert-2.jpg",
  },
  {
    id: 9,
    name: "Butter Pecan Ice Cream",
    price: 2.99,
    category: "Ice Cream",
    image:
      "https://www.simplyrecipes.com/thmb/7n24DH-_DJs7khvFxY4Pb1Lsgjg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Butter-Pecan-Ice-Cream-LEAD-5-a0fd1edc9c7f47f1b340699ad4cb0365.jpg",
  },
  {
    id: 10,
    name: "Rocky Road Ice Cream",
    price: 2.99,
    category: "Ice Cream",
    image:
      "https://www.browneyedbaker.com/wp-content/uploads/2021/05/rocky-road-ice-cream-13-square.jpg",
  },
  {
    id: 11,
    name: "Vanilla Macarons (5 Pack)",
    price: 11.99,
    category: "Macaron",
    image:
      "https://floralapron.com/wp-content/uploads/2024/08/Vanilla-Macarons-on-Cake-Stand-scaled.jpg",
  },
  {
    id: 12,
    name: "Lemon Cupcakes (4 Pack)",
    price: 12.99,
    category: "Cupcake",
    image:
      "https://www.rainbownourishments.com/wp-content/uploads/2023/03/vegan-lemon-cupcakes-1..jpg",
  },
];

products.forEach(({ name, id, price, category, image }) => {
  dessertCards.innerHTML += `
      <div class="dessert-card">
        <img src="${image}" alt="${name}" class="dessert-image" />
        <h2>${name}</h2>
        <p class="product-category">${category}</p>
        <p class="dessert-price">$${price}</p>
        <button 
          id="${id}" 
          class="btn add-to-cart-btn">Add to Cart
        </button>
      </div>
    `;
});

class ShoppingCart {
  constructor() {
    this.items = [];
    this.total = 0;
    this.taxRate = 8.25;
  }

  addItem(id, products) {
    const product = products.find((item) => item.id === id);
    const { name, price } = product;
    this.items.push(product);

    const totalCountPerProduct = {};
    this.items.forEach((dessert) => {
      totalCountPerProduct[dessert.id] =
        (totalCountPerProduct[dessert.id] || 0) + 1;
    });

    const currentProductCount = totalCountPerProduct[product.id];
    const currentProductCountSpan = document.getElementById(
      `product-count-for-id${id}`,
    );

    currentProductCount > 1
      ? (currentProductCountSpan.textContent = `${currentProductCount}x`)
      : (productsContainer.innerHTML += `
      <div id="dessert${id}" class="product">
        <p>
          <span class="product-count" id="product-count-for-id${id}">${currentProductCount}x</span>${name}
        </p>
        <p>${price}</p>
      </div>
      `);
  }

  getCounts() {
    return this.items.length;
  }

  clearCart() {
    if (!this.items.length) {
      alert("Your shopping cart is already empty");
      return;
    }

    const isCartCleared = confirm(
      "Are you sure you want to clear all items from your shopping cart?",
    );

    if (isCartCleared) {
      this.items = [];
      this.total = 0;
      productsContainer.innerHTML = "";
      totalNumberOfItems.textContent = 0;
      cartSubTotal.textContent = "$0";
      cartTaxes.textContent = "$0";
      cartTotal.textContent = "$0";
      cartCountBadge.textContent = 0;
    }
  }

  calculateTaxes(amount) {
    return parseFloat(((this.taxRate / 100) * amount).toFixed(2));
  }

  calculateTotal() {
    const subTotal = this.items.reduce((total, item) => total + item.price, 0);
    const tax = this.calculateTaxes(subTotal);
    this.total = subTotal + tax;
    cartSubTotal.textContent = `$${subTotal.toFixed(2)}`;
    cartTaxes.textContent = `$${tax.toFixed(2)}`;
    cartTotal.textContent = `$${this.total.toFixed(2)}`;
    return this.total;
  }
}

const cart = new ShoppingCart();
const addToCartBtns = document.getElementsByClassName("add-to-cart-btn");

[...addToCartBtns].forEach((btn) => {
  btn.addEventListener("click", (event) => {
    cart.addItem(Number(event.target.id), products);
    totalNumberOfItems.textContent = cart.getCounts();
    cartCountBadge.textContent = cart.getCounts();
    cart.calculateTotal();
  });
});

cartBtn.addEventListener("click", () => {
  isCartShowing = !isCartShowing;
  showHideCartSpan.textContent = isCartShowing ? "Hide" : "Show";
  cartContainer.style.display = isCartShowing ? "block" : "none";
});

clearCartBtn.addEventListener("click", cart.clearCart.bind(cart));
