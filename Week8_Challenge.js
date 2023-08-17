// Create a function that returns true if the first array can be nested inside the second and false otherwise.

// arr1 can be nested inside arr2 if:

// 1. arr1's min is greater than arr2's min.
// 2.arr1's max is less than arr2's max.

function canNest(arr1, arr2) {
	let arr1Min = Math.min(...arr1), arr1Max = Math.max(...arr1), arr2Min = Math.min(...arr2), arr2Max = Math.max(...arr2);
  
  if (arr1Min > arr2Min && arr1Max < arr2Max) {
    return true;
  } else {
    return false;
  }
}
