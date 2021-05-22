'use strict';

let reversedArr = ( arr =>{
  let newArr = [];

  for ( let i =arr.length; i >0 ; i-- ) {
    newArr.push( arr[i-1] );
  }
  return newArr;
} );

reversedArr( [1,2,3,4,5,6] );


