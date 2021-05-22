'use strict';

function insertShiftArray ( array,val ){
  let mid = Math.ceil( array.length / 2 );
  array.splice( mid,0,val );
  return array;
}

insertShiftArray( [1,2,3,4],6 );


