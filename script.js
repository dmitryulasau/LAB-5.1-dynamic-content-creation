const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");
const addProductButton = document.getElementById("add-product");
const cart = document.getElementById("cart");
const totalPriceSpan = document.getElementById("total-price");
const tbody = document.getElementById("table-body");

let totalPrice = 0;

let products = [];

function renderCart() {
  tbody.innerHTML = "";

  products.forEach((product) => {
    // console.log(product.price);
    tbody.innerHTML += `
  <tr data-price=${product.price} data-id="${product.id}">
    <td class="align-middle">${product.name}</td>
    <td class="text-center align-middle">$${product.price}</td>
    <td class="text-center align-middle">${product.quantity}</td>
    <td class="text-center align-middle">$${product.quantity * product.price}</td>
    <td><button class="btn btn-warning delete-product">Delete</button></td>
  </tr>
    `;
  });
}

function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}

// DELETE PRODUCT
cart.addEventListener("click", (e) => {
  if (e.target.matches(".delete-product")) {
    const productRow = e.target.closest("tr");
    // console.log(product);
    const price = parseFloat(productRow.dataset.price);
    console.log(productRow.dataset.price);

    const id = Number(productRow.dataset.id);
    const product = products.find((product) => product.id === id);
    updateTotalPrice(-product.price * product.quantity);

    products = products.filter((product) => product.id !== id);
    productRow.remove();
  }
});

// ADD PRODUCT
addProductButton.addEventListener("click", (e) => {
  const prouctInput = productNameInput.value.trim();
  const productPrice = parseFloat(productPriceInput.value);

  if (prouctInput === "" || isNaN(productPrice) || productPrice <= 0) {
    return;
  }

  const productName = prouctInput[0].toUpperCase() + prouctInput.slice(1);

  const existingProduct = products.find((product) => product.name === productName);

  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    products.push({ id: Date.now(), name: productName, price: productPrice, quantity: 1 });
  }

  renderCart();
  updateTotalPrice(productPrice);

  productNameInput.value = "";
  productPriceInput.value = "";
  productNameInput.focus();
});
