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
  //Root-Left-Right
  preOrder(){
    //create new arr
    let arr = [] ;
    //create function
    let traverse = ( node )=>{
      //push 1st the main root (Root-Left-Right)
      arr.push( node.value );
      //iterate throw the left
      if( node.left ) {
        traverse( node.left );
      }
      //iterate throw the right
      if ( node.right ){
        traverse( node.right );
      }
    };
    traverse( this.root );
    return arr ;
  }
  //Left-Root-Right
  inOrder(){
    let arr = [] ;
    let traverse = ( node )=>{
      //iterate throw the left
      if ( node.left ){
        traverse( node.left ) ;
      }
      //push from the left (Left-Root-Right)
      arr.push( node.value );
      //iterate throw the right
      if ( node.right ){
        traverse( node.right );
      }
    };
    traverse( this.root );
    return arr ;
  }
  //Left-Right-Root
  postOrder(){
    let arr = [] ;
    let traverse = ( node )=>{
      //iterate throw left (Left-Right-Root)
      if( node.left ){
        traverse( node.left );
      }
      //iterate throw right
      if( node.right ){
        traverse( node.right );
      }
      arr.push( node.value );
    };
    traverse( this.root );
    return arr ;
  }
}
//BinarySearchTree class
class BinarySearchTree {
  constructor( root = null ){
    this.root = root ;
  }
  //add method
  add( value ){
    let traverse = ( ( node ) =>{
      node = new Node ( value );
      //1st check if the root = null
      if ( this.root === null ){
        this.root = node;
        return this.root;
      }
      //check if the left node = null and not greater than right node
      if ( this.root.left === null && node.value < this.root.right.value ){
        this.root.left = node ;
        traverse ( this.root.left ) ;
      }
      //check if the right node = null and not less than left node
      if ( this.root.right===null && node.value > this.root.left.value ){
        this.root.right = node ;
        traverse ( this.root.right ) ;
      }
      //check if the node less than left node
      if ( node.value<this.root.left.value ){
        this.root.left = node ;
        traverse ( this.root.left );
      }
      //check if the node greater than right node
      else {
        this.root.right = node ;
        traverse ( this.root.right );
      }
    } );
    traverse ( this.root ) ;
  }
  //contains method
  contains( value ){
    let node = new Node ( value );
    //check if any of the root or left or right = node
    if ( this.root === node.value || this.root.left === node.value || this.root.right === node.value ){
      return true;
    }
    else {
      return false;
    }
  }
}


module.exports = {
  Node: Node ,
  BinaryTree: BinaryTree ,
  BinarySearchTree: BinarySearchTree
};
