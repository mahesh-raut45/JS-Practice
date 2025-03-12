//  ***** SetTimeout *****

// setTimeout(function () {
//   console.log("Mahesh");
// }, 2000);

const sayMyName = function () {
  console.log("Mahesh");
};

// setTimeout(sayMyName, 2000);

// const h1 = document.querySelector("h1");

// const headingChange = setTimeout(() => {
//   h1.innerText = "Hello World";
// }, 2000);

// document.querySelector("#stop").addEventListener("click", () => {
//   clearTimeout(headingChange);
//   console.log("Timer Stopped");
// });

// ***** SetInterval *****
let intervalId = null;

const intervalCall = (str) => {
  console.log(str, "Mahesh");
};

document.querySelector("#start").addEventListener("click", () => {
  intervalId = setInterval(intervalCall, 1000, "Hello");
});

document.querySelector("#stop").addEventListener("click", () => {
  clearInterval(intervalId);
  console.log("Interval Stoppped");
});
// clearInterval(intevalId);
