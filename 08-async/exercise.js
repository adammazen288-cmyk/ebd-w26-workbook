import { findProduct, findAllProducts } from "./fake-db.js";

export async function productName(id) {
  const product = await findProduct(id);
  return product.name;
}

export async function priceLabel(id) {
  const product = await findProduct(id);
  return product.name + " costs " + product.price + " EGP";
}

export async function safeProductName(id) {
  try {
    const product = await findProduct(id);
    return product.name;
  } catch (error) {
    return "Not found";
  }
}

export async function namesInStock() {
  const products = await findAllProducts();

  return products
    .filter((product) => product.inStock)
    .map((product) => product.name);
}