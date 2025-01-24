// //Define a class

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

// //defining a methord 

//   greet() {
//     console.log(
//       `Hello , my name is ${this.name} and I am ${this.age} years old`
//     );
//   }
// }



// // create an instance of the class 

// const person1 = new Person('John', 30);

// person1.greet();


// const person2 = new Person('Jane', 25);
// person2.greet();




//Parent class 


// class Animnal {
//   constructor(name) {
//     this.name = name;
//   }

    
//     //methord in parent class 
//   speak() {
//     console.log(`${this.name} makes a noise`);
//   }
// }


// //Child class inherit from animal class

// class Dog extends Animnal {
//     constructor(name, breed) {
//         super(name); // call the super class constructor and pass in the name parameter

//         this.breed = breed;
//     }
//     //Overriding the parnet methord

//     speak() {
//         console.log(`${this.name}, the ${this.breed}, barks.`);
//     }
// }


// //create Instance 

// const animal = new Animnal("generic Animal");
// animal.speak(); // generic Animal makes a noise

// const dog = new Dog("Bingo", "Husky");;
// dog.speak(); // Bingo, the Husky, barks.





//prototype in action   




// function vehicle(type) {
//     this.type = type;
// }


// vehicle.prototype.describe = function () {
//     console.log(`this is a ${this.type}.`);
// };

// //create an instance of the vehicle class



// const car = new vehicle('car');
// car.describe();


// const bike = new vehicle('bike');
// bike.describe();




