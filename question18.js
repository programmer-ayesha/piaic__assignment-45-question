var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//  world tower
var placesToVisit = ["malashiya", "Paris", "london", "united kingdom", "turky"];
// Print  original order
console.log("\nOriginal order:", placesToVisit);
//Print array in alphabetical order
console.log("Alphabetical order:", __spreadArray([], placesToVisit, true).sort());
// Show array original order
console.log("Original order:", placesToVisit);
// Print array in reverse alphabetical order
console.log("Reverse alphabetical order:", __spreadArray([], placesToVisit, true).sort().reverse());
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
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in reverse alphabetical order:", placesToVisit);
