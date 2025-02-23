// const parent = document.querySelector(".parent");
// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[0]);
// console.log(parent.children[0].innerHTML);

// for (let i = 0; i < parent.children.length; i++) {
//   console.log(parent.children[i].innerHTML);
// }

// first and last child elements
// console.log("first child element:", parent.firstElementChild);
// console.log("last child element:", parent.lastElementChild);

const child = document.querySelector(".day");
// console.log(child.parentElement.innerText);
// console.log(child.parentElement.innerHTML);
// console.log(child.parentElement.innerContent);
// console.log(child.nextElementSibling);
// console.log("Nodes:", parent.childNodes);

// create elements

// function createDiv(text, bgColor, color) {
//   const div = document.createElement("div");
//   console.log(div);
//   div.className = "container";
//   div.id = Math.round(Math.random() * 10 + 1);
//   // div.innerText = "Hello JavaScript";
//   const textNode = document.createTextNode(text);
//   div.appendChild(textNode);
//   div.style.backgroundColor = bgColor;
//   div.style.color = color;
//   div.style.padding = "15px";
//   div.style.margin = "10px";
//   div.style.textAlign = "center";
//   div.style.borderRadius = "12px";

//   document.body.appendChild(div);
// }

// createDiv("Hello JavaScript", "orange", "black");
// createDiv("My Name is Mahesh Raut", "blue", "white");
// createDiv("I am a Software Developer", "green", "white");

// function addlanguage(langName) {
//   const li = document.createElement("li");
//   li.innerHTML = ` ${langName}`;
//   document.querySelector(".language").appendChild(li);
// }

function addlanguageOptimized(langName) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(langName));
  document.querySelector(".language").appendChild(li);
}

// addlanguage("Java");
// addlanguage("HTML");

addlanguageOptimized("DSA");

// edit

const secondElement = document.querySelector("li:nth-child(2)");
// console.log(secondElement);
const newLi = document.createElement("li");
newLi.textContent = "Java";
secondElement.replaceWith(newLi);

// counter
const playPauseBtn = document.getElementById("play_puase_btn");
const resetBtn = document.getElementById("reset-btn");
const counterValue = document.querySelector(".counter");

let counter = 5;
let initialCounter = 5;
let myInterval;
let isPaused = true;

counterValue.innerHTML = counter;

playPauseBtn.addEventListener("click", () => {
  console.log("play clicked");

  if (isPaused) {
    playPauseBtn.innerText = "Pause";
    startCounter(counter);
  } else {
    playPauseBtn.innerText === "Play";
    pauseCounter();
  }
});

resetBtn.addEventListener("click", () => {
  clearInterval(myInterval);
  counter = initialCounter;
  counterValue.innerHTML = counter;
  playPauseBtn.innerText = "Play";
  isPaused = true;
});

function startCounter(counter) {
  isPaused = false;
  clearInterval(myInterval);

  myInterval = setInterval(() => {
    if (!isPaused && counter > 0) {
      counterValue.innerHTML = --counter;
    }
    if (counter == 0) {
      clearInterval(myInterval);
      playPauseBtn.innerText = "Play";
      isPaused = true;
    }
  }, 1000);
}

function pauseCounter() {
  isPaused = true;
  clearInterval(myInterval);
}
