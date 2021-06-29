'use strict';
//require HashTable
const HashTable = require('./../code-challenge30/hashtable.js')

//leftJoins function
function leftJoins( hashtable1,hashtable2 ){
  //hash the table
  let hash = new HashTable( );

  //iterate through the object to get the key
  for ( let key of Object.keys( hashtable1.table ) ){
    //get the value for the 1st hashtable
    let leftHash=hashtable1.get( key );
    //get thr value for the 2nd hashtable
    let rigthHash = hashtable2.get1( key );

    //once we get the value we need to add it
    hash.add( key, [leftHash,rigthHash ] );
  }
  return hash;
}



//export leftJoins
module.exports = leftJoins ;
