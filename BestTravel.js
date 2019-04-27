function chooseBestSum(t, k, ls) {
  let resultSum = 0;
  var Util = function() {};

  // Helper function to get all possible combinations
  Util.getCombinations = function(array, size, start, initialStuff, output) {
    if (initialStuff.length >= size) {
      output.push(initialStuff);
    } else {
      var i;
      for (i = start; i < array.length; ++i) {
        Util.getCombinations(
          array,
          size,
          i + 1,
          initialStuff.concat(array[i]),
          output
        );
      }
    }
  };

  Util.getAllPossibleCombinations = function(array, size, output) {
    Util.getCombinations(array, size, 0, [], output);
  };

  let possibleCombinations = [];
  Util.getAllPossibleCombinations(ls, k, possibleCombinations);

  possibleCombinations.map(combination => {
    let combinationSum = combination.reduce(
      (total, distance) => total + distance
    );
    if (combinationSum > resultSum && combinationSum <= t) {
      resultSum = combinationSum;
    }
  });

  if (resultSum == 0) {
    return null;
  }
  return resultSum;
}
