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
    this.length = 0 ;
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
      console.log ( 'empty stack' );
    }
    else {
      let node = this.top.value ;
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
}

//PseudoQueue class
class PseudoQueue {
  constructor(){
    this.firstStack = new Stack ();
    this.secondStack = new Stack ();
  }

  //enqueue method
  enqueue( value ){
    this.firstStack.push( value );
  }

  //dequeue method
  dequeue(){
    //check whether stack 1 is empty , if so throw error
    if ( !this.firstStack.top ){
      console.log( 'first stack is empty' );
    }
    else {
      while( !this.firstStack.top === null ){
        this.secondStack.push( this.firstStack.pop() );
      }
      return this.secondStack.pop();
    }
  }
}


//export PseudoQueue class and Stack class
module.exports = PseudoQueue ;
