'use strict';

//require PseudoQueue
const PseudoQueue = require( '../queue-with-stacks.js' );

// require jest
const { expect, describe, it } = require( '@jest/globals' );

// start test
describe ( 'stack with queue', ()=>{
  //Can successfully push onto a firstStack
  it ( 'Can successfully push onto a firstStack',()=>{
    //arrange
    let value = 10 ;
    const pseudoQueue = new PseudoQueue ( ) ;
    //act
    pseudoQueue.enqueue( value ) ;
    //assert
    expect( pseudoQueue.firstStack.top.value ).toEqual( 10 );
  } );

  //Can successfully push multiple values to first stack
  it( 'Can successfully push multiple values to first stack',() => {
    //arrange
    let value1 = 10 ;
    let value2 = 20 ;
    const pseudoQueue = new PseudoQueue();
    //act
    pseudoQueue.enqueue( value1 ) ;
    pseudoQueue.enqueue( value2 ) ;
    //assert
    expect( pseudoQueue.firstStack.top.value ).toBe( 20 );
  } );

  //Can successfully return the pop value onto secondStack
  it ( 'Can successfully return the pop value onto secondStack', ()=>{
    //arrange
    let value1 = 10 ;
    let value2 = 20 ;
    let value3 = 30 ;
    const pseudoQueue = new PseudoQueue ( ) ;
    pseudoQueue.enqueue( value1 ) ;
    pseudoQueue.enqueue( value2 ) ;
    pseudoQueue.enqueue( value3 ) ;
    //act
    pseudoQueue.dequeue();
    //assert
    expect( pseudoQueue.secondStack.top.value ).toEqual( 10 );
  } );
} );
