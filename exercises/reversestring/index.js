// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // return str.split('').reverse().join('');
  var reverse = []
  var l = str.length
  str.split('').forEach(function(e){
    reverse[l - 1] = e;
    l--;
  });
  return reverse.join('');
}

module.exports = reverse;
