// Write a function that takes a string as input and returns the string reversed.

function reverseString(str) {
  let revStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str.charAt(i);
  }
  console.log(revStr);
  return revStr;
}

// reverseString("Mahi");

// 2 - Write a function that checks whether a given string is a palindrome.

function checkPalindrom(str) {
  str = str.toLowerCase().trim();
  str = str.split(" ").join("");
  let revStr = reverseString(str);
  //   for (let i = 0; i < str.length; i++) {
  //     if (str.charAt(i) !== revStr.charAt(i)) {
  //       return false;
  //     }
  //   }
  if (str !== revStr) return false;
  return true;
}

// console.log("Is palindrom: ", checkPalindrom("n iti n"));

// Asynchronous JavaScript - Callbacks vs Promises

function fetchData(callback) {
  setTimeout(() => {
    const data = { name: "John", age: 30 };
    callback(data);
  }, 2000);
}

// fetchData((data) => {
//   console.log("Data fetched:", data);
// });

//   using promise

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { name: "John", age: 30 };
      resolve(data);
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log("Data fetched:", data);
    data.age++;
    return data;
  })
  .then((updatedData) => {
    console.log("Updated Data fetched:", updatedData);
    updatedData.name = "Mahi";
    return updatedData;
  })
  .then((updatedData) => {
    console.log(updatedData);
  });
