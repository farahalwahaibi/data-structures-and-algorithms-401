'use strict';

// require jest
const { expect, describe, it } = require( '@jest/globals' );
// require repeatedWord
const repeatedWord  = require( '../hashmap-repeated-word' );


//start testing
describe( 'repeatedWord test', () => {
  //test for normal case
  it( 'should return the first repeated word', () => {
    //arrange
    const str1 = 'Once upon a time, there was a brave princess who';
    const str2 = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only';
    const str3 = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York';
    //act
    repeatedWord( str1 );
    repeatedWord( str2 );
    repeatedWord( str3 );
    //assert
    expect( repeatedWord( str1 ) ).toEqual( 'a' );
    expect( repeatedWord( str2 ) ).toEqual( 'it' );
    expect( repeatedWord( str3 ) ).toEqual( 'summer' );
  } );

  //test for edge case if there is no repeated string
  it( 'should return No Repeated Word', () => {
    //arrange
    const str1 = 'Once upon a time, there was  brave princess who';
    //act
    repeatedWord( str1 );
    //assert
    expect( repeatedWord( str1 ) ).toEqual( 'No Repeated Word' );
  } );

  //test for edge case if the user not input string
  it( 'should return Please Input String', () => {
    //act
    repeatedWord( );
    //assert
    expect( repeatedWord( ) ).toEqual( 'Please Input String' );
  } );

} );
