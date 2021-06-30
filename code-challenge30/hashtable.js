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
    for ( let i = 0; i < key.length; i++ ) {
      hash += key.charCodeAt( i );
    }
    return hash % this.table.length;
  }

  //add method
  add( key,value ){
    const hash = this.hash( key );
    if ( this.table[hash] ) {
      for ( let i = 0; i < this.table[hash].length; i++ ) {
        if ( this.table[hash][i][0] === key ) {
          this.table[hash][i][1] = value;
          return;
        }
      }
      this.table[hash].push( [key, value] );
    } else {
      this.table[hash] = [];
      this.table[hash].push( [key, value] );
    }
    this.size++;
  }

  //get method
  get( key ) {
    const hash = this.hash( key );
    if ( this.table[hash] ) {
      for ( let i = 0; i < this.table.length; i++ ) {
        if ( this.table[hash][i][0] === key ) {
          return this.table[hash][i][1];
        }
      }
    }
    return undefined;
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
