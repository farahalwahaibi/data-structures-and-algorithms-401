'use strict';

// require jest
const { expect, describe, it } = require( '@jest/globals' );
// require Insertion-Sort
const quickSort = require( '../Quick-Sort.js' );


//start testing
describe( 'Quick-Sort', () => {

  it( 'should Quick Sort the array', () => {
    //arrange
    let arr =[8,4,23,42,16,15];
    //act
    let quickSortArr= quickSort( arr );
    //assert
    expect( quickSortArr ).toEqual( [ 4, 8, 15, 16, 23, 42 ] );
  } );

  //for edge cases
  it( 'should return exception when the input is empty array', () => {
    //arrange
    let arr = [];
    //act
    let quickSortArr = quickSort( arr );
    //assert
    expect( quickSortArr ).toEqual( 'Exception' );
  } );

} );
