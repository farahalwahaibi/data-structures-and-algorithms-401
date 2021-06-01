'use strict';

// require jest
const { expect, describe, it } = require( '@jest/globals' );
//require multiBracketValidation function
const multiBracketValidation = require( '../multi-bracket-validation.js' );
//create an empty arr
let arr = [] ;
//create an object includes brackets
let brackets = { '(':')', '{':'}', '[':']'} ;


//start test
describe( 'multiBracketValidation',()=>{
  //should return error when the input is not string
  it( 'should return error when the input is not string(1st edge case)',()=>{
    //arrange
    let input = 123;
    //act
    multiBracketValidation( input );
    //assert
    expect( multiBracketValidation( input ) ).toThrowError( 'please input string' );
  } );

  //should return error when the input is empty string
  it( 'should return error when the input is empty string(2nd edge case)',()=>{
    //arrange
    let input = '';
    //act
    multiBracketValidation( input );
    //assert
    expect( multiBracketValidation( input ) ).toThrowError( 'your string input is empty' );
  } );

  //should return error when there is no input 
  it( 'should return error when there is no input(3rd edge case)',()=>{
    //arrange
    let input ;
    //act
    multiBracketValidation( input );
    //assert
    expect( multiBracketValidation( input ) ).toThrowError( 'your string input is empty' );
  } );

  //should return true 
  it( 'should return true',()=>{
    //arrange
    let input = '{([])}';
    let input2 = '{([([{}])])}';
    let input3 = '{}';
    //act
    multiBracketValidation( input );
    multiBracketValidation( input2 );
    multiBracketValidation( input3 );
    //assert
    expect( multiBracketValidation( input ) ).toBe( true );
    expect( multiBracketValidation( input2 ) ).toBe( true );
    expect( multiBracketValidation( input3 ) ).toBe( true );
  } );

  //should return false
  it( 'should return false',()=>{
    //arrange
    let input = '{(as585]}';
    let input2 = '{([([}]]}';
    let input3 = '{';
    //act
    multiBracketValidation( input );
    multiBracketValidation( input2 );
    multiBracketValidation( input3 );
    //assert
    expect( multiBracketValidation( input ) ).toBe( false );
    expect( multiBracketValidation( input2 ) ).toBe( false );
    expect( multiBracketValidation( input3 ) ).toBe( false );
  } );
} );
