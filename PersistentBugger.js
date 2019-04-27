/* Problem: 
    Write a function, persistence, that takes in a positive 
    parameter num and returns its multiplicative persistence,
    which is the number of times you must multiply the digits 
    in num until you reach a single digit.
*/

// Solution

function persistence(num) {
  let numArray = num.toString().split("");
  let count = 0;

  while (numArray.length > 1) {
    let res = 1;
    numArray.map(x => {
      res = res * x;
    });
    numArray = res.toString().split("");
    count++;
  }
  return count;
}
