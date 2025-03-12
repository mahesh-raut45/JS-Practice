// generate random color

const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// console.log(Math.floor(Math.random() * 16));

const body = document.body;
let intervalId;

// set event listener for start
document.querySelector("#start").addEventListener("click", () => {
  //   if interval is null then only start interval
  if (!intervalId) {
    console.log("Started");
    intervalId = setInterval(changeColor, 1000);
  }
});

// change color function
const changeColor = () => {
  body.style.backgroundColor = randomColor();
  console.log(randomColor());
};

// set event listner for stop
document.querySelector("#stop").addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
  console.log("Stopped");
});
