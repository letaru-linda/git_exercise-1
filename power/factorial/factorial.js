const factorial = (number) => {
    if (number <= 1) {
      return 1;
    }
    return number * factorial(number - 1);
  };
  const firstTwentyNumber = (n) => {
    let i = 0;
    while (i < n) {
      if (i % 2 === 0) {
        return i;
      }
    }
  };