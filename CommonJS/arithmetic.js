function add(x, y) {
  return x + y;
}

function div(x, y) {
  return x / y;
}

// module.exports.sub = function (x, y) { // we can omit module. here because it is passed as a property.
//   return x - y;
// };

//only one way of exporting is allowed, either at the last of the file or one by one export.

module.exports = {
  sum: add,
  div: div,
};

//the shorthand property is not going to work here:
// exports = {
//   sum: add,
//   div: div,
// };
