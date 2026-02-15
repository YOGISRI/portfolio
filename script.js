function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

const phrases = [
  "Building modern web experiences with clean code.",
  "Turning ideas into interactive applications.",
  "Passionate about full stack development."
];

let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;

function loop() {
  const element = document.getElementById("animated-text");
  element.innerHTML = currentPhrase.join("");

  if (!isDeleting && j <= phrases[i].length) {
    currentPhrase.push(phrases[i][j]);
    j++;
  }

  if (isDeleting && j > 0) {
    currentPhrase.pop();
    j--;
  }

  if (j === phrases[i].length) {
    isDeleting = true;
    setTimeout(loop, 1200);
    return;
  }

  if (isDeleting && j === 0) {
    currentPhrase = [];
    isDeleting = false;
    i = (i + 1) % phrases.length;
  }

  setTimeout(loop, isDeleting ? 40 : 80);
}

loop();
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("successMsg").innerText =
    "✅ Message sent successfully!";
  this.reset();
});
