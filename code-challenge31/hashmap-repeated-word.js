'use strict';

function repeatedWord ( str ){
  //for edge case if the user not input string
  if( !str ){
    return 'Please Input String';
  }
  //split the input string
  let arr = str.toLowerCase().replace( /,/g,'' ).split( ' ' );
  //declare newArr to push inside it the non-repeated value
  let newArr = [];
  //declare includeArr which store the repeated value
  let includeArr = [];

  //iterate throw the main array which contains the whole string
  arr.forEach( ( val )=>{
    //check if the newArr includes the value
    if( newArr.includes( val ) ){
      //push the value to the includeArr
      includeArr.push( val );
    }else {
      //else push the value to the newArr
      newArr.push( val );
    }
  } );
  //for edge case if there is no repeated string
  if ( includeArr.length===0 ){
    return 'No Repeated Word';
  }
  //return the first index in the includeArr which will be the first word repeated
  else return includeArr[0];
}


module.exports = repeatedWord;


