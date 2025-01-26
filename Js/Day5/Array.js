// Array accesssing the arrauy     



// //create a array

// const fruits = ["apple", "banana", "mango", "orange", "grapes","cherry"];


// //accessing the array element using index


// console.log(fruits[2]);

// console.log(fruits[5]);



// fruits[3] = "kiwi";

// console.log(fruits);



//common array metyhods 

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// numbers.push(11);
// numbers.push(12); //add element at the end of the array
// console.log(numbers);


// pop()



// numbers.pop(); //remove the last element from the array





// const items = ['pen', 'book', 'laptop', 'phone', 'charger', 'headphone'];

// const lastItem = items.pop();
// console.log(items);

// console.log(lastItem);

// //shift() and unshift()


// const colors = ["Red", "Green", "Blue"];
// const firstColor = colors.shift();
// console.log(colors); // Output: ["Green", "Blue"]
// console.log(firstColor); // Output: Red
// console.log(colors);


// const animals = ["Cat", "Dog"];
// animals.unshift("Elephant", "Tiger");
// console.log(animals); // Output: ["Elephant", "Tiger", "Cat", "Dog"]




// Map()



// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const squareNumbers = numbers.map(num => num * num);

// console.log(squareNumbers);


// filter()


// const ages = [1,4,56,20, 30, 40, 50, 60, 70, 80, 90, 100];

// const adult = ages.filter(age => age >= 18);
// console.log(adult);


// // reduce();
// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce((total, num) => total + num, 0);
// console.log(sum); // Output: 10


// //  forEach();

// const fruits = ["Apple", "Banana", "Cherry"];
// fruits.forEach(fruit => console.log(fruit));
// // Output:
// // Apple
// // Banana
// // Cherry

// //multidimensional array    

// const matrix = [1, 2, 3, 4, [5, 6, 7, [8, 45, 55, 66, [77, 888, 999], 9, 10]]]

// const martix = [1,2,3 , [4,5,6]]

// console.log(martix[3][2]);



// console.log(matrix [4][3][5]);



// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];



// Iterating over a multidimensional array
// for (let row of matrix) {
//   for (let value of row) {
//     console.log(value);
//   }
// }
// Output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
