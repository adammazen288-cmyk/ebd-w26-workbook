
import { findAllOrders, findOrderById } from "./orders-db.js";
import { seedForThisRepo } from "./lib/seed.js";
import { deriveSpec } from "./lib/spec.js";

const spec = deriveSpec(seedForThisRepo());

// 1. Return every order from the database.
export async function loadOrders() {
  return await findAllOrders();
}

// 2. Keep orders matching both your assigned city and status.
export function myOrders(orders) {
  return orders.filter(
    (order) => order.city === spec.city && order.status === spec.status
  );
}

// 3. Calculate the summary required by your generated task.
export function summarize(orders) {
  return spec.summary.compute(orders);
}

// 4. Find an order and return the required label.
// If the order doesn't exist, return your required error message.
export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return spec.label.build(order);
  } catch (error) {
    return spec.missing.build(id);
  }
}

// 5. Return JSON containing only your assigned fields.
export function toJsonLines(orders) {
  const selectedOrders = orders.map((order) => {
    const selected = {};

    for (const field of spec.fields) {
      selected[field] = order[field];
    }

    return selected;
  });

  return JSON.stringify(selectedOrders);
}