const CORRECT_PIN = "031821";
let pinArray = ["", "", "", "", "", ""];
let activeIndex = 0;
let isAngryMode = false; // Tracks if we have switched to the Tantrum GIF

const boxes = document.querySelectorAll(".otp-box");
const card = document.getElementById("main-card");
const gifContainer = document.getElementById("gif-container");

updateActiveBox();

// 1. CLICK TO SELECT BOX
boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    activeIndex = index;
    updateActiveBox();
  });
});

// 2. KEYBOARD LISTENER
document.addEventListener("keydown", (e) => {
  if (e.key >= "0" && e.key <= "9") {
    handleInput(e.key);
  } else if (e.key === "Backspace") {
    handleDelete();
  }
});

// 3. ON-SCREEN KEYPAD
document.getElementById("keypad").addEventListener("click", (e) => {
  const btn = e.target.closest(".key-btn");
  if (btn) handleInput(btn.value);
});

document.getElementById("clear-btn").addEventListener("click", handleDelete);

function handleInput(num) {
  if (activeIndex < 6) {
    // TRIGGER THE POPS: Sweet if first time, Angry if already failed once
    if (!isAngryMode) {
      createSweetPop();
    } else {
      createTantrumText(getRandomPhrase()); // Individual pop while typing
    }

    pinArray[activeIndex] = num;
    updateDisplay();

    if (activeIndex < 5) {
      activeIndex++;
    } else {
      checkPassword();
    }
    updateActiveBox();
  }
}

function handleDelete() {
  if (pinArray[activeIndex] === "" && activeIndex > 0) {
    activeIndex--;
  }
  pinArray[activeIndex] = "";
  updateDisplay();
  updateActiveBox();
}

function updateDisplay() {
  boxes.forEach((box, i) => {
    box.textContent = pinArray[i] !== "" ? pinArray[i] : "";
    if (pinArray[i] !== "") {
      box.classList.add("border-pink-500");
    } else {
      box.classList.remove("border-pink-500");
    }
  });
}

function updateActiveBox() {
  boxes.forEach((box, i) => {
    if (i === activeIndex) {
      box.classList.add("active");
      box.focus();
    } else {
      box.classList.remove("active");
    }
  });
}

function checkPassword() {
  const finalPin = pinArray.join("");
  if (finalPin === CORRECT_PIN) {
    showSuccessModal();
  } else {
    triggerWrongState();
  }
}

// --- SWEET POP LOGIC (Initial State) ---
let isPrettyBaby = true;
function createSweetPop() {
  if (isAngryMode) return; // Stop these if she's mad
  const pop = document.createElement("div");
  pop.className = "sweet-pop-text";
  pop.textContent = isPrettyBaby ? "pretty little baby ✨" : "nya nya! 🐾";
  isPrettyBaby = !isPrettyBaby;
  pop.style.left = Math.random() * 40 + 5 + "%";
  pop.style.top = Math.random() * 60 + 20 + "%";
  document.body.appendChild(pop);
  setTimeout(() => pop.remove(), 2000);
}
setInterval(createSweetPop, 3000);

// --- ANGRY POP LOGIC (Persistent State) ---
const phrases = [
  "You don't love me! 😤",
  "You forgot? 🥺",
  "Hmp! 😠",
  "Wrong! ❌",
  "Try harder! 🙄",
  "How could you! 💔",
];
function getRandomPhrase() {
  return phrases[Math.floor(Math.random() * phrases.length)];
}

function triggerWrongState() {
  // Switch to Angry Mode permanently if not already
  if (!isAngryMode) {
    isAngryMode = true;
    gifContainer.innerHTML = `
        <div class="tenor-gif-embed" data-postid="15640887683992982289" data-share-method="host" data-aspect-ratio="1" data-width="100%">
            <a href="https://tenor.com/view/cat-d%E1%BB%97i-gif-15640887683992982289">Cat Dỗi GIF</a>
        </div>`;
    reloadTenor();
  }

  card.classList.add("shake");
  setTimeout(() => card.classList.remove("shake"), 400);

  // Big Burst of tantrum messages because the whole PIN was wrong
  for (let i = 0; i < 12; i++) {
    setTimeout(() => {
      createTantrumText(getRandomPhrase());
    }, i * 100);
  }

  // Clear boxes so they can try again immediately
  setTimeout(() => {
    pinArray = ["", "", "", "", "", ""];
    activeIndex = 0;
    updateDisplay();
    updateActiveBox();
  }, 1000);
}

function createTantrumText(text) {
  const pop = document.createElement("div");
  pop.className = "tantrum-text";
  pop.textContent = text;
  pop.style.left = Math.random() * 80 + 10 + "%";
  pop.style.top = Math.random() * 80 + 10 + "%";
  document.body.appendChild(pop);
  setTimeout(() => pop.remove(), 2000);
}

// Keep the tantrum texts popping randomly in the background once angry
setInterval(() => {
  if (isAngryMode) createTantrumText(getRandomPhrase());
}, 4000);

// --- SUCCESS LOGIC ---
function showSuccessModal() {
  const modal = document.getElementById("success-modal");
  modal.classList.remove("hidden");
  reloadTenor();

  let count = 0;
  const interval = setInterval(() => {
    createMwuah(document.getElementById("mwuah-rain-container"));
    count++;
    if (count >= 15) clearInterval(interval);
  }, 200);

  setTimeout(() => {
    window.location.href = "home.html";
  }, 4500);
}

function createMwuah(container) {
  const mwuah = document.createElement("div");
  mwuah.className = "mwuah-text";
  mwuah.textContent = "mwuah!";
  mwuah.style.left = Math.random() * 80 + 10 + "%";
  mwuah.style.top = Math.random() * 80 + 10 + "%";
  container.appendChild(mwuah);
  setTimeout(() => mwuah.remove(), 800);
}

function reloadTenor() {
  const oldScript = document.querySelector('script[src*="tenor.com/embed.js"]');
  if (oldScript) oldScript.remove();
  const newScript = document.createElement("script");
  newScript.src = "https://tenor.com/embed.js";
  document.body.appendChild(newScript);
}