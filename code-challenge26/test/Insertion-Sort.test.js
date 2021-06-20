'use strict';

// require jest
const { expect, describe, it } = require( '@jest/globals' );
// require Insertion-Sort
const insertionSort = require( '../Insertion-Sort.js' );


//start testing
describe( 'insertionSort', () => {

  it( 'should sort the insertion array', () => {
    //arrange
    let arr =[8,4,23,42,16,15];
    //act
    let sortedArr= insertionSort( arr );
    //assert
    expect( sortedArr ).toEqual( [ 4, 8, 15, 16, 23, 42 ] );
  } );

} );
