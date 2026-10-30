import { items } from "./items.js";

const list = document.querySelector("#list");
const button = document.querySelector("#show-some");

export function renderItems(itemsToRender) {
  list.textContent = "";

  for (const item of itemsToRender) {
    const li = document.createElement("li");
    li.classList.add("tile");
    li.textContent = `${item.name} - ${item.price} EGP`;
    list.append(li);
  }
}

export function matching() {
  return items.filter((item) => item.category === "electronics");
}

export function start() {
  renderItems(items);

  button.addEventListener("click", () => {
    renderItems(matching());
  });
}