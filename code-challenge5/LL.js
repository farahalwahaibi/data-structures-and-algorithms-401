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

  // append method to add a new node with the given value to the end of the list
  append( value ){
    if( !value ){
      throw new Error( 'insert value' );
    }
    let node = new Node( value );
    if( !this.head ){
      this.head = node;
    }
    else {
      let current = this.head;
      while( current.next !== null ){
        current = current.next;
      }
      current.next = node;
    }
  }

  // insertBefore method which add a new node with the given newValue immediately before the first value node
  insertBefore( currentVal, value ){
    if( !currentVal && value ){
      throw new Error( 'insert value' );
    }
    let node = new Node( value );
    if( this.head === currentVal ){
      node.next = this.head;
      this.head = node;
    }
    else {
      let temp = this.head;
      while( temp.next !== null ){

        if( temp.next.currentVal === currentVal ){
          node.next = temp.next;
          temp.next = node;
          return;
        }
        temp = temp.next;
      }
      throw new Error( 'Exception' );
    }
  }

  // insertAfter method which add a new node with the given newValue immediately after the first value node
  insertAfter( currentVal, value ){
    if( !currentVal && value ){
      throw new Error( 'insert value' );
    }
    let node = new Node( value );
    if( this.head === currentVal ){
      this.head.next = node;
    } else{
      let temp = this.head;
      while( temp !== null ){
        if( temp.currentVal === currentVal ){
          node.next = temp.next;
          temp.next = node;
          return;
        }
        temp = temp.next;
      }
      throw new Error( 'Exception' );
    }
  }

  //Return the node’s value that is k from the end of the linked list.
  llkthFromEnd( k ){
    // check if k === null or < than 0
    if( k===null||k<0 ){
      throw new Error( 'please insert k !!!' );
    }

    let current = this.head;
    let length = 0;
    // check if current node not null
    while( current !== null ){
      current = current.next;
      length++;
    }

    // check if k greater than length - 1
    if( k>length-1 ){
      throw new Error( 'k > length' );
    }
    // declare distance 
    let distance = length-k-1;
    current = this.head;
    while( distance !== 0 ){
      current = current.next;
      distance--;
    }
    //return current
    return current;
  }
}


// export LinkedList class
module.exports = LinkedList ;
