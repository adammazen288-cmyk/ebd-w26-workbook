
/**
 * Adds one product card to the end of the list.
 *
 * @param {string} name
 * @param {number} price
 * @returns {void}
 */
export function addProduct(name, price) {
  const list = document.querySelector("#list");

  const card = document.createElement("li");
  card.classList.add("card");

  const heading = document.createElement("h3");
  heading.textContent = name;

  const priceTag = document.createElement("p");
  priceTag.classList.add("price");
  priceTag.textContent = `${price} EGP`;

  card.append(heading, priceTag);
  list.append(card);
}

/**
 * Removes the card with that name, if there is one.
 *
 * @param {string} name
 * @returns {void}
 */
export function removeProduct(name) {
  const cards = Array.from(document.querySelectorAll("#list .card"));

  const card = cards.find(
    (card) => card.querySelector("h3").textContent === name
  );

  if (card) {
    card.remove();
  }
}

/**
 * Marks the card with that name as sold out.
 *
 * @param {string} name
 * @returns {void}
 */
export function markSoldOut(name) {
  const cards = Array.from(document.querySelectorAll("#list .card"));

  const card = cards.find(
    (card) => card.querySelector("h3").textContent === name
  );

  if (card) {
    card.classList.add("sold-out");
  }
}

/**
 * Removes every product card from the list.
 *
 * @returns {void}
 */
export function clearProducts() {
  const cards = document.querySelectorAll("#list .card");

  for (const card of cards) {
    card.remove();
  }
}

/**
 * Connects the Add and Reset buttons to their actions.
 *
 * @returns {void}
 */
export function wireButtons() {
  document.querySelector("#add").addEventListener("click", () => {
    addProduct("Notebook", 45);
  });

  document.querySelector("#reset").addEventListener("click", () => {
    clearProducts();
  });
}
