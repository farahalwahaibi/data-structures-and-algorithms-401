'use strict';

//require PseudoQueue
const AnimalShelter = require( '../fifo-animal-shelter.js' );

// require jest
const { expect, describe, it } = require( '@jest/globals' );

//create new AnimalShelter
let animalShelter = new AnimalShelter () ;

//start test
describe( 'AnimalShelter',()=>{
  //should return null when the animal not dog or cat
  it( 'should return null when the animal not dog or cat',()=>{
    //arrange
    let animal = '' ;
    //act
    animalShelter.enqueue( animal );
    //assert
    expect( animalShelter.enqueue( animal ) ).toBe( null );
  } );

  //should push dog animal inside this.dog
  it( 'should push dog animal inside this.dog',()=>{
    //arrange
    let animal = 'dog' ;
    let animal2 = 1 ;
    //act
    animalShelter.enqueue( animal );
    animalShelter.enqueue( animal2 );
    //assert
    expect( animalShelter.enqueue( animal2 ) ).toBe( null );
    expect( animalShelter.enqueue( animal ) ).toEqual( ['dog','dog'] );
  } );

  //should push cat animal inside this.cat
  it( 'should push cat animal inside this.cat',()=>{
    //arrange
    let animal = 'cat' ;
    let animal2 = 'dog' ;
    let animal3 = 'farah' ;
    //act
    animalShelter.enqueue( animal );
    animalShelter.enqueue( animal2 );
    animalShelter.enqueue( animal3 );
    //assert
    expect( animalShelter.enqueue( animal3 ) ).toBe( null );
    expect( animalShelter.enqueue( animal ) ).toEqual( ['cat','cat'] );
    expect( animalShelter.enqueue( animal2 ) ).toEqual( ['dog','dog','dog','dog'] );
  } );

  //should return null when the pref not dog or cat
  it( 'should return null when the pref not dog or cat',()=>{
    //arrange
    let pref = '' ;
    //act
    animalShelter.dequeue( pref );
    //assert
    expect( animalShelter.dequeue( pref ) ).toBe( null );
  } );

  //should shift dog to the 1st index when the pref dog
  it( 'should shift dog to the 1st index when the pref dog',()=>{
    //arrange
    let pref = 'dog' ;
    //act
    animalShelter.enqueue( pref );
    //assert
    expect( animalShelter.dequeue( pref ) ).toEqual( 'dog' );
  } );

  //should shift cat to the 1st index when the pref cat
  it( 'should shift cat to the 1st index when the pref cat',()=>{
    //arrange
    let pref = 'cat' ;
    //act
    animalShelter.enqueue( pref );
    //assert
    expect( animalShelter.dequeue( pref ) ).toEqual( 'cat' );
  } );
} );
