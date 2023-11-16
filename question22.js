// Define numbers array
var numbers = [1, 2, 3, 4, 5];
// (intentional error)
var invalidIndex = 10;
// the valid range before accessing the element
if (invalidIndex >= 0 && invalidIndex < numbers.length) {
    console.log("Accessing element at index ".concat(invalidIndex, ": ").concat(numbers[invalidIndex]));
}
else {
    console.log("Invalid index ".concat(invalidIndex, ". Please provide a valid index."));
}
