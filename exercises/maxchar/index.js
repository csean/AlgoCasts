// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let count = Object();
  let max = 0;
  for (var char of str) {
    count[char] = count[char] + 1 || 1;
    if (count[char] > max) {
      count[max] = char;
    }
  }
  return count[max];
}

module.exports = maxChar;
