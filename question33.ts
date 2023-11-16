// make a numbers 1 through 9 in an array
const number: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop
for (let number of numbers) {
  // Use an if-else chain
  let ordinalEnding: string;

  if (number === 1) {
    ordinalEnding = 'st';
  } else if (number === 2) {
    ordinalEnding = 'nd';
  } else if (number === 3) {
    ordinalEnding = 'rd';
  } else {
    ordinalEnding = 'th';
  }

  // give result
  console.log(`${number}${ordinalEnding}`);
}