// ****** Call() *****

// let employee = {
//   fName: "Mahesh",
//   lName: "Raut",
//   fullName: function () {
//     console.log(this.fName + " " + this.lName);
//   },
// };

// // employee.fullName();

// let employee2 = {
//   fName: "Sachin",
//   lName: "Sharma",
// };

// // employee2.fullName();

// //apply call()
// employee.fullName.call(employee2);

// another way to use call()

// let employee = {
//   fName: "Mahesh",
//   lName: "Raut",
// };

// let fullName = function (hometown) {
//   console.log(this.fName + " " + this.lName + " From " + hometown);
// };

// fullName.call(employee, "Navi Mumbai");

// ***** apply() ******

// let employee = {
//   fName: "Mahesh",
//   lName: "Raut",
// };

// let fullName = function (hometown, state) {
//   console.log(
//     this.fName + " " + this.lName + " From " + hometown + ", " + state
//   );
// };

// fullName.apply(employee, ["solapur", "Maharashtra"]);

// ****** bind() *****
// It returns the copy of funtion which can be invoked later
let employee = {
  fName: "Mahesh",
  lName: "Raut",
};

let fullName = function (hometown, state) {
  console.log(
    this.fName + " " + this.lName + " From " + hometown + ", " + state
  );
};

let invokeLater = fullName.bind(employee, "Solapur", "Maharashtra");
// console.log(invokeLater);
// invokeLater();

// *** Currying ***
// let multiply = function (x, y) {
//   console.log(x * y);
// };

// using bind()
// multiply(2, 5);
// let multiplyByTwo = multiply.bind(this, 2); // here 2 referse to x in every case
// multiplyByTwo(6);

// using closure

// function multiply(x) {
//   return function (y) {
//     console.log(x * y);
//   };
// }

// let multiplyByTwo = multiply(2);
// console.log(multiplyByTwo);
// multiplyByTwo(4);

// setTimeout(() => {
//   console.log(1);
// }, 1000);
// setTimeout(() => {
//   console.log(2);
// }, 999);

// ***** Callback functions ******

function doSomething(callBack) {
  console.log("Task Done");
  callBack();
}

function callAfterTaskDone() {
  console.log("Ended");
}

// doSomething(callAfterTaskDone);

// fetching data from api
// "https://dummyjson.com/users/1"

// function fetchData(url, callBack) {
//   fetch(url)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Request failed with status: ", response.status);
//       }
//       return response.text();
//     })
//     .then((data) => {
//       callBack(null, data);
//     })
//     .catch((error) => {
//       callBack(error, null);
//     });
// }

// fetchData("https://dummyjson.com/users/n", function (error, data) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });

// **** Promises *******

// let promis = new Promise((resolve, reject) => {
//   let a = 1 + 7;
//   if (a == 2) {
//     resolve("Success!");
//   } else {
//     reject("Failed");
//   }
// });

// the (message) here is the argument passed in resolve/reject
// promis
//   .then((message) => {
//     console.log("Inside then: ", message);
//   })
//   .catch((message) => {
//     console.log("Inside catch: ", message);
//   });

// Another example

// function fetchUserData(userId) {
//   return new Promise((resolve, reject) => {
//     // applying delay
//     setTimeout(() => {
//       // assume this data is returned
//       const users = {
//         1: { id: 1, name: "Alice", email: "alice@example.com" },
//         2: { id: 2, name: "Bob", email: "bob@example.com" },
//       };
//       const user = users[userId];
//       if (user) {
//         resolve(user);
//       } else {
//         reject(new Error(`Can't find user with ID: ${userId}`));
//       }
//     }, 1000);
//   });
// }

// fetchUserData(1)
//   .then((user) => {
//     console.log("User: ", user);
//     fetchUserData(2);
//   })
//   .then((user) => {
//     console.log("User: ", user);
//   })
//   .catch((error) => {
//     console.log("User Not Found: ", error);
//   })
//   .finally(() => {
//     console.log("Finally will run regardless of resolve or reject");
//   });

// ---------- Local Storage --------

// localStorage.setItem("username", "Mahi");
// console.log(localStorage.getItem("Username"));

const user = {
  username: "",
  password: "",
};

console.log(user);

function setUser(username, password) {
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
}

function getUser() {
  user.username = localStorage.getItem("username");
  user.password = localStorage.getItem("password");
  return user;
}

setUser("Maddy", "Mahi@123");

// console.log(getUser("Madd"));
console.log(getUser());
