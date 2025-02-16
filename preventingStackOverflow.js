function factorial(n) {
  if (typeof n !== "number" || n < 0) {
    console.log("Invalid input");
    return;
  }
  
  if (n === 0) return 1;

  return n * factorial(n - 1);
}

console.log(factorial(5));  // 120
console.log(factorial(0));  // 1
console.log(factorial(-3)); // Invalid input
console.log(factorial("a")); // Invalid input
