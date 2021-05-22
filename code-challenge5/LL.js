'use strict';

// access node.js
const Node = require ( './node.js' );

// create LinkedList class
class LinkedList {
  constructor (){
    this.head = null ;
  }

  // insert method to add a new node with the input value
  insert ( value ) {
    let node = new Node ( value );
    if ( !this.head ){
      this.head = node ;
    }
    else {
      let head = this.head;
      while( head.next ){
        head = head.next;
      }
      head.next = node ;
    }
  }

  // includes method to return boolean if the node(value) included or not
  includes ( value ) {
    let node = this.head ;
    if ( !node ){
      return false;
    }
    else {
      while ( node.next ){
        if ( value === node.value ){
          return true;
        }
        node = node.next;
      }
      return false;
    }
  }

  // toString method to return all values in linked list
  toString (){
    let node = this.head ;
    let stringValues = '' ;

    if ( !node ){
      stringValues = 'NULL';
      return stringValues ;
    }
    else {
      while( node ){
        stringValues += `{${node.value}} ->`;
        node = node.next;
      }
      stringValues += 'NULL';
    }
    return stringValues ;
  }
}


// export LinkedList class
module.exports = LinkedList ;
