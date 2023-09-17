// Mubashir created an infinite loop! Help him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do.

// printArray(1) ➞ [1]

// printArray(3) ➞ [1, 2, 3]

// printArray(6) ➞ [1, 2, 3, 4, 5, 6]

function printArray(number) {
  var newArray = [];

  for(var i = 1; i <= number;) {
    newArray.push(i);
  }

  return newArray;
}
