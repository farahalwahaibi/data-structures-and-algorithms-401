'use strict';

// require jest
const { expect, describe, it } = require( '@jest/globals' );
// require hashTable
const HashTable  = require( '../hashtable.js' );


//start testing

describe( 'hashtable test', () => {
  //test for add
  it( 'should Adding a key/value to your hashtable results in the value being in the data structure', () => {
    //arrange
    const newVal = new HashTable();
    //act
    newVal.add( 'Farah', 'Architect' );
    //assert
    expect( newVal.get( 'Farah' ) ).toEqual( 'Architect' );
  } );

  //test for get
  it( 'should Retrieving based on a key returns the value stored', () => {
    //arrange
    const newVal = new HashTable();
    //act
    newVal.add( 'Tasnim', 'Full-Stack Developer' );
    //assert
    expect( newVal.get( 'Tasnim' ) ).toEqual( 'Full-Stack Developer' );
  } );

  //test for contains
  it( 'Successfully returns null for a key that does not exist in the hashtable', () => {
    //arrange
    const newVal = new HashTable();
    //act
    newVal.add( 'Saja', 'Designer' );
    //assert
    expect( newVal.contains( 'nul' ) ).toBeNull();
  } );

  //test for handle collision
  it( 'Successfully handle a collision within the hashtable', () => {
    //arrange
    const newVal = new HashTable();
    //act
    newVal.add( 'farah', 'Arch' );
    newVal.add( 'rahaf', 'Designer' );
    //assert
    expect( newVal.hash( 'farah' ) ).toEqual( 0 );
    expect( newVal.hash( 'rahaf' ) ).toEqual( 0 );
  } );

  //test for retrieve a value from a bucket
  it( 'Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    //arrange
    const newVal = new HashTable();
    //act
    newVal.add( 'farah', 'Arch' );
    newVal.add( 'rahaf', 'Designer' );
    //assert
    expect( newVal.hash( 'farah' ) ).toEqual( 0 );
    expect( newVal.hash( 'rahaf' ) ).toEqual( 0 );
    expect( newVal.get( 'farah' ) ).toEqual( 'Arch' );
  } );

  //test for hash
  it( 'Successfully hash a key to an in-range value', () => {
    //arrange
    const newVal = new HashTable( 2 );
    //assert
    expect( newVal.hash( 'rahaf' ) ).toEqual( 0 );
  } );
} );
