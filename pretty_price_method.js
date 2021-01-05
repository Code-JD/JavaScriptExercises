const prettyPrice = (grossPrice, numToFix) => {
    if (Number.isInteger(numToFix)) {
        numToFix = numToFix * 0.01;
    }
    return Math.floor(grossPrice) + numToFix;
  };
  
  console.log(prettyPrice(2.2, 0.95));
  console.log(prettyPrice(2.2, 95));
