function orderSandwich(...items: string[]): void {
    console.log("Sandwich :");
    if (items.length === 0) {
      console.log("You've received a sandwich, but it's empty. .");
    } else {
      console.log("Items: " + items.join(", "));
      console.log("Enjoy your sandwich!");
    }
    console.log(); 
  }
  

  orderSandwich("Zesty Zingwich", "ByteBite", "Lettuce", "SwiftStack");
  orderSandwich("BiteBlitz", "Snapwich", "QuickQuench");
  orderSandwich();