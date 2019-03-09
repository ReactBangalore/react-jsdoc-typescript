// @ts-check

// Basic Types
/**
 * @type {String} Name
 */
let x = "Subramanya"

// Union
/**
 * @type {String|number} price of product
 */
let price = 12
price = "12"

// Intersection

/** @type {{name: string, age: number}} */
let person = {
  name: "Subramanya",
  age: 25
}

// Object type by property
/**
 * @typedef {Object<String, any>} Car
 * @property {string} model
 * @property {number} make
 */

/**
 * @type {Car} car
 */
let car = {
  model: "Tesla",
  make: 2009
}

// Function

/**
 * @typedef {Object} Startup
 * @property {string} name
 * @property {number} fundRaised
 * @property {Function} isFundRaised
 */
/**
 * @type {Startup} startup
 */
let startup = {
  name: "FyndX",
  fundRaised: 0,
  isFundRaised() {
    alert(this.fundRaised > 0 ? "yes" : "no")
  }
}
