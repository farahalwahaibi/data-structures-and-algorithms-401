'use strict';

let sortedArray =[4, 8, 15, 16, 23, 42];

function BinarySearch ( sortedArray,searchKey ){
  let start = 0;
  let end = sortedArray.length -1 ;

  while( start<=end ){
    let i = Math.floor( ( start+end )/2 );

    if( sortedArray[i]===searchKey ){
      return i;
    }
    else if( sortedArray[i]<searchKey ){
      start=i+1;
    }
    else {
      end = i -1 ;
    }
  }
  return -1 ;
}

BinarySearch( sortedArray, 15 );
