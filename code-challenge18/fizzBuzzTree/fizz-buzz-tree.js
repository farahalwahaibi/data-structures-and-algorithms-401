'use strict';

//Node class
class Node {
  constructor( value , left = null , right = null ){
    this.value = value ;
    this.left = left ;
    this.right = right ;
  }
}
//BinaryTree class
class BinaryTree {
  constructor( root = null ){
    this.root = root ;
  }
  //FizzBuzzTree function takes tree as parameter
  FizzBuzzTree( newTree ){
    //Create a new tree with the same structure as the original
    newTree= new BinaryTree ;
    //create traverse function
    let traverse = ( ( node )=>{
      //check if it's not null
      if ( node === null ) {
        return null;
      }
      //If the value is divisible by 3, replace the value with “Fizz”
      if( newTree.node.value % 3 ===0 ){
        node.value === 'fizz' ;
        return node.value ;
      }
      //If the value is divisible by 5, replace the value with “Buzz”
      if( node.value % 5 ===0 ){
        node.value === 'buzz' ;
        return node.value ;
      }
      //If the value is divisible by 5 & 3, replace the value with “FizzBuzz”
      if( node.value % 15 ===0 ){
        node.value === 'fizzBuzz' ;
        return node.value ;
      }
      //If the value is not divisible by 3 or 5, simply turn the number into a String.
      else {
        node.value = node.value.toString() ;
        return node.value ;
      }
    } );
    //traverse for next node
    let node = new Node ( newTree.root.value );
    if( node.left.value ){
      traverse( node.left.value );
    }
    if( node.right.value ){
      traverse( node.right.value );
    }
    //return newTree
    newTree.root = traverse( this.root );
    return newTree ;
  }
}

