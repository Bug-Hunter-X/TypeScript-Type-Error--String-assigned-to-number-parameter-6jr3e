function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;

  if (isNaN(numA) || isNaN(numB)) {
    throw new Error('Invalid input: Both arguments must be numbers or parsable strings.');
  }

  return numA + numB;
}

const result = addSafe(5, "10"); // Correctly handles string input
const result2 = addSafe(5,10); // Correctly handles number input
console.log(result); // Output: 15
console.log(result2); //Output: 15
//const result2 = addSafe("hello", 10); // Throws an error because "hello" cannot be parsed to a number
