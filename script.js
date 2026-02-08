const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");

const song1 = document.getElementById("song1");
const song2 = document.getElementById("song2");

let noCount = 0;

// iOS audio unlock
document.body.addEventListener("click", () => {
  if (song1.paused && page1.classList.contains("active")) {
    song1.play();
  }
}, { once: true });

function goToPage(num) {
  [page1, page2, page3].forEach(p => p.classList.remove("active"));

  if (num === 2) {
    page2.classList.add("active");
    song1.pause();
    song2.play();
  }
  if (num === 3) {
    page3.classList.add("active");
    song2.pause();
    song3.play();
  }
}

// YES / NO logic
function yesClicked() {
  document.getElementById("proposalText").innerHTML =
    "YAYYYYY!!! 💖💖💖<br><br>This is officially OUR love story now 😘✨";
  launchConfetti();
}

function noClicked() {
  const noBtn = document.getElementById("noBtn");
  noCount++;

  if (noCount === 1) {
    noBtn.innerText = "Are you sure? 😶";
  } else {
    document.getElementById("proposalText").innerHTML =
      "Of course it’s a YES!!! 😍❤️<br><br>You’re stuck with me forever 😘";
    noBtn.style.display = "none";
    launchConfetti();
  }
}

/* CONFETTI */
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
let confetti = [];

function launchConfetti() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  for (let i = 0; i < 150; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 5 + 2
    });
  }

  animateConfetti();
}

function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confetti.forEach((c, i) => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fillStyle = ["#ff4d8d", "#c77dff", "#ffd6ff"][i % 3];
    ctx.fill();

    c.y += c.d;
    if (c.y > canvas.height) c.y = -10;
  });

  requestAnimationFrame(animateConfetti);
}
