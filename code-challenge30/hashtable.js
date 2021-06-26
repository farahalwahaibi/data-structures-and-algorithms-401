'use strict';

// node class
class Node {
  constructor( value ) {
    this.value = value;
    this.next = null;
  }
}

// linkedList class
class LinkedList {
  constructor() {
    this.head = null;
  }
  //add method
  add( value ) {
    const node = new Node( value );
    if ( !this.head ) {
      this.head = node;
      return;
    }
    let current = this.head;
    while ( current.next ) {
      current = current.next;
    }
    current.next = node;
  }
  //value method
  values() {
    let values = [];
    let current = this.head;
    while ( current ) {
      values.push( current.value );
      current = current.next;
    }
    return values;
  }
}


//>>>>>>>> End Linked List >>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>> Begin Hash Table >>>>>>>>>>>>>>>>>>>>>>>


// class for hashTable
class HashTable{
  constructor( size ){
    this.size = size;
    this.table = new Array( size );
  }

  //hash method
  hash( key ){
    let hash = 0;
    hash = key.split( '' ).reduce( ( acc,items ) => {
      return acc + items.charCodeAt( 0 );
    },0 ) * 599 % this.size;
    return hash;
  }

  //add method
  add( key,value ){
    let hash = this.hash( key );
    if( !this.table[hash] ){
      this.table[hash] = new LinkedList();
    }
    let keyValuePair = {[key]:value};
    this.table[hash].add( keyValuePair );
  }

  //get method
  get( key ){
    let newArr = [];
    let hash = this.hash( key );
    if( this.table[hash] ){
      this.table.map( ( obj ) => {
        let existObj = obj.head.value;
        if( Object.keys( existObj ) === key ){
          newArr.push( Object.values( existObj ) );
          return Object.values( existObj );
        }
        else return 'the key is not exist';
      } );
    }
    return newArr;
  }

  //contain method
  contains( key ){
    if( this.table.includes( key ) ){
      return true;
    }
    return null;
  }
}

//export node , linkedList, hashTable
module.exports = HashTable;
