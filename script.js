function toggleTheme(){
    document.body.classList.toggle("light-mode");
}

// Ensure AOS loads properly
document.addEventListener("DOMContentLoaded", function(){
    AOS.init({
        duration: 1000,
        once: true
    });
});

// Typing Effect
const text = ["Web Developer", "PHP Developer", "Frontend Developer"];

let i = 0;          // word index
let j = 0;          // letter index
let current = "";
let isDeleting = false;

function type() {
  current = text[i];

  if (isDeleting) {
    j--;
  } else {
    j++;
  }

  document.getElementById("typing").innerHTML = current.substring(0, j);

  let speed = isDeleting ? 60 : 100;

  // When word is fully typed
  if (!isDeleting && j === current.length) {
    speed = 1500;   // pause at full word
    isDeleting = true;
  }

  // When word is fully deleted
  else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % text.length;
    speed = 500;    // pause before typing next word
  }

  setTimeout(type, speed);
}

type();

// AOS Init
AOS.init({
  duration: 1000,
  once: true
});