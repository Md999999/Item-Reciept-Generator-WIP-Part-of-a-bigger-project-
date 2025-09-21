// Exercise 1: Calculate total sales amount

// Defines an array `sales` with 3 objects. Each object has `item`, `quantity`, and `price`.
const sales = [
    { item: "Laptop", quantity: 2, price: 800 },
    { item: "Monitor", quantity: 1, price: 150 },
    { item: "Mouse", quantity: 4, price: 25 }
];

// Starts a function `calculateTotalSales` that accepts an array of sales.
function calculateTotalSales(sales) {
    let total = 0; // Initializes total to 0 before calculation.

    // Loops through all sales items one by one.
    for (let i = 0; i < sales.length; i++) {
        // Multiplies quantity × price for each item and adds to total.
        total += sales[i].quantity * sales[i].price;
    }

    // Returns the final calculated total.
    return total;
}

// Prints the calculated sales total into the console.
console.log("Total Sales Amount:", calculateTotalSales(sales));


//Exercise 2: Generate an order receipt

// Defines an array of coffee orders with item name, quantity, and price.
const orders = [
    { item: "Espresso", quantity: 2, price: 3.5 },
    { item: "Latte", quantity: 3, price: 4.0 },
    { item: "Cappuccino", quantity: 1, price: 4.5 }
];

// Defines a function `generateReceipt` to print a receipt.
function generateReceipt(orders) {
    let grandTotal = 0; // Holds the overall total of all orders.
    console.log("Receipt:"); // Prints the header
    console.log("----------------------"); // Prints a separator

    // Loops through each order in the array.
    for (let i = 0; i < orders.length; i++) {
        // Calculates the total cost for this item type.
        const itemTotal = orders[i].quantity * orders[i].price;

        // Adds this item’s cost to the running grand total.
        grandTotal += itemTotal;

        // Prints details: item name, quantity, price per unit, and total for that item.
        console.log(`${orders[i].item} - Quantity: ${orders[i].quantity}, Price: $${orders[i].price}, Total: $${itemTotal}`);
    }

    // Prints a footer line.
    console.log("----------------------");
    // Prints the grand total of all items.
    console.log(`Grand Total: $${grandTotal}`);
}

// Calls the function to generate and display the receipt.
generateReceipt(orders);


// Exercise 3: Validate passwords

// List of sample passwords that will be tested.
const passwords = ["Password123", "short", "ValidPass123", "too_long_password_example", "12345"];

// Defines a function `validatePasswords` that checks each password.
function validatePasswords(passwords) {
    // Defines a regex pattern: only letters/numbers, 8–20 characters allowed.
    const regex = /^[a-zA-Z0-9]{8,20}$/;

    // Loops through all passwords in the array.
    for (let i = 0; i < passwords.length; i++) {
        // Checks if the current password matches the regex pattern.
        if (regex.test(passwords[i])) {
            // Prints valid if it matches.
            console.log(`${passwords[i]} is valid.`);
        } else {
            // Prints invalid if it doesn’t match.
            console.log(`${passwords[i]} is invalid.`);
        }
    }
}

// Calls the function to validate the list of passwords.
validatePasswords(passwords);


//Exercise 4: Track product stock levels

// Defines an array of products, each with a name and stock count.
const products = [
    { product: "Laptop", stock: 5 },
    { product: "Headphones", stock: 0 },
    { product: "Smartphone", stock: 3 }
];

// Defines a function `checkStockLevels` that checks each product.
function checkStockLevels(products) {
    // Loops through each product in the array.
    for (let i = 0; i < products.length; i++) {
        // If stock is greater than 0, print "In Stock".
        if (products[i].stock > 0) {
            console.log(`${products[i].product} is In Stock.`);
        } 
        // Otherwise, print "Out of Stock".
        else {
            console.log(`${products[i].product} is Out of Stock.`);
        }
    }
}

// Calls the function to check and print stock statuses.
checkStockLevels(products);

