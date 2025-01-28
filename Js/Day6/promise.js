// function fetchData(callback) {
//     console.log("feteching the data ....");
//     setTimeout(() => {
//         const data = { id: 1, name: " Aruna" };
//         callback(data)
//     }, 2000)
// }

// function displayData(data) {
//     console.log("data recived :",data);
// }


// fetchData(displayData) 



// function fetchData() {
//     console.log("fetchinggg the dataaaa.... ");
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data = { id: 22, name: "thanu" }
//             resolve (data)
//         },2000)
//     })
// }



// fetchData()
//     .then(data => {
//     console.log("Data recived ", data );
//     })

//     .catch(error => {
//         console.log("An error was occured ", error);
//     })





// function fetchData() {
//   return new Promise((resolve, reject) => {
//     console.log("Fetching data...");
//     setTimeout(() => {
//       const data = { id: 3, name: "Sam Smith" };
//       resolve(data); // Resolving the promise with data
//     }, 2000);
//   });
// }

// async function displayData() {
//   try {
//     const data = await fetchData(); // Waiting for the promise to resolve
//     console.log("Data received:", data);
//   } catch (error) {
//     console.log("An error occurred:", error);
//   }
// }

// // Using the async function
// displayData();




// async function fetchingFolowers() {
//     try {
//         const response = await fetch("https://api.github.com/users/Arun-cloud-dev/followers")
//         const followers = await response.json();
//         console.log("folloqwers:" ,followers);
//     } catch (error) {
//         console.log("An Error message");
//     }
    
// }



// // fetchingFolowers();


// async function fetchFolowers() {
//     const apiUrl = "https://api.github.com/users/Arun-cloud-dev/followers"; 


//     try {
//         console.log("fetching the data .....");
//         const response = await fetch(apiUrl);
//         if (!response.ok) {
//             throw new Error (`Https error ststus: ${response.status} `)
//         }

//         const followers = await response.json();

//         followers.forEach(follower => {
//             console.log(`login : ${follower.login}`);
//             console.log(`Avatar url : ${follower.avatar_url}`);


//         })
//     } catch(error) {
//         console.log("an error has occured: " , error.message );
//     }
// }



// fetchFolowers();