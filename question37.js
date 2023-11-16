function makeShirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love typescript"; }
    console.log("Shirt size: ".concat(size));
    console.log("Message: ".concat(message));
    console.log("Summary: The shirt is size " + size + " and has the message: '" + message + "'.");
}
makeShirt();
makeShirt("Medium");
makeShirt("Small", "this is greate thing!");
