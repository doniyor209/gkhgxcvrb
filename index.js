const productList = document.getElementById("productList");
const totalPriceEl = document.getElementById("totalPrice");
const boughtItemsEl = document.getElementById("boughtItems");
let totalPrice = 0;

async function getProducts() {
  await fetch("https://fakestoreapi.com/products?limit=10")
    .then((res) => res.json())
    .then((data) => renderProducts(data))
    .catch((err) => console.error("Xatolik:", err));
}

function renderProducts(data) {
  data.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product";
    card.innerHTML = `
          <img src="${product.image}" alt="${product.title}">
          <h4 title="${product.title}" class="div">${product.title}</h4>
          <p><strong>$${product.price}</strong></p>
          <button>Sotib olish</button>
      `;

    const btn = card.querySelector("button");
    btn.addEventListener("click", () => {
      totalPrice += product.price;
      totalPriceEl.textContent = `Umumiy narx: $${totalPrice.toFixed(3)}`;
      const li = document.createElement("li");
      li.textContent = product.title;
      boughtItemsEl.appendChild(li);
    });
    productList.appendChild(card);
  });
}
getProducts();
