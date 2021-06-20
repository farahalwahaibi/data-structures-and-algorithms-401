'use strict';

//InsertionSort(int[] arr)
const insertionSort = ( arr ) => {
  //FOR i = 1 to arr.length
  for ( let i = 1; i < arr.length; i++ ) {
    //int j <-- i - 1
    let j = i - 1;
    //int temp <-- arr[i]
    let temp = arr[i];
    //WHILE j >= 0 AND temp < arr[j]
    while ( j >= 0 && temp < arr[j] ) {
      //arr[j + 1] <-- arr[j]
      arr[j + 1] = arr[j];
      //j <-- j - 1
      j = j - 1;
    }
    //arr[j + 1] <-- temp
    arr[j + 1] = temp;
  }
  return arr;
};

//calling the function
insertionSort( [8,4,23,42,16,15] );

module.exports = insertionSort;