'use strict';

// create class for node
class Node {
  constructor ( value ){
    this.value = value ;
    this.next = null ;
  }
}

// stack class
class Stack {
  constructor (){
    this.top = null;
    this.length=0;
  }



  //push method
  push ( value ){
    let node = new Node ( value );
    if ( this.top === null ){
      this.top = node ;
      this.top.value = value ;
    }
    else {
      let current = node ;
      current.value = value ;
      current.next = this.top;
      this.top = current ;
    }
  }

  //pop method
  pop () {
    //Should raise exception when called on empty stack
    if ( this.top===null ){
      throw new Error ( 'empty stack' );
    }
    else {
      let node = this.top.value;
      this.top = this.top.next ;
      this.length = this.length-1;
      return node ;
    }
  }

  //peek method
  peek () {
    //Should raise exception when called on empty stack
    if ( !this.top ){
      throw new Error ( 'empty stack' );
    }
    else{
      return this.top.value ;
    }
  }

  //isEmpty method
  isEmpty () {
    if ( this.top ){
      return false;
    }
    else {
      return true ;
    }
  }
}


// Queue class
class Queue {
  constructor () {
    this.front = null ;
  }

  //enqueue method
  enqueue( value ) {
    let node = new Node ( value );
    if ( this.front === null ){
      this.front = node ;
    }
    else {
      let currentVal = this.front;
      while( currentVal.next ){
        currentVal = currentVal.next ;
      }
      currentVal.next = node ;
    }
    return node ;
  }

  //dequeue method
  dequeue () {
    //Should raise exception when called on empty queue
    if ( !this.front ){
      throw new Error ( 'empty queue' );
    }
    else {
      let node = this.front ;
      this.front = this.front.next ;
      return node.value ;
    }
  }

  //peek method
  peek () {
    //Should raise exception when called on empty queue
    if ( !this.front ){
      throw new Error ( 'empty queue' );
    }
    else {
      return this.front.value ;
    }
  }

  //isEmpty method
  isEmpty () {
    if ( this.front ){
      return false;
    }
    else{
      return true ;
    }
  }
}


module.exports = Stack ;

