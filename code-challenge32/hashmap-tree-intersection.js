'use strict';

//require BinaryTree to use preOrder() method
const BinaryTree=require( '../code-challenge14/tree/tree.js' );

//create hashMapTreeIntersection funtion
function hashMapTreeIntersection( bTree1,bTree2 ){
  //create new array
  let newArr=[];
  //for edge case check if the user not input arguments
  if( !bTree1 && !bTree2 ) {
    throw new Error( 'You Have To Enter Two Binary Trees As Input' );
  }

  //arrange the 2 binary trees by using preOrder()
  let binaryTreeOne=bTree1.preOrder();
  let binaryTreeTwo= bTree2.preOrder();

  //iterate throw the length of the binaryTrees
  for ( let index = 0; index < binaryTreeOne.length ; index++ ) {
    if( binaryTreeOne[index]===binaryTreeTwo[index] ){
      newArr.push( binaryTreeOne[index] );
    }
  }

  return newArr;
}

//export hashMapTreeIntersection
module.exports=hashMapTreeIntersection;
