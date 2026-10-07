// 01-basics — your work goes in this file.
//
// The lesson is in example.js:  node 01-basics/example.js
// Check your work with:         npm test 01

export function describeValue(value) {
  return `${value} is a ${typeof value}`;
}

export function priceLabel(product, amount) {
  return `${product} costs ${amount} EGP`;
}

export function isExpensive(amount) {
  return amount > 100;
}

export function shippingCost(orderTotal) {
  if (orderTotal > 500) {
    return 0;
  }
  return 50;
}

export function stockLabel(count) {
  if (count === 0) {
    return "Out of stock";
  } else if (count < 10) {
    return "Low stock";
  } else {
    return "In stock";
  }
}