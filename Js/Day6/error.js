// try {
//   // Code that may throw an error
// } catch (error) {
//   // Code to handle the error
// } finally {
//   // Code that will always execute, regardless of an error
// }



// try {
//     let x = 10 / 30;
//     console.log(x);
// }



// try {
//     let result = JSON.parse("{invalid json}")
// } catch (error) {
//     console.log("an Error has occured ", error.message);
// } finally {
//     console.log("this alwasy exicutes ");
// }

// try {
//   let num = 5;
//   console.log(num);
// } finally {
//   console.log("This will always run.");
// }


// try {
//     try {
//         throw new Error("inner Error")
//     } catch (innerError){
//         console.log("Handle Inner error ", innerError.message);
//     }
// } catch (outerError) {
//     console.log("Handled Outer Error " . outerError.message);
    
// }



// try {
//     throw new Error("coutom error message ")
// } catch (error) {
//     console.log("caught error ", error.message);
// }


// function parseUserInput(input) {
//   try {
//     // Attempt to parse the JSON string
//     let data = JSON.parse(input);
//     console.log("Parsed Data:", data);
//   } catch (error) {
//     // Handle any errors that occur during parsing
//     console.log("Error occurred while parsing JSON:", error.message);
//   } finally {
//     // Code that always runs, even if there's an error
//     console.log("Parsing attempt completed.");
//   }
// }

// // Simulating valid JSON input
// console.log("Valid JSON:");
// parseUserInput('{"name": "John", "age": 30}');

// console.log("\nInvalid JSON:");
// parseUserInput("{invalid json}");






//handle error