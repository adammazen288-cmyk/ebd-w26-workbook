
/**
 * The text of the page's main heading.
 * pageHeading() -> "My Campus Store"
 *
 * @returns {string}
 */
export function pageHeading() {
  const heading = document.querySelector("h1");
  return heading.textContent;
}

/**
 * How many product cards are on the page.
 * productCount() -> 5
 *
 * @returns {number}
 */
export function productCount() {
  const cards = document.querySelectorAll(".card");
  return cards.length;
}

/**
 * The name in every card, in the order they appear.
 *
 * @returns {string[]}
 */
export function productNames() {
  const cards = Array.from(document.querySelectorAll(".card"));

  return cards.map((card) => card.querySelector("h3").textContent);
}

/**
 * The price text shown on the card with that name.
 *
 * @param {string} name
 * @returns {string|null}
 */
export function priceOf(name) {
  const cards = Array.from(document.querySelectorAll(".card"));

  const card = cards.find(
    (card) => card.querySelector("h3").textContent === name
  );

  if (!card) {
    return null;
  }

  return card.querySelector(".price").textContent;
}

/**
 * Returns the names of all sold-out products.
 *
 * @returns {string[]}
 */
export function soldOutNames() {
  const cards = Array.from(document.querySelectorAll(".card"));

  return cards
    .filter((card) => card.classList.contains("sold-out"))
    .map((card) => card.querySelector("h3").textContent);
}
