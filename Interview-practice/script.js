function frequencyCounter(str) {
  const obj = {};

  for (const ch of str) {
    // console.log(str[ch]);
    if (obj[ch]) {
      obj[ch]++;
    } else {
      obj[ch] = 1;
    }
  }
  console.log(obj);
  return obj;
}

// const freqObj = frequencyCounter("Interview Prep");

// -----Clousers

function createCounter() {
  let a = 1;
  return function () {
    return a++;
  };
}

const counter1 = createCounter();
const counter2 = createCounter();
// console.log(counter1());
// console.log(counter1());
// console.log(counter2());
// console.log(counter2());

function createFunctions() {
  const arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }

  return arr;
}

// const funcs = createFunctions();
// funcs[0](); // ?
// funcs[1](); // ?
// funcs[2](); // ?

// for (let i = 1; i <= 3; i++) {
//   setTimeout(function () {
//     console.log("Timer: " + i);
//   }, i * 1000);
// }

// for (let i = 1; i <= 3; i++) {
//   setInterval(function () {
//     console.log("Interval: " + i);
//   }, i * 1000);
// }
