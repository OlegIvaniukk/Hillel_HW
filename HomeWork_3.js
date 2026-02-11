function pow(x, y) {
  if (y === 0) return 1;

  let isNegative = false;
  if (y < 0) {
    isNegative = true;
    y = -y; 
  }

  let result = 1;

  for (let i = 0; i < y; i++) {
    result *= x;
  }

  if (isNegative) {
    result = 1 / result;
  }

  return result;
}

console.log(pow(5, 5))