'use strict';

// require jest
const { expect, describe, it } = require( '@jest/globals' );

// access Node class
const Node = require( '../../../code-challenge5/node.js' );

// access Linked list class
const LinkedList = require( '../../../code-challenge5/LL.js' );

// access Linked list ZIP
const zipLists = require( '../ll-zip.js' );



// start testing
describe( 'linked-lists-zip' ,()=>{

  // if it's create new linked list
  it( 'should create new linked list from ',()=>{
    //arrange
    let ll1 = new LinkedList ();
    let ll2 = new LinkedList ();
    ll1.insert( 10 );
    ll1.insert( 1 );
    ll2.insert( 4 );
    ll2.insert( 5 );
    //act
    let x = zipLists ( ll1,ll2 );
    //assert
    expect( x ).toBeTruthy();
    expect( x.toString() ).toEqual( '{10} ->{4} ->{1} ->{5} ->NULL' );
  } );

  //  if it's throw error when one of the two linked list = null
  it( 'should throw new error',()=>{
    //arrange
    let ll1 = new LinkedList ();
    let ll2 = new LinkedList ();
    //act
    function x(){
      zipLists ( ll1,ll2 );
    }
    //assert
    expect( x ).toThrow( 'please input linked list' );
  } );

  // if it's create new linked list if one shorter than other
  it( 'should create new linked list if the length of the 1st linked list less than 2nd linked list',()=>{
    //arrange
    let ll1 = new LinkedList ();
    let ll2 = new LinkedList ();
    ll1.insert( 10 );
    ll1.insert( 1 );
    ll2.insert( 4 );
    ll2.insert( 5 );
    ll2.insert( 6 );
    //act
    let x = zipLists ( ll1,ll2 );
    //assert
    expect( x ).toBeTruthy();
    expect( x.toString() ).toEqual( '{10} ->{4} ->{1} ->{5} ->{6} ->NULL' );
  } );

  // if it's create new linked list if one shorter than other
  it( 'should create new linked list if the length of the 1st linked list greater than 2nd linked list',()=>{
    //arrange
    let ll1 = new LinkedList ();
    let ll2 = new LinkedList ();
    ll1.insert( 10 );
    ll1.insert( 1 );
    ll1.insert( 4 );
    ll2.insert( 5 );
    ll2.insert( 6 );
    //act
    let x = zipLists ( ll1,ll2 );
    //assert
    expect( x ).toBeTruthy();
    expect( x.toString() ).toEqual( '{10} ->{5} ->{1} ->{6} ->{4} ->NULL' );
  } );

} );
