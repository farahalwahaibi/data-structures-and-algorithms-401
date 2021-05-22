'use strict';

// access Node class
const Node = require( '../node.js' );

// access Linked list class
const LinkedList = require( '../LL.js' );

// require jest
const { expect, describe, it } = require( '@jest/globals' );


// start test
describe ( 'LinkedList', ()=>{

  //test when the linked list is empty
  it( 'should return empty linked list',()=>{
    //arrange
    let ll = new LinkedList() ;
    //assert
    expect( ll.head ).toBeNull();
  } );

  //test insert node into linked list
  it( 'should insert new node', ()=>{
    //arrange
    let value = 10 ;
    let ll = new LinkedList ( value );
    //act
    ll.insert( value );
    //assert
    expect( ll.head.value ).toBe( value );
  } );

  //test if the head property will properly point to the first node in the linked list
  it( 'The head property will properly point to the first node in the linked list',()=>{

  } );

  //test if we can insert multiple nodes into the linked list
  it( 'should insert multiple node into linked list',()=>{
    //arrange
    let ll = new LinkedList ();
    let value1 = 10;
    let value2 = 20;
    let value3 = 30;
    //act
    ll.insert( value1 );
    ll.insert( value2 );
    ll.insert( value3 );
    //assert
    expect( ll.includes( value1 ) ).toBeTruthy();
    expect( ll.includes( value2 ) ).toBeTruthy();
  } );

  //test when finding value will return true
  it( 'should return true when finding the value', ()=>{
    //arrange
    let ll = new LinkedList ();
    ll.insert( 10 );
    ll.insert( 20 );
    //act
    let test = ll.includes( 10 );
    //assert
    expect( test ).toBeTruthy();
  } );

  //test when not exist value will return false
  it( 'should return false when searching for not exist value', ()=>{
    //arrange
    let value = 10 ;
    let ll = new LinkedList ( value );
    //act
    let test = ll.includes( value );
    //assert
    expect( test ).toBe( false );
  } );

  //test if it's return all values in linked list
  it( 'should return all values in linked list', ()=>{
    //arrange
    let ll = new LinkedList ();
    ll.insert( 'a' );
    ll.insert( 'b' );
    ll.insert( 'c' );
    //act
    let test = ll.toString();
    //assert
    expect( test ).toEqual( '{a} ->{b} ->{c} ->NULL' );
  } );
  
} );

