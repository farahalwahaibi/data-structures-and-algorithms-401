'use strict';

const Node = require ( '../../../code-challenge5/node.js' );
const Stack  = require ( '../stacks-and-queues.js' );

// require jest
const { expect, describe, it } = require( '@jest/globals' );


// start test
describe ( 'stack and queue', ()=>{
  //Can successfully push onto a stack
  it ( 'Can successfully push onto a stack',()=>{
    //arrange
    let value = 10;
    let stack = new Stack ( );
    //act
    stack.push( value );
    let x = this.top ;
    //assert
    expect( stack( x ) ).toEqual( 10 );
  } );

  //Can successfully push multiple values onto a stack
  it ( 'Can successfully push multiple values onto a stack', ()=>{
    //arrange
    let value = 10;
    let value2 = 20;
    let value3 = 30;
    let stack = new Stack ( );
    //act
    stack.push( value );
    stack.push( value2 );
    stack.push( value3 );
    //assert
    expect( stack.top.value ).toEqual( 30 );
    expect( stack.top.value2 ).toEqual( 20 );
    expect( stack.top.value3 ).toEqual( 10 );
  } );
} );
