// Array of sales items
const sales = [
  {item: "laptop", quantity: 2, price: 800},
  {item: "monitor", quantity: 1, price: 150},
  {item: "mouse", quantity: 4, price: 25}
];

// Calcualte the total sales 
function calculateTotalSales(sales) {
  let total = 0;
  for (let i = 0; i < sales.length; i++) {
      total += sales[i].quantity * sales[i].price;
  }
  return total;
}
console.log("Total Sales Amount:", calculateTotalSales(sales));

// Generate order receipt 
function generateReceipt(sales) {
  let receipt = "Order Receipt\n";
  receipt += "---------------------------------\n";
  sales.forEach(item => {
      receipt += `${item.quantity} x ${item.item} @ $${item.price} each\n`;
  });
  receipt += "---------------------------------\n";
  receipt += `Total: $${calculateTotalSales(sales)}\n`;
  return receipt;
}
console.log(generateReceipt(sales));

// Create an arrary for coffee items to buy, with item, quantity, and price
const coffeeItems = [
  {item: "Espresso", quantity: 2, price: 3.5},
  {item: "Latte", quantity: 1, price: 4.0},
  {item: "Cappuccino", quantity: 3, price: 3.0}
];
// Calculate the GrandTotal function for the coffee items order 
function generateReceipt(coffeeItems) {
  let grandTotal = 0;
  console.log("Receipt for Coffee Order:");
  console.log("---------------------------------");
  for (let i = 0; i < coffeeItems.length; i++) {
      const itemTotal = coffeeItems[i].quantity * coffeeItems[i].price;
      grandTotal += itemTotal;
      console.log(`${coffeeItems[i].quantity}  - Quantify: ${coffeeItems[i].quantity}, Price: $${coffeeItems[i].price}, Total: $${itemTotal}`);
  }
  console.log("---------------------------------");
  console.log(`Grand Total: $${grandTotal}`);
  }
}

generateReceipt(coffeeItems);

// Validate passwords
const passwords = ["Password123", "short", "ValidPass123", "too_long_password_example", "12345"];

// function to validate passwords 
function validatePassword(passwords) {
  const regex = /^[a-zA-Z0-9]{8,20}$/;
  for (let i = 0; i < passwords.length; i++) {
    if (regex.test(passwords[i])) {
      console.log(`${passwords[i]} is a valid password.`);
    } else {
      console.log(`${passwords[i]} is not a valid password. Try again.`);
    }
  }
}
validatePassword(passwords);

// Track Product Stock Levels
// an Array of objects for product as string and stock as integer for bike parts
const products = [
  {product: "Tire", stock: 50},
  {product: "Brake Pads", stock: 30},
  {product: "Chain", stock: 20},
  {product: "Handlebar", stock: 15},
  {product: "Seat", stock: 0}
];

// A message indictting if the product is in stock or not
function checkStock(products) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].stock > 0) {
      console.log(`${products[i].product} is in stock with ${products[i].stock} units available.`);
    } else {
      console.log(`${products[i].product} is out of stock.`);
    }
  }
}
checkStock(products);