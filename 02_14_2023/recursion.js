const powerCallCounter = (baseNum, exponent, calls = 1) => {
  // base case
  if (exponent === 0) {
    console.log("Executing base case. Total calls: ", calls);

    return 1;
  } else {
    // recursive step / case
    console.log("Executing recursive case. Call number: ", calls);

    return baseNum * powerCallCounter(baseNum, exponent - 1, calls + 1);
  }
};

powerCallCounter(4, 3);
