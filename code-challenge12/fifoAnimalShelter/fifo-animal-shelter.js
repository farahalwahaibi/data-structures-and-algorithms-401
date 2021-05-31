'use strict';

//AnimalShelter class
class AnimalShelter {
  constructor(){
    this.dog = [];
    this.cat = [];
  }

  //enqueue(animal)
  enqueue( animal ){
    //check if it's cat , push it to cat array
    if ( animal === 'cat' ){
      this.cat.push( animal );
      return this.cat ;
    }
    //check if it's dog , push it to dog array
    else if ( animal === 'dog' ){
      this.dog.push( animal );
      return this.dog ;
    }
    //check if it's not cat or dog
    else {
      return null ;
    }
  }

  //dequeue(pref)
  dequeue( pref ){
    //check if it's dog , push it to the 1st index by shift
    if ( pref === 'dog' ){
      let y = this.dog.shift( pref );
      return y ;
    }
    //check if it's cat , push it to the 1st index by shift
    else if ( pref === 'cat' ){
      let x = this.cat.shift( pref );
      return x ;
    }
    //check if it's not cat or dog
    else {
      return null ;
    }
  }
}

module.exports = AnimalShelter ;
