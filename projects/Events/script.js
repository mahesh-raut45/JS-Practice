const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const grandChild = document.querySelector(".grandChild");

// bubbling from child to parent
// if clicked on child - child event listner will fire and then parents listener
// parent.addEventListener(
//   "click",
//   (e) => {
//     console.log("Parents clicked");
//   },
//   false
// );

// child.addEventListener(
//   "click",
//   (e) => {
//     console.log("child clicked");
//   },
//   false
// );
// grandChild.addEventListener(
//   "click",
//   (e) => {
//     console.log("grandChild clicked");
//     e.stopPropagation(); //stops the event propogation - bubbling up
//   },
//   false
// );

// bubbling from parent to child
// if clicked on child - parents event listner will fire and then child listener

// parent.addEventListener(
//   "click",
//   (e) => {
//     console.log("Parents clicked");
//   },
//   true
// );

// child.addEventListener(
//   "click",
//   (e) => {
//     console.log("child clicked");
//   },
//   true
// );

// grandChild.addEventListener(
//   "click",
//   (e) => {
//     console.log("grandChild clicked");
//   },
//   true
// );

// remove element

parent.addEventListener("click", (e) => {
  console.log(e.target);
  e.target.remove();
});
