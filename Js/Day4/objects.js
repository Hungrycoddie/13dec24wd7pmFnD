// const car = {
//     brand: "tesla",
//     model: "model S",
//     year : 2022,
// }



// console.log(car.brand);
// console.log(car.year);



// const car = {
//   brand: "tesla",
//   model: "model S",
//   year: 2022,
//   getDetails: function () {
//     return `${this.brand} ${this.model} ${this.year}`;
//   },
// };

// console.log(car.getDetails());




// const person = {
//   name: "Alice",
//   age: 25,
//   city: "New York",
// };


// const { name } = person


// console.log(person);
// console.log(name);



const person = {
  name: "Bob",
  age: 30,
  city: "Los Angeles"
};

// Rename variables
const { name: fullName, age: years } = person;

console.log(fullName); // Output: Bob
console.log(years);    // Output: 30