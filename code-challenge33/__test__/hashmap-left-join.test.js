'use strict';

const {expect,describe,it} = require( '@jest/globals' );
//require node and binaryTree
const {Node, BinaryTree}=require( '../../code-challenge14/tree/tree.js' );
//require hashtable
const HashTable = require ( '../../code-challenge30/hashtable.js' ) ;
//require tree
const leftJoins=require( '../hashmap-left-join.js' );


//start testing
describe( 'Left Joins', () => {
  //test for edge case 1
  it( 'should return Exception if the user input empty hashmap',()=>{
    //arrange
    let hashmap1 = '';
    let hashmap2 = 123;
    //act
    let result = leftJoins ( hashmap1,hashmap2 );
    //assert
    expect ( result ).toBe( 'Exception' );
  } );
  //test for edge case 2
  it( 'should return Exception if the user not input params',()=>{
    //arrange
    //act
    let result = leftJoins ( );
    //assert
    expect ( result ).toBe( 'Exception' );
  } );
  //test for normal case
  it( 'should successfully join from left', () => {
    //arrange
    let hashmap1 = new HashTable( 10 );
    let hashmap2 = new HashTable( 10 );
    //act
    hashmap1.add( 'farah', 'Arch' );
    hashmap1.add( 'saja', 'designer' );
    hashmap1.add( 'batoul', 'doctor' );
    hashmap1.add( 'youmna', 'actor' );
    hashmap2.add( 'farah', 'music' );
    hashmap2.add( 'saja', 'animals' );
    hashmap2.add( 'batoul', 'makeup' );
    hashmap2.add( 'safa', 'queen of drama' );
    //assert
  } );
} );
