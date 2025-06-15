const hero = document.getElementById("hero");
const images = [
  "images/background1.jpg",
  "images/background2.jpg",
  "images/background3.jpg",
  "images/background4.jpg"
];
let i = 0;

function rotateBackground() {
  hero.style.backgroundImage = `url('${images[i]}')`;
  i = (i + 1) % images.length; // Change the index to the next image, looping back to 0
}

// Initial background image
rotateBackground();

// Change background image every 5 seconds
setInterval(rotateBackground, 5000);

function handleBooking(page) {
  const loggedIn = localStorage.getItem("isLoggedIn") === "true";
  if (loggedIn) {
    window.location.href = page;
  } else {
    window.location.href = "login.html";
  }
}

