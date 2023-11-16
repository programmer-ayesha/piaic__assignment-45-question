//  world tower
const placesToVisit: string[] = ["malashiya", "Paris", "london", "united kingdom", "turky"];

// Print  original order
console.log("\nOriginal order:", placesToVisit);

//Print array in alphabetical order
console.log("Alphabetical order:", [...placesToVisit].sort());

// Show array original order
console.log("Original order:", placesToVisit);

// Print array in reverse alphabetical order
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

//Show that my array is still in its original order by printing it again.
console.log("Original order:", placesToVisit);

//Reverse the order of my  list. Print the array to show that its order has changed.
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);

//Reverse the order of my list again..
placesToVisit.reverse();
console.log("Original order:", placesToVisit);

//Sort my array stored in alphabetical order. 
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);

// reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placesToVisit);








