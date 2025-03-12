const url = "https://api.github.com/users/mahesh-raut45";
let data = null;

// getching data from url
const xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.onreadystatechange = function () {
  //   console.log(xhr.readyState);
  if (xhr.readyState === 4) {
    console.log(this.responseText);
    data = JSON.parse(this.responseText);
    console.log(data.name);
  }
};
xhr.send();

setTimeout(() => {
  showData();
}, 100);

function showData() {
  const img = document.querySelector(".img");
  img.innerHTML = `<img src=${data.avatar_url} /> `;

  document.querySelector("#username").textContent = data.name;
}
