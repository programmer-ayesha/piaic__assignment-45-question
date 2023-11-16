
function makeShirt(size: string = "Large", message: string = "I love typescript"): void {
    console.log(`Shirt size: ${size}`);
    console.log(`Message: ${message}`);
    console.log("Summary: The shirt is size " + size + " and has the message: '" + message + "'.");
  }
  

  makeShirt();
  

  makeShirt("Medium");
  

  makeShirt("Small", "this is greate thing!");