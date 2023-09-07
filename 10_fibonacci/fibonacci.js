const fibonacci = function (position) {
  if (position <= 0) return "OOPS";

  let sequence = [1, 1];
  for (let i = 2; i < position; ++i) {
    const oldValue = sequence[1];
    sequence[1] += sequence[0];
    sequence[0] = oldValue;
  }

  return sequence[1];
};

// Do not edit below this line
module.exports = fibonacci;
