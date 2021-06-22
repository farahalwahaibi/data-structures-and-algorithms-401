'use strict';

// ALGORITHM QuickSort(arr, left, right)
function quickSort ( arr,left=0,right=arr.length-1 ){
  //for edge cases
  if ( arr.length===0 ) {
    return 'Exception';
  }
  // if left < right
  if ( left < right ){
    // Partition the array by setting the position of the pivot value
    // DEFINE position <-- Partition(arr, left, right)
    let position = partition( arr,left,right );
    // Sort the left
    // QuickSort(arr, left, position - 1)
    quickSort( arr,left,position-1 );
    // Sort the right
    // QuickSort(arr, position + 1, right)
    quickSort( arr,position+1,right );
  }
  return arr ;
}

// ALGORITHM Partition(arr, left, right)
function partition( arr,left,right ){
  // set a pivot value as a point of reference
  // DEFINE pivot <-- arr[right]
  let pivot = arr[right];
  // create a variable to track the largest index of numbers lower than the defined pivot
  // DEFINE low <-- left - 1
  let low = left -1 ;
  // for i <- left to right do
  for ( let i =left; i<right;i++ ){
    // if arr[i] <= pivot
    if ( arr[i]<= pivot ){
      low++;
      // Swap(arr, i, low)
      swap( arr, i, low );
    }
  }
  // place the value of the pivot location in the middle.
  // all numbers smaller than the pivot are on the left, larger on the right.
  //  Swap(arr, right, low + 1)
  swap( arr,right, low+1 );
  // return the pivot index point
  return low + 1;
}

// ALGORITHM Swap(arr, i, low)
function swap( arr,i,low ){
  // DEFINE temp;
  let temp;
  // temp <-- arr[i]
  temp= arr[i];
  // arr[i] <-- arr[low]
  arr[i] = arr[low];
  // arr[low] <-- temp
  arr[low] = temp;
}

// console.log( quickSort( [8,4,23,42,16,15] ) );


module.exports = quickSort;
