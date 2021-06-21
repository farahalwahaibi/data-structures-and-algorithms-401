'use strict';

// require jest
const { expect, describe, it } = require( '@jest/globals' );
// require Insertion-Sort
const mergeSort = require( '../Merge-Sort.js' );


//start testing
describe( 'insertionSort', () => {

  it( 'should merge the array after sort it', () => {
    //arrange
    let arr =[8,4,23,42,16,15];
    //act
    let sortedMergedArr= mergeSort( arr );
    //assert
    expect( sortedMergedArr ).toEqual( [ 4, 8, 15, 16, 23, 42 ] );
  } );

  //for edge cases
  it( 'should return exception when the input is empty array', () => {
    //arrange
    let arr = [];
    //act
    let sortedMergedArr = mergeSort( arr );
    //assert
    expect( sortedMergedArr ).toEqual( 'Exception' );
  } );

} );
