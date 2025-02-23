function sayMyName() {
  console.log("M");
  console.log("A");
  console.log("H");
  console.log("I");
}

// sayMyName(); //calling the function
// sayMyName; //reference

// function add(num1, num2) {
//   console.log(num1 + num2);
// }

// add(3, 4);
// add(5, "t"); // 5t

function add(num1, num2) {
  let result = num1 + num2;
  return result;
}

let sum = add(50, 10);
// console.log(sum);

function loginUser(userName) {
  if (!userName) {
    console.log("Please provide username");
    return;
  }
  return `welcome ${userName}`;
}

// console.log(loginUser("mahi"));
// console.log(loginUser(""));

// rest operator
function calculatePrice(...num1) {
  // rest operator combise all araguments into an array
  return num1;
}

console.log(calculatePrice(12, 20, 40, 50));
