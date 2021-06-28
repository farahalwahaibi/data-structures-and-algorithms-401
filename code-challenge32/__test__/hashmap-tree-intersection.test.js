'use strict';

const {expect,describe,it} = require( '@jest/globals' );
//require node and binaryTree
const {Node, BinaryTree}=require( '../../code-challenge14/tree/tree.js' );
//require tree
const hashMapTreeIntersection=require( '../hashmap-tree-intersection.JS' );

//declare 2 binaryTrees
let bTree1 = null;
let bTree2 = null;

//start testing
describe( 'Binary Tree', () => {
  //arrange data
  beforeAll( () => {
    //FOR TREE ONE
    let one = new Node( 1 );// tree root
    let two = new Node( 2 );
    let three = new Node( 3 );
    let four = new Node( 4 );
    let five = new Node( 5 );
    let six = new Node( 6 );
    let seven = new Node( 7 );
    let eight = new Node( 8 );
    let nine = new Node( 9 );

    one.left = two;
    one.right = three;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    three.left = four;
    three.right = five;

    //update bTree1
    bTree1 = new BinaryTree( one );

    //FOR TREE TWO
    let one1 = new Node( 11 );// tree root
    two = new Node( 2 );
    three = new Node( 3 );
    let four1 = new Node( 12 );
    five = new Node( 5 );
    let six1 = new Node( 13 );
    seven = new Node( 7 );
    let eight1 = new Node( 14 );
    nine = new Node( 9 );

    one1.left = two;//
    one1.right = three;//
    two.left = five;//
    four1.right = seven;
    seven.left = six1;
    seven.right = eight1;
    three.left = nine;

    //update bTree2
    bTree2 = new BinaryTree( one1 );

  } );

  //test for edge cases
  it( 'should return error',()=>{
    //arrange
    //act
    let result = function(){
      hashMapTreeIntersection();
    };
    //assert
    expect( result ).toThrow( 'You Have To Enter Two Binary Trees As Input' );
  } );

  //test for normal case
  it( 'Should successfully Return The Match Values',()=>{
    //act
    let result = hashMapTreeIntersection( bTree1,bTree2 );
    //assert
    expect( result ).toEqual( [2] );
  } );

  //test for normal case
  it( 'Should Successfully Return The Same Array Since The 2 Inputs Is The Same',()=>{
    //act
    let result = hashMapTreeIntersection( bTree1,bTree1 );
    //assert
    expect( result ).toEqual( [1, 2, 6, 7, 8, 9, 3, 4, 5] );
  } );

} );
