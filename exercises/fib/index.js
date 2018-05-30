// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n, h = {}) {
  if (n <= 1) {
    return n;
  }

  if (!h[n]) {
    h[n] = fib(n - 1, h) + fib(n - 2, h);
  }
  return h[n];
}

module.exports = fib;

// function fib(n) {
//   not good
//   let a = 0; let b = 1; let temp = 0;
//
//   for (let i = 0; i <= n; i++) {
//     console.log('here i am, foo');
//     temp = a;
//     a = b;
//     b += temp;
//   }
//
//   return b;
// }

// function fib(n, h = {}) {
//   const result = [0, 1];
//
//   for (let i = 2; i <= n; i++) {
//     result.push(result[i - 1] + result[i -2 ]);
//   }
//
//   return result[n];
// }
