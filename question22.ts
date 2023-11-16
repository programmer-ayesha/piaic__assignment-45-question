// Define numbers array
const numbers: number[] = [1, 2, 3, 4, 5];

// (intentional error)
const invalidIndex = 10;

// the valid range before accessing the element
if (invalidIndex >= 0 && invalidIndex < numbers.length) {
  console.log(`Accessing element at index ${invalidIndex}: ${numbers[invalidIndex]}`);
} else {
  console.log(`Invalid index ${invalidIndex}. Please provide a valid index.`);
}
