const images = [
  {
    src: "https://images.unsplash.com/photo-1526034332220-067b0f400e06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGlnZXJ8ZW58MHx8MHx8fDA%3D",
    name: "tiger",
  },
  {
    src: "https://images.unsplash.com/photo-1516642499105-492ff3ac521b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    name: "lion",
  },
  {
    src: "https://images.unsplash.com/photo-1476922027627-aa7293e3aaa8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVlcnxlbnwwfHwwfHx8MA%3D%3D",
    name: "deer",
  },
  {
    src: "https://images.unsplash.com/photo-1648402279767-cf3e3721508e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vbmtleXxlbnwwfHwwfHx8MA%3D%3D",
    name: "monkey",
  },
];

let currentIndex = 0;
let totalImages = images.length;

const image = document.getElementById("img");
const loader = document.querySelector(".loader");
const caption = document.querySelector(".description");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

// loader.style.display = none;

prevBtn.addEventListener("click", previousImageCard);
nextBtn.addEventListener("click", nextImageCard);

loadImageCard(currentIndex);

function previousImageCard() {
  if (currentIndex > 0) {
    currentIndex--;
    loadImageCard(currentIndex);
  }
}

function nextImageCard() {
  if (currentIndex < totalImages - 1) {
    currentIndex++;
    loadImageCard(currentIndex);
  }
}

function showLoader() {
  image.style.display = "none";
  caption.style.display = "none";
  loader.style.display = "block";
}

function hideLoader() {
  image.style.display = "block";
  caption.style.display = "block";
  loader.style.display = "none";
}

function loadImageCard(currentIndex) {
  showLoader();
  setTimeout(() => {
    image.src = images[currentIndex].src;
    caption.textContent = images[currentIndex].name;
    hideLoader();
  }, 1000);
}
