'use strict';
//require HashTable
const HashTable = require ( './../code-challenge30/hashtable.js' );

//leftJoins function
function leftJoins( hashmap1,hashmap2 ){
  //for edge case
  if( !hashmap1 && !hashmap2 ){
    return 'Exception';
  }
  //hash the table
  let hash = new HashTable( 10 );
  let table1 = hashmap1.table;
  let table2 = hashmap2.table;
  //for other edge case
  if ( !table1 && !table2 ){
    return 'Exception';
  }
  //iterate through the object to get the key
  for ( let key of Object.keys( table1 ) ){
    console.log( Object.keys( table1 ) );
    //get the value for the 1st hashtable
    let val1=table1.get( key );
    //get thr value for the 2nd hashtable
    let val2 = table2.get( key );

    //once we get the value we need to add it
    hash.add( key, [val1,val2 ] );
  }
  return hash;
}



//export leftJoins
module.exports = leftJoins ;
