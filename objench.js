// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }

const createInstructor = (firstName, lastName) => ({
    firstName,
    lastName
})

const favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"

const instructor = {
    firstName: "Esma",
    [favoriteNumber]: "That is my favorite!"
}

// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName + " says bye!";
//     }
//   }

const instructors= {
    firstName: "Smokey",
    sayHi(){
        return "Meow!";
    },
    sayBye(){
        return this.firstName + " says meoooooww!";
    }
}

const createAnimal = (species, verb, noise) => {
    return {
        species,
        [verb](){
            return noise; 
        }
    }
}