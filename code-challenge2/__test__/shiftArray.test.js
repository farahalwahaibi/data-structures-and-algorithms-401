'use strict';

const { expect, describe, it } = require( '@jest/globals' );

function insertShiftArray ( array,val ){
  let mid = Math.ceil( array.length / 2 );
  array.splice( mid,0,val );
  return array;
}

//testing
describe ( 'insertShiftArray',()=>{
  it ( 'should return array with add new value in the middle',()=>{
    //arrange
    let arr = [1,2,3,4];
    let val = 6 ;
    //act
    //assert
    expect( insertShiftArray(arr,val) ).toStrictEqual( [1,2,6,3,4] );
  } );
} );

