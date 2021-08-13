// Same keys and values
function createInstructor(firstName, lastName){
    return  {
        firstName,
        lastName
    }
  }

// Computed property names
let favoriteNumber = 42;

const instructor = {
  firstName: "Colt",
  [favoriteNumber] : "That is my favorite!"
}

// Object methods
const instructor2 = {
    firstName: "Colt",
    sayHi() {
      return "Hi!";
    },
    sayBye() {
      return this.firstName + " says bye!";
    }
  }

/** Create animal function
 *  Write a function which generates an animal object. 
 *  The function should accept 3 arguments:
 *      species: the species of animal (‘cat’, ‘dog’)
        verb: a string used to name a function (‘bark’, ‘bleet’)
        noise: a string to be printed when above function is called (‘woof’, ‘baaa’) */
function createAnimal(species, verb, noise) {
    return {
            species,
            [verb]() {
                return noise
            }
    }
}

