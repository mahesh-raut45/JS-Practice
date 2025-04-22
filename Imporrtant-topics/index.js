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

function fetchData(url, callBack) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Request failed with status: ", response.status);
      }
      return response.text();
    })
    .then((data) => {
      callBack(null, data);
    })
    .catch((error) => {
      callBack(error, null);
    });
}

fetchData("https://dummyjson.com/users/n", function (error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
