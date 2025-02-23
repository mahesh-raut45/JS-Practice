const accId = 112233;
// let name = "Mahesh";
var password = 122345;
city = "Mumbai";
let email;

// console.table([accId, name, password, city]);

function example() {
  if (true) {
    let x = 10;
    // x = 22; // we can reassign the let variable
    console.log(x);
  }
  // console.log(x); //let cannot be accessed outside the block.
}
// console.log(x);

// example();

// Strings
// 1 way to declare string
let name = "Mahi";
console.log(name);
console.log(name.length);

// Another way to declare string
const myName = new String("Mahesh");
console.log(myName.toUpperCase()); // Here original string is not changed

name = "Kuldip"; // here new object is created and assigned to name.
console.log(name);
