'use strict';

//create an empty arr
let arr = [] ;
//create an object includes brackets
let brackets = { '(':')', '{':'}', '[':']'} ;

//create function multiBracketValidation which takes input as parameter
function multiBracketValidation( input ){
  //1st edg case function should take a string as its only argument
  if ( typeof input !== 'string' ){
    throw new Error( 'please input string' );
  }
  //2nd edg case if the input string is empty
  else if ( input === '' ){
    throw new Error( 'your string input is empty' );
  }
  else{
    //iterate throw the length of input
    for ( let index = 0; index < input.length; index++ ) {
      //check for the opening bracket and just push it
      if ( input[index] === '(' || input[index] === '{' || input[index] === '[' ) {
        //push it to the empty arr
        arr.push( input[index] );
      }
      //for the closing tag
      else {
        let lastIndex = arr.pop();
        if ( input[index] !== brackets[lastIndex] ) {
          return false;
        }
      }
    }
    //now we need to check the length of the arr
    if ( arr.length !== 0 ) {
      return false;
    }
    return true;
  }
}


//edg cases
//1st case : throw new error ('please input string')
console.log( multiBracketValidation( 1323 ) );
//2nd case : if the input string is empty
console.log( multiBracketValidation( '' ) );

//normal cases
//return false
console.log( multiBracketValidation( '{' ) ) ;
//return false
console.log( multiBracketValidation( '{[)}' ) );
//return true
console.log( multiBracketValidation( '{([])}' ) );

