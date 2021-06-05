'use strict';

// require jest
const { expect, describe, it } = require( '@jest/globals' );
// require Node, BinaryTree , BinarySearchTree classes
const {Node, BinaryTree , BinarySearchTree} = require( '../tree.js' );

let tree = null;

// start test
describe( 'Binary Tree', () => {
  beforeAll( () => {
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

    //             1
    //     2               3
    // 6        -      4       5
    //     7
    // 8       9
    tree = new BinaryTree( one );
  } ) ;

  //Can successfully instantiate an empty tree
  it( 'Can successfully instantiate an empty tree',()=>{
    // arrange
    let expected = [null] ;
    let one = new Node( null );
    one.left = null;
    one.right = null;
    let emptyTree = new BinaryTree( one );
    // act
    let preOrderResult = emptyTree.preOrder();
    // assert
    expect( preOrderResult ).toEqual( expected );
  } );

  //Can successfully instantiate a tree with a single root node
  it( 'Can successfully instantiate a tree with a single root node',()=>{
    // arrange
    let expected = [1,];
    let one = new Node( 1 );
    one.left = null;
    one.right = null;
    let singleRootTree = new BinaryTree( one );
    // act
    let preOrderResult = singleRootTree.preOrder();
    // assert
    expect( preOrderResult ).toEqual( expected );
  } );

  //Can successfully add a left child and right child to a single root node
  it( 'Can successfully add a left child and right child to a single root node',()=>{
    let expected = [1,2,3];
    let one = new Node( 1 );
    let two = new Node( 2 );
    let three = new Node( 3 );
    one.left = two;
    one.right = three;
    let tree = new BinaryTree( one );
    // act
    let preOrderResult = tree.preOrder();
    // assert
    expect( preOrderResult ).toEqual( expected );
  } );

  //Can successfully return a collection from a preorder traversal
  it( 'Can successfully return a collection from a preorder traversal',()=>{
    // arrange
    let expected = [1, 2, 6, 7, 8, 9, 3, 4, 5];
    // act
    let preOrderResult = tree.preOrder();
    // assert
    expect( preOrderResult ).toEqual( expected );
  } );

  //Can successfully return a collection from an inorder traversal
  it( 'Can successfully return a collection from an inorder traversal',()=>{
    // arrange
    let expected = [6, 8, 7, 9, 2, 1, 4, 3, 5];
    // act
    let inOrderResult = tree.inOrder();
    // assert
    expect( inOrderResult ).toEqual( expected );
  } );

  //Can successfully return a collection from a postorder traversal
  it( 'Can successfully return a collection from a postorder traversal',()=>{
    // arrange
    let expected = [8, 9, 7, 6, 2, 4, 5, 3, 1];
    // act
    let postOrderResult = tree.postOrder();
    // assert
    expect( postOrderResult ).toEqual( expected );
  } );
} );
