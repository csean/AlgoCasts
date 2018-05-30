// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, step = '') {
  const columns = n + n - 1;
  const mid = Math.floor(columns / 2);

  if (n === row) {
    return;
  }

  if (step.length === columns) {
    console.log(step);
    return pyramid(n, row + 1);
  }

  if (step.length <= mid + row && step.length >= mid - row) {
    step += '#';
  } else {
    step += ' ';
  }
  pyramid(n, row, step);
}

module.exports = pyramid;

// function pyramid(n) {
//   const columns = n + n - 1;
//   const mid = Math.floor(columns / 2);
//
//   for (let i = 0; i < n; i++) {
//     let step = '';
//
//     for (let j = 0; j < columns; j++) {
//       if (j <= mid + i && j >= mid - i) {
//         step += '#';
//       } else {
//         step += ' ';
//       }
//     }
//     console.log(step);
//   }
// }
