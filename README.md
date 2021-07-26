# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

  * head - Returns head of an array
  * tail - Returns tail of an array
  * middle - Returns middle of an array
  * assertArraysEqual - Checks if 2 arrays are equal, with message
  * assertEqual - checks if 2 inputs are equal, with message
  * assertObjectsEqual - checks if 2 objects are equal, with message
  * countLetters - counts letters in a string or sentence
  * countOnly - counts provided strings instances in an array in accordance with 2nd input provided.
  * eqArrays - checks if 2 arrays are equal
  * eqObjects - chekcs if 2 objects are equal.
  * findKey - returns key according to condition of value provided.
  * findKeyByValue - looking for keys by provided value
  * flatten - flattens nested arrays in 1-d array
  * letterPositions - returns index positions of specific characters in an array
  * map - returns the first characters of items in an array
  * takeUntil - adds itme to an array from an array until a specific item comes.
  * without - removes specified items from an array