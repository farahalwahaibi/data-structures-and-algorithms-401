'use strict';

const { expect, describe, it } = require( '@jest/globals' );

let reversedArr = ( arr =>{
  let newArr = [];

  for ( let i =arr.length; i >0 ; i-- ) {
    newArr.push( arr[i-1] );
  }
  return newArr;
} );

//testing
describe ( 'reversedArr',()=>{
  it ( 'should return reversed array',()=>{
    //arrange
    let arr = [1,2,3,4,5];
    //act
    //assert
    expect( reversedArr( arr ) ).toStrictEqual( [5,4,3,2,1] );
  } );
} );
