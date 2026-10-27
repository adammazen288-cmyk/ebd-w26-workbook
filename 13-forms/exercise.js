const form = document.querySelector("#product-form");
const nameInput = document.querySelector("#name");
const priceInput = document.querySelector("#price");
const errorLine = document.querySelector("#error");
const list = document.querySelector("#list");

const products = [];

export function readForm() {
  const name = nameInput.value.trim();
  const price = Number(priceInput.value || 0);

  return { name, price };
}

export function clearForm() {
  nameInput.value = "";
  priceInput.value = "";
}

export function renderList(items) {
  list.textContent = "";

  for (const item of items) {
    const card = document.createElement("li");
    card.classList.add("card");

    const title = document.createElement("h3");
    title.textContent = item.name;

    const price = document.createElement("p");
    price.classList.add("price");
    price.textContent = `${item.price} EGP`;

    card.append(title, price);
    list.append(card);
  }
}

export function wireForm() {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const { name, price } = readForm();

    if (!name) {
      errorLine.textContent = "Give the product a name.";
      return;
    }

    if (!priceInput.value.trim() || !Number.isFinite(price) || price <= 0) {
      errorLine.textContent = "Give the product a price.";
      return;
    }

    errorLine.textContent = "";
    products.push({ name, price });
    renderList(products);
    clearForm();
    nameInput.focus();
  });
}