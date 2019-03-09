// @ts-check
import Animal from "./animal"

class Dog extends Animal {
  /**
   * @param {string} name
   * @param {number} age
   */
  constructor(name, age) {
    super(name, age)
    this.name = name
    this.age = age
    this.favouriteGame = "fetch"
  }

  speak() {
    console.log(
      `${this.name} No  more talk! we will play ${this.favouriteGame}`
    )
  }
}

let dog = new Dog("Lucy", 8)

dog.speak()
