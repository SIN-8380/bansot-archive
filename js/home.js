let player;
let isPlaying = false;
let isLooping = false;
let progressInterval;
let currentSongId = "vTyJmM_nPxY";

// SONG SECTION
const songDatabase = {
  vTyJmM_nPxY: {
    title: "When I Met You",
    artist: "APO Hiking Society",
    message:
      "When I Met You.’ I remember I told you before that I didn’t feel much about anything—that I didn’t care whether I went to heaven or hell, or even what hell was. But somewhere along our journey, something changed. Hearing this song now, I realize that meeting you made me start clinging to life, start learning to feel. Every laugh, every fight, every quiet moment… it all taught me that I’m capable of caring, of loving, of being alive in a way I never was before. And somehow, this song captures all of that.",
    lyrics: [
      { time: 16.0, text: "There I was an empty piece of a shell" },
      { time: 22.0, text: "Just mindin' my own world" },
      {
        time: 24.5,
        text: "Without even knowin' what love and life were all about",
      },
      { time: 29.5, text: "Then you came" },
      { time: 32.0, text: "You brought me out of the shell" },
      { time: 35.0, text: "You gave the world to me" },
      { time: 38.0, text: "And before I knew" },
      { time: 40.0, text: "There I was so in love with you" },

      { time: 46.0, text: "You gave me a reason for my being" },
      { time: 50.5, text: "And I love what I'm feelin'" },
      { time: 55.0, text: "You gave me a meaning to my life" },
      { time: 60.5, text: "Yes, I've gone beyond existing" },
      { time: 65.5, text: "And it all began when I met you" },

      { time: 71.5, text: "I love the touch of your hair" },
      { time: 74.5, text: "And when I look in your eyes" },
      { time: 77.5, text: "I just know, I know I'm on to something good" },
      { time: 82.5, text: "And I'm sure, my love for you will endure" },
      { time: 88.0, text: "Your love will light up my world" },
      {
        time: 90.5,
        text: "And take all my cares away with the aching part of me",
      },

      { time: 98.5, text: "You gave me a reason for my being" },
      { time: 102.5, text: "And I love what I'm feelin'" },
      { time: 107.5, text: "You gave me a meaning to my life" },
      { time: 112.5, text: "Yes, I've gone beyond existing" },
      { time: 117.5, text: "And it all began when I met you" },

      { time: 122.5, text: "You taught me how to love" },
      { time: 126.5, text: "You showed me how tomorrow and today" },
      { time: 129.5, text: "My life is diff'rent from the yesterday" },
      { time: 133.5, text: "And you, you taught me to how" },
      { time: 137.5, text: "And darling, I will always cherish you" },
      { time: 142.0, text: "Today, tomorrow and forever" },

      { time: 162.5, text: "And I'm sure when evening comes around" },
      { time: 167.5, text: "I know we'll be making love like never before" },
      { time: 172.5, text: "My love, who could ask for more?" },

      { time: 177.5, text: "You gave me a reason for my being" },
      { time: 182.0, text: "And I love what I'm feelin'" },
      { time: 187.5, text: "You gave me a meaning to my life" },
      { time: 192.0, text: "Yes, I've gone beyond existing" },
      { time: 196.5, text: "And it all began when I met you" },
      { time: 203.5, text: "When I met you" },

      { time: 206.0, text: "You gave me a reason for my being" },
      { time: 211.0, text: "And I love what I'm feelin'" },
      { time: 217.5, text: "You gave me a meaning to my life" },
      { time: 221.0, text: "Yes, I've gone beyond existing" },
      { time: 226.5, text: "And it all began when I met you" },
      { time: 240.0, text: "When I met you" },
    ],
  },
  Gv5_K0jImC4: {
    title: "Nothing's Gonna Stop Us Now",
    artist: "Starship",
    message:
      "I was listening to ‘Nothing’s Gonna Stop Us Now,’ and it struck me differently this time. It reminds me of everything we’ve been through—the challenges, the fights, the moments we thought we might break—but somehow, here we are. The song still carries that feeling of strength and togetherness, of handling whatever comes our way, and I can’t help but think of us every time I hear it.",
    lyrics: [
      { time: 21.5, text: "Lookin' in your eyes, I see a paradise" },
      { time: 26.5, text: "This world that I found is too good to be true" },
      {
        time: 31.5,
        text: "Standin' here beside you, want so much to give you",
      },
      { time: 36.5, text: "This love in my heart that I'm feelin' for you" },

      { time: 42.5, text: "Let 'em say we're crazy, I don't care 'bout that" },
      {
        time: 47.5,
        text: "Put your hand in my hand, baby, don't ever look back",
      },
      { time: 52.5, text: "Let the world around us just fall apart" },
      { time: 57.5, text: "Baby, we can make it if we're heart to heart" },

      { time: 62.5, text: "And we can build this dream together" },
      { time: 66.5, text: "Standing strong forever" },
      { time: 69.5, text: "Nothing's gonna stop us now" },
      { time: 72.5, text: "And if this world runs out of lovers" },
      { time: 76.5, text: "We'll still have each other" },
      { time: 79.0, text: "Nothing's gonna stop us" },
      { time: 81.5, text: "Nothing's gonna stop us now" },

      { time: 89.5, text: "I'm so glad I found you, I'm not gonna lose you" },
      { time: 94.5, text: "Whatever it takes, I will stay here with you" },
      {
        time: 99.5,
        text: "Take it to the good times, see it through the bad times",
      },
      { time: 104.0, text: "Whatever it takes is what I'm gonna do" },

      { time: 110.0, text: "Let 'em say we're crazy" },
      { time: 112.5, text: "What do they know?" },
      { time: 114.5, text: "Put your arms around me" },
      { time: 116.5, text: "Baby, don't ever let go" },
      { time: 120.0, text: "Let the world around us just fall apart" },
      { time: 124.5, text: "Baby, we can make it if we're heart to heart" },

      { time: 130.5, text: "And we can build this dream together" },
      { time: 134.5, text: "Standing strong forever" },
      { time: 136.5, text: "Nothing's gonna stop us now" },
      { time: 140.5, text: "And if this world runs out of lovers" },
      { time: 143.5, text: "We'll still have each other" },
      { time: 146.5, text: "Nothing's gonna stop us" },
      { time: 149.5, text: "Nothing's gonna stop us" },

      { time: 152.5, text: "Ooh, all that I need is you" },
      { time: 159.5, text: "All that I ever need" },
      { time: 164.5, text: "And all that I want to do" },
      { time: 169.5, text: "Is hold you forever, forever and ever" },

      { time: 195.5, text: "And we can build this dream together" },
      { time: 199.0, text: "Standing strong forever" },
      { time: 201.5, text: "Nothing's gonna stop us now" },
      { time: 205.5, text: "And if this world runs out of lovers" },
      { time: 209.5, text: "We'll still have each other" },
      { time: 211.5, text: "Nothing's gonna stop us" },
      { time: 214.5, text: "Nothing's gonna stop us now" },

      { time: 215.5, text: "And we can build this dream together" },
      { time: 219.0, text: "Standing strong forever" },
      { time: 221.5, text: "Nothing's gonna stop us now" },
      { time: 226.5, text: "If this world runs out of lovers" },
      { time: 229.5, text: "We'll still have each other" },
      { time: 231.5, text: "Nothing's gonna stop us" },

      { time: 236.5, text: "And we can build this dream together" },
      { time: 239.5, text: "Standing strong forever" },
      { time: 241.5, text: "Nothing's gonna stop us now" },
      { time: 245.5, text: "If this world runs out of lovers" },
      { time: 249.5, text: "We'll still have each other" },
      { time: 251.5, text: "Nothing's gonna stop us" },

      { time: 254.5, text: "Nothing's gonna stop us now..." },
    ],
  },
  bKqPBt4zSVg: {
    title: "She",
    artist: "Ed Sheeran",
    message:
      "Some songs just know you, and this one reminded me of someone who knows me better than I know myself.",
    lyrics: [
      { time: 19.0, text: "I paid all my dues" },
      { time: 22.5, text: "And she wanted to know" },
      { time: 27.0, text: "That I’d never leave her" },
      { time: 31.0, text: "But now I’m ready to go" },
      { time: 37.0, text: "And strange as it seems" },
      { time: 41.0, text: "She’s endless to me" },
      { time: 46.5, text: "She’s just like paperwork" },
      { time: 50.5, text: "But harder to read" },

      { time: 54.5, text: "Patience's my enemy" },
      { time: 60.0, text: "And loving’s my friend" },
      { time: 63.0, text: "It’s harder to leave with my heart on my sleeve" },
      { time: 67.0, text: "Than to stay and just pretend" },
      { time: 71.0, text: "Oh, she knows me so well" },
      { time: 80.5, text: "Oh, she knows me like I know myself" },

      { time: 91.5, text: "I made all my plans" },
      { time: 96.0, text: "And as she has made hers" },
      { time: 100.0, text: "She kept me in mind" },
      { time: 105.0, text: "But I wasn’t sure" },
      { time: 110.0, text: "I searched every room" },
      { time: 113.5, text: "For a way to escape" },
      { time: 118.0, text: "But every time I tried to leave" },
      { time: 120.0, text: "She keeps holding on to me for dear life" },
      { time: 123.0, text: "And blocking my way" },

      { time: 128.0, text: "Patience's my enemy" },
      { time: 133.0, text: "And loving’s my friend" },
      { time: 136.0, text: "It’s harder to leave with my heart on my sleeve" },
      { time: 140.0, text: "Than to stay and just pretend" },
      { time: 144.0, text: "Oh, she knows me so well" },
      { time: 153.0, text: "Oh, she knows me like I know myself" },

      { time: 162.0, text: "And like the back of her hand" },
      { time: 164.0, text: "She already understands everything" },
      { time: 167.0, text: '"Won’t you stay?" She says' },
      { time: 173.0, text: "And she already knows how it goes" },
      { time: 175.0, text: "And where she stands" },
      { time: 176.0, text: "I’ll stay, anyway" },
      { time: 181.0, text: "Cause she knows me so well" },
      { time: 190.0, text: "Oh, she knows me like I know myself" },
      { time: 198.0, text: "Oh, she knows me so well" },
      { time: 207.0, text: "Oh, she knows me like I know myself" },
      { time: 214.0, text: "I know myself" },
      { time: 218.0, text: "Oh, she knows me like I know myself" },
      { time: 225.0, text: "I know myself" },
      { time: 231.0, text: "I know myself" },
      { time: 236.0, text: "I know myself" },
    ],
  },
  ZZMZiBCRX4c: {
    title: "How Would You Feel",
    artist: "Ed Sheeran",
    message:
      "It’s strange… you had this song on repeat when we were just starting out, and I didn’t even know it back then. Now, I’ve found it for the first time—after everything, after we broke up—and suddenly it carries all the memories we made, the moments I never realized I was holding onto. Funny how the same song can meet us at completely opposite times.",
    lyrics: [
      { time: 14.5, text: "You are the one girl" },
      { time: 18.0, text: "You know that it's true" },
      { time: 27.5, text: "I'm feeling younger" },
      { time: 31.0, text: "Every time that I'm alone with you" },

      { time: 41.0, text: "We were sitting in a parked car" },
      { time: 44.0, text: "Stealing kisses in the front yard" },
      { time: 48.5, text: "We got questions we should not ask" },
      { time: 51.5, text: "But how would you feel" },

      { time: 58.5, text: "If I told you I loved you" },
      { time: 65.5, text: "It's just something that I want to do" },
      { time: 72.5, text: "I'll be taking my time, spending my life" },
      { time: 79.5, text: "Falling deeper in love with you" },
      { time: 85.5, text: "Tell me that you love me too" },

      { time: 95.5, text: "In the summer as the light looks blue" },
      { time: 109.5, text: "Love flows deeper than the river" },
      { time: 112.5, text: "Every moment that I spend with you" },

      { time: 124.5, text: "We were sat upon our best friend's roof" },
      { time: 127.5, text: "I had both of my arms around you" },
      { time: 129.5, text: "Watching the sunrise replace the moon" },
      { time: 133.5, text: "How would you feel" },

      { time: 141.5, text: "If I told you I loved you" },
      { time: 147.5, text: "It's just something that I want to do" },
      { time: 154.5, text: "I'll be taking my time, spending my life" },
      { time: 161.5, text: "Falling deeper in love with you" },
      { time: 168.5, text: "Tell me that you love me too" },

      { time: 205.5, text: "We were sitting in a parked car" },
      { time: 209.5, text: "Stealing kisses in the front yard" },
      { time: 212.5, text: "We got questions we should not ask" },
      { time: 216.5, text: "How would you feel" },

      { time: 223.5, text: "If I told you I loved you" },
      { time: 230.5, text: "It's just something that I want to do" },
      { time: 237.0, text: "I'm taking my time, spending my life" },
      { time: 243.0, text: "Falling deeper in love with you" },

      { time: 251.0, text: "Tell me that you love me too" },
      { time: 258.0, text: "Tell me that you love me too" },
      { time: 264.0, text: "Tell me that you love me too" },
    ],
  },
};

var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  player = new YT.Player("youtube-player", {
    height: "1",
    width: "1",
    videoId: currentSongId,
    playerVars: {
      autoplay: 0,
      controls: 0,
      rel: 0,
      modestbranding: 1,
      enablejsapi: 1,
      origin: window.location.origin,
    },
    events: {
      onReady: () => {
        updateLyricsUI(currentSongId);
      },
      onStateChange: onPlayerStateChange,
    },
  });
}

function getSongList() {
  return Object.keys(songDatabase);
}

function loadSong(songId) {
  currentSongId = songId;
  const song = songDatabase[songId];
  if (!song) return;

  // Target by ID for accuracy
  const titleEl = document.getElementById("current-song-title");
  const artistEl = document.querySelector("p.text-gray-400");

  if (titleEl) {
    const words = song.title.split(" ");

    if (words.length > 1) {
      // For titles with multiple words
      const lastWord = words.pop();
      const mainTitle = words.join(" ");
      titleEl.innerHTML = `${mainTitle} <span class="handwritten text-pink-500 lowercase block mt-1">${lastWord}</span>`;
    } else {
      // For single word titles like "She"
      titleEl.innerHTML = `<span class="handwritten text-pink-500 lowercase block mt-1">${song.title}</span>`;
    }
  }

  if (artistEl) {
    artistEl.textContent = song.artist;
  }

  updateLyricsUI(songId);

  if (player && typeof player.loadVideoById === "function") {
    const progressBar = document.getElementById("progress-bar");
    if (progressBar) progressBar.style.width = "0%";

    const currentTimeEl = document.getElementById("current-time");
    if (currentTimeEl) currentTimeEl.innerText = "0:00";

    player.loadVideoById(songId);
    player.playVideo();
  }
}

function updateLyricsUI(songId) {
  const song = songDatabase[songId];
  const wrapper = document.getElementById("lyrics-wrapper");
  if (!wrapper || !song) return;

  wrapper.innerHTML = "";
  song.lyrics.forEach((line) => {
    const p = document.createElement("p");
    p.className =
      "lyric-line text-2xl md:text-3xl font-bold leading-relaxed break-words whitespace-normal";
    p.setAttribute("data-time", line.time);
    p.textContent = line.text;
    wrapper.appendChild(p);
  });
  wrapper.scrollTop = 0;
}

function toggleLoop() {
  isLooping = !isLooping;
  const loopBtn = document.getElementById("loop-btn");

  if (isLooping) {
    // Make the button pink when active
    loopBtn.classList.remove("text-gray-400");
    loopBtn.classList.add("text-pink-500");
  } else {
    // Return to gray when inactive
    loopBtn.classList.remove("text-pink-500");
    loopBtn.classList.add("text-gray-400");
  }
}

function onPlayerStateChange(event) {
  const playIcon = document.getElementById("play-icon");

  if (event.data == YT.PlayerState.PLAYING) {
    isPlaying = true;
    if (playIcon)
      playIcon.innerHTML = `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`;
    startSync();
  } else if (event.data == YT.PlayerState.ENDED) {
    if (isLooping) {
      // Restart the current song
      player.seekTo(0);
      player.playVideo();
    } else {
      // Go to the next song in the playlist
      changeSong("next");
    }
  } else {
    isPlaying = false;
    if (playIcon) playIcon.innerHTML = `<path d="M8 5v14l11-7z"/>`;
    stopSync();
  }
}

function changeSong(direction) {
  const songList = getSongList();
  let currentIndex = songList.indexOf(currentSongId);
  if (currentIndex === -1) currentIndex = 0;

  if (direction === "next") {
    currentIndex = (currentIndex + 1) % songList.length;
  } else {
    currentIndex = (currentIndex - 1 + songList.length) % songList.length;
  }

  const nextSongId = songList[currentIndex];
  loadSong(nextSongId);

  const nextItem = document.querySelector(
    `.playlist-item[data-song-id="${nextSongId}"]`,
  );
  if (nextItem) updatePlaylistUI(nextItem);
}

function updatePlaylistUI(selectedItem) {
  const container = document.getElementById("playlist-container");
  if (!container) return;

  container.prepend(selectedItem);

  const allItems = container.querySelectorAll(".playlist-item");
  allItems.forEach((item, index) => {
    const indexTag = item.querySelector(".index-tag");
    const titleText = item.querySelector("span");
    const displayNum = (index + 1).toString().padStart(2, "0");

    if (index === 0) {
      item.className =
        "playlist-item cursor-pointer flex items-center gap-3 p-3 bg-white border border-pink-100 rounded-xl shadow-sm";
      if (indexTag) {
        indexTag.className =
          "index-tag w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center text-white text-[10px] font-bold shadow-inner";
        indexTag.textContent = displayNum;
      }
      if (titleText) titleText.className = "text-xs font-bold text-gray-800";
    } else {
      item.className =
        "playlist-item cursor-pointer flex items-center gap-3 p-3 bg-white/40 border border-white/60 rounded-xl hover:bg-white/80 transition-all";
      if (indexTag) {
        indexTag.className =
          "index-tag w-8 h-8 bg-pink-100/50 rounded-lg flex items-center justify-center text-pink-400 text-[10px] font-bold";
        indexTag.textContent = displayNum;
      }
      if (titleText) titleText.className = "text-xs font-bold text-gray-600";
    }
  });
}

function startSync() {
  clearInterval(progressInterval);
  progressInterval = setInterval(() => {
    if (!player || !isPlaying) return;
    const current = player.getCurrentTime();
    const total = player.getDuration();

    const progressBar = document.getElementById("progress-bar");
    if (progressBar && total > 0)
      progressBar.style.width = (current / total) * 100 + "%";

    const currentTimeEl = document.getElementById("current-time");
    if (currentTimeEl) {
      const mins = Math.floor(current / 60);
      const secs = Math.floor(current % 60)
        .toString()
        .padStart(2, "0");
      currentTimeEl.innerText = `${mins}:${secs}`;
    }

    const durationEl = document.getElementById("duration");
    if (durationEl && total > 0) {
      const dMins = Math.floor(total / 60);
      const dSecs = Math.floor(total % 60)
        .toString()
        .padStart(2, "0");
      durationEl.innerText = `${dMins}:${dSecs}`;
    }
    syncLyrics(current);
  }, 500);
}

function stopSync() {
  clearInterval(progressInterval);
}

function syncLyrics(currentTime) {
  const lyricLines = document.querySelectorAll(".lyric-line");
  const lyricsWrapper = document.getElementById("lyrics-wrapper");
  if (!lyricsWrapper || lyricLines.length === 0) return;

  lyricLines.forEach((line, index) => {
    const startTime = parseFloat(line.getAttribute("data-time"));
    const nextLine = lyricLines[index + 1];
    const endTime = nextLine
      ? parseFloat(nextLine.getAttribute("data-time"))
      : 999;

    if (currentTime >= startTime && currentTime < endTime) {
      if (!line.classList.contains("active")) {
        lyricLines.forEach((l) => l.classList.remove("active"));
        line.classList.add("active");

        const containerHeight = lyricsWrapper.offsetHeight;
        lyricsWrapper.scrollTo({
          top: line.offsetTop - containerHeight / 2 + line.offsetHeight / 2,
          behavior: "smooth",
        });
      }
    }
  });
}

function showSongMessage() {
  const song = songDatabase[currentSongId];
  const modal = document.getElementById("message-modal");
  const card = document.getElementById("modal-card");
  const messageEl = document.getElementById("modal-message");

  if (typeof confetti !== "function") {
    console.error("Confetti library not loaded yet");
    return;
  }

  if (song && modal && messageEl) {
    messageEl.textContent = song.message || "I love this song!";
    modal.classList.remove("hidden");

    setTimeout(() => {
      card.classList.remove("scale-95", "opacity-0");
      card.classList.add("scale-100", "opacity-100");

      try {
        const heart = confetti.shapeFromPath({
          path: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
        });

        const fire = (particleRatio, opts) => {
          confetti({
            ...opts,
            origin: { y: 0.7 },
            particleCount: Math.floor(60 * particleRatio),
            shapes: [heart, "circle"],
            zIndex: 9999,
            scalar: 2,
          });
        };

        fire(0.25, { spread: 26, startVelocity: 55, colors: ["#ff69b4"] });
        fire(0.2, { spread: 60, colors: ["#ff1493"] });
        fire(0.35, { spread: 100, decay: 0.91, scalar: 1.5 });
        fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
        fire(0.1, { spread: 120, startVelocity: 45, colors: ["#db2777"] });
      } catch (err) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          zIndex: 9999,
          colors: ["#ff69b4", "#ff1493"],
        });
        console.log("Confetti heart path failed, using fallback:", err);
      }
    }, 10);
  }
}

function closeMessageModal() {
  const modal = document.getElementById("message-modal");
  const card = document.getElementById("modal-card");

  // Start the fade/scale out animation
  card.classList.add("scale-95", "opacity-0");
  card.classList.remove("scale-100", "opacity-100");

  // Wait for animation (300ms) then hide the backdrop
  setTimeout(() => {
    modal.classList.add("hidden");
    // Ensure the card is ready for the next time it's opened
    card.classList.add("scale-95", "opacity-0");
  }, 300);
}

window.onclick = function (event) {
  const modal = document.getElementById("message-modal");
  if (event.target == modal) {
    closeModal();
  }
};

const memoryData = {
  m1: {
    title: "Heartfelt",
    desc: "The moment our souls said hello. It wasn't just a meeting; it was a recognition.",
    img: "images/m1/m1.jpeg",
    imgCaption: "ayan muka akong masaya",
    gallery: [
      {
        url: "images/m1/m1.jpeg",
        caption: "ayan muka akong masaya",
      },
      {
        url: "images/m1/m2.jpeg",
        caption: "Ang bata ko pa rito",
      },
      {
        url: "images/m1/m3.jpeg",
        caption: "Pandemic moment",
      },
      {
        url: "images/m1/m4.jpeg",
        caption: "Hindi ko sure kelan to pero ang bata mo pa rito",
      },
      {
        url: "images/m1/m5.jpeg",
        caption: "bwesit hahahahaha",
      },
      {
        url: "images/m1/m6.jpeg",
        caption: "Ito yung unang pic na sinend mo sa akin",
      },
      {
        url: "images/m1/m7.jpeg",
        caption: "nag myday la ng pic nung nasa talking stage pa tayo",
      },
      {
        url: "images/m1/m8.jpeg",
        caption:
          "Ito naman yung lagi na tayo nag uusap tas comportable na, papunta kayo nyan sa mall bibili regalo para sa bridal shower",
      },
      {
        url: "images/m1/m9.jpeg",
        caption: "After natin mag hiwalay",
      },
      {
        url: "images/m1/m10.jpeg",
        caption: "ito rin after mag hiwalay",
      },
      {
        url: "images/m1/m11.jpeg",
        caption: "irst gift na na tanggap ko",
      },
      {
        url: "images/m1/m12.jpeg",
        caption: "sinama ko lang to ahahaha",
      },
      {
        url: "images/m1/m13.jpeg",
        caption: "hahahahhaha",
      },
      {
        url: "images/m1/m14.jpeg",
        caption: "Ganda hehe asawa ko yan",
      },
    ],
  },

  m2: {
    title: "Our Place",
    desc: "Where the GPS always leads us. Our little corner of the world.",
    img: "images/m2/m1.jpeg",
    imgCaption: "Where we always end up.",
    gallery: [
      {
        url: "images/m2/m1.jpeg",
        caption: "Was so happy on this game dito ko lang nagawa to sayo",
      },
      {
        url: "images/m2/m2.jpeg",
        caption: "I miss this moment",
      },
      {
        url: "images/m2/m3.jpeg",
        caption: "ang cute natin dito oh",
      },
      {
        url: "images/m2/m4.jpeg",
        caption: "will you marry me?😗",
      },
      {
        url: "images/m2/m5.jpg",
        caption: "Us in different universe",
      },
      {
        url: "images/m2/m6.jpg",
        caption: "Sobrang layooooo",
      },
      {
        url: "images/m2/m7.jpg",
        caption: "Si Yara",
      },
      {
        url: "images/m2/m8.jpg",
        caption:
          "After ng away natin nag dowanload ako tas ito nakita ko. sorryyyy",
      },
    ],
  },

  m3: {
    title: "History Snap",
    desc: "Two souls stepping into the unknown together. Every risk felt lighter because you were there.",
    img: "images/memories/snap1.mp4",
    imgCaption: "The first leap together.",
    gallery: [
      {
        url: "images/memories/snap1.mp4",
        caption: "Hindi ko alam pano moko nagustuhan HAHAHAHA",
      },
      {
        url: "images/memories/snap2.mp4",
        caption: "Nakita ko to HAHAHAHAH bwesit",
      },
      {
        url: "images/memories/snap3.mp4",
        caption: "Ayan request mo yan sakin eh",
      },
      {
        url: "images/memories/snap4.mp4",
        caption: "Edit mo to eh ",
      },
      {
        url: "images/memories/snap5.mp4",
        caption: "Every risk worth taking. Kahit ano bumalik ka lang HAHAHAHA",
      },
    ],
  },

  m4: {
    title: "Some gift",
    desc: "When the world slept, we built our universe in whispers and laughter.",
    img: "images/m4/m1.jpeg",
    imgCaption: "Another gift from you",
    gallery: [
      {
        url: "images/m4/m1.jpeg",
        caption: "Another gift from you",
      },
      {
        url: "images/m4/m2.jpeg",
        caption: "ayos pa ba yan?",
      },
      {
        url: "images/m4/m3.jpeg",
        caption: "hehe cute",
      },
      {
        url: "images/m4/m4.jpeg",
        caption: "ayan sin bunso 2.0",
      },
    ],
  },

  m5: {
    title: "Simple Joys",
    desc: "No grand gestures. Just small moments that quietly meant everything.",
    img: "images/m5/m1.jpeg",
    imgCaption: "first message mo sa note it",
    gallery: [
      {
        url: "images/m5/m1.jpeg",
        caption: "irst message mo sa note it",
      },
      {
        url: "images/m5/m2.jpeg",
        caption: "ang cute eh",
      },
      {
        url: "images/m5/m3.jpeg",
        caption: "kasing payat mo",
      },
      {
        url: "images/m5/m4.jpeg",
        caption: "Sows",
      },
      {
        url: "images/m5/m5.jpeg",
        caption: "hahahahha",
      },
      {
        url: "images/m5/m6.jpeg",
        caption: "Ano yan",
      },
      {
        url: "images/m5/m7.jpeg",
        caption: "welcome ano sinend ko sayo dito?",
      },
      {
        url: "images/m5/m8.jpeg",
        caption: "welcoome",
      },
      {
        url: "images/m5/m9.jpeg",
        caption: "Nag susuka?",
      },
      {
        url: "images/m5/m10.jpeg",
        caption: "ihhhhhh hehe",
      },
      {
        url: "images/m5/m11.jpeg",
        caption: "aysyaaa naman",
      },
      {
        url: "images/m5/m12.jpeg",
        caption: "galing mag drawing eh",
      },
      {
        url: "images/m5/m13.jpeg",
        caption: "Moment na mini make sure mo na hahanapin kita lagi hahahah",
      },
      {
        url: "images/m5/m14.jpeg",
        caption: "aysyaaaa kawawa naman",
      },
      {
        url: "images/m5/m15.jpeg",
        caption: "cute neto",
      },
      {
        url: "images/m5/m16.jpeg",
        caption: "first time may bumati sa akin",
      },
      {
        url: "images/m5/m17.jpeg",
        caption: "galing mag drawing eh",
      },
      {
        url: "images/m5/m18.jpeg",
        caption: "This time iniwan mo ako then bumalik ka kaso wala ako signal kaya di ko nabasa",
      },
      {
        url: "images/m5/m19.jpeg",
        caption: "This time is mag hihiwalay na tayo",
      },
      {
        url: "images/m5/m20.jpeg",
        caption: "Last message mo sa akin",
      },
    ],
  },

  m6: {
    title: "Our Song",
    desc: "A collection of melodies that define our journey. Click a track below to play our favorite moments.",
    img: "https://images.unsplash.com/photo-1514525253361-bee8718a300c?q=80&w=1200",
    imgCaption: "The Soundtrack of Us",
    gallery: [
      {
        url: "images/games/ilike it.jpg", 
        audio: "",
        caption: "Our Main Theme",
      },
      {
        url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745", 
        audio: "images/track2.mp3",
        caption: "Midnight Serenade",
      },
    ],
  },
};

function openModal(id) {
  const data = memoryData[id];
  const container = document.getElementById("modal-container");
  const content = document.getElementById("modal-content");
  const galleryGrid = document.getElementById("gallery-grid");
  const audioUI = document.getElementById("audio-ui");
  const audioPlayer = document.getElementById("modal-audio");

  // 1. Reset Audio immediately
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
  audioUI.style.opacity = "0";

  // 2. Load basic content
  updateMainImage(data.img, data.imgCaption || "Viewing Archive");
  document.getElementById("modal-title").innerText = data.title;
  document.getElementById("modal-title-display").innerText = data.title;
  document.getElementById("modal-desc").innerText = data.desc;
  document.getElementById("modal-img-caption").innerText =
    data.imgCaption || "Viewing Archive";

  // 3. Build Gallery
  galleryGrid.innerHTML = "";
  data.gallery.forEach((item) => {
    const div = document.createElement("div");
    div.className =
      "aspect-square rounded-xl overflow-hidden bg-gray-100 cursor-pointer hover:ring-2 hover:ring-pink-400 transition-all duration-300 relative group";

    div.onclick = () =>
      handleGalleryClick(
        item.url,
        item.caption.replace(/'/g, "\\'"),
        item.audio || null,
      );

    const isVideo = item.url.toLowerCase().endsWith(".mp4");

    // Icon for Music
    const musicIcon = item.audio
      ? `<div class="absolute inset-0 flex items-center justify-center bg-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
          <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
         </div>`
      : "";

    // Icon for Video (so user knows it's a movie)
    const videoIcon = isVideo
      ? `<div class="absolute top-2 right-2 bg-black/50 p-1 rounded-md z-10">
          <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
         </div>`
      : "";

    // The logic to switch between IMG and VIDEO in the thumbnail
    let mediaHTML = "";
    if (isVideo) {
      mediaHTML = `<video src="${item.url}" class="w-full h-full object-cover" muted playsinline></video>`;
    } else {
      mediaHTML = `<img src="${item.url}" class="w-full h-full object-cover">`;
    }

    div.innerHTML = `
      ${musicIcon}
      ${videoIcon}
      ${mediaHTML}
    `;

    galleryGrid.appendChild(div);
  });

  // 4. SHOW MODAL
  container.classList.remove("hidden");
  setTimeout(() => {
    content.classList.add("opacity-100");
  }, 50);
}
function handleGalleryClick(imgSrc, caption, audioSrc) {
  const audioPlayer = document.getElementById("modal-audio");
  const audioUI = document.getElementById("audio-ui");

  // 1. Update the image and caption regardless of audio
  updateMainImage(imgSrc, caption);

  // 2. Handle Audio
  if (audioSrc) {
    // Stop whatever is playing and clear the source
    audioPlayer.pause();
    audioPlayer.currentTime = 0;

    // Set the new track and LOAD it
    audioPlayer.src = audioSrc;
    audioPlayer.load();

    // Set volume to 1.0 just in case
    audioPlayer.volume = 1.0;

    // Play the audio
    audioPlayer
      .play()
      .then(() => {
        // Show the "Now Playing" overlay on the left
        audioUI.style.opacity = "1";
        audioUI.classList.remove("pointer-events-none");
        console.log("Playing: " + audioSrc);
      })
      .catch((error) => {
        console.error(
          "Playback failed. This usually happens if the file path is wrong or the file type is unsupported.",
          error,
        );
      });
  } else {
    // If clicking a normal photo (m1-m5), stop music and hide UI
    audioPlayer.pause();
    audioUI.style.opacity = "0";
    audioUI.classList.add("pointer-events-none");
  }
}

function updateMainImage(src, caption) {
  const mainImg = document.getElementById("modal-img");
  const mainVideo = document.getElementById("modal-video");
  const captionText = document.getElementById("modal-img-caption");

  mainImg.style.opacity = "0";
  mainVideo.style.opacity = "0";
  captionText.style.opacity = "0";

  setTimeout(() => {
    const isVideo = src.toLowerCase().endsWith(".mp4");

    if (isVideo) {
      mainImg.classList.add("hidden");
      mainVideo.classList.remove("hidden");

      mainVideo.src = src;
      mainVideo.muted = false; // Ensure it's not muted
      mainVideo.volume = 1.0; // Set full volume

      // Attempt to play
      const playPromise = mainVideo.play();

      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Autoplay with sound blocked. Muting to allow play.");
          mainVideo.muted = true;
          mainVideo.play();
        });
      }

      mainVideo.style.opacity = "1";
    } else {
      mainVideo.pause();
      mainVideo.classList.add("hidden");
      mainImg.classList.remove("hidden");
      mainImg.src = src;
      mainImg.style.opacity = "1";
    }

    captionText.innerText = caption;
    captionText.style.opacity = "0.8";
  }, 300);
}
function closeModal() {
  // 1. Pause the Audio
  document.getElementById("modal-audio").pause();

  // 2. Pause and reset the Video
  const videoPlayer = document.getElementById("modal-video");
  if (videoPlayer) {
    videoPlayer.pause();
    videoPlayer.currentTime = 0; // Optional: Resets video to start for next time
  }

  // 3. UI Closing Logic
  const container = document.getElementById("modal-container");
  const content = document.getElementById("modal-content");

  content.classList.remove("opacity-100");

  setTimeout(() => {
    container.classList.add("hidden");
    document.body.style.overflow = "auto";
  }, 500);
}

function openGame(gameType) {
  const modal = document.getElementById("game-modal");
  const content = document.getElementById("game-content");
  const canvas = document.getElementById("game-canvas");
  const title = document.getElementById("game-title");

  if (!modal || !content || !canvas) {
    console.error("Modal elements missing in HTML!");
    return;
  }

  // Clear old game content first
  canvas.innerHTML = "";

  // Show modal
  modal.classList.remove("hidden");

  // Animation delay
  setTimeout(() => {
    content.classList.remove("translate-y-full", "opacity-0");
  }, 50);

  // Route to the correct game
  if (gameType === "memory") {
    title.innerText = "Love Wars";
    if (typeof loadLoveWars === "function") {
      loadLoveWars(canvas);
    } else {
      canvas.innerHTML = "<p class='p-10'>LoveWars function not found.</p>";
    }
  } else if (gameType === "quiz") {
    title.innerText = "The Us Quiz";
    if (typeof loadQuiz === "function") {
      loadQuiz(canvas);
    } else {
      canvas.innerHTML = "<p class='p-10'>Quiz function not found.</p>";
    }
  } else if (gameType === "inYourWords") {
    title.innerText = "In Your Words";
    if (typeof loadInYourWords === "function") {
      loadInYourWords(canvas);
    } else {
      canvas.innerHTML = "<p class='p-10'>InYourWords function not found.</p>";
    }
  }
}
function closeGame() {
  const modal = document.getElementById("game-modal");
  const content = document.getElementById("game-content");

  // Call the cleanup function we just created inside loadQuiz
  if (typeof window.currentQuizStop === "function") {
    window.currentQuizStop();
  }

  content.classList.add("translate-y-full", "opacity-0");
  setTimeout(() => {
    modal.classList.add("hidden");
    document.getElementById("game-canvas").innerHTML = "";
  }, 500);
}

const quizData = [
  {
    category: "About Me",
    question: "What is my favorite color?😌",
    options: ["White", "Black", "Blue", "Red"],
    correct: 0,
    time: 10,
  },
  {
    category: "About Me",
    question: "What part of you do I secretly stare at the most?👀",
    options: ["Eyes", "Lips", "Hands", "Smile"],
    correct: 0,
    time: 10,
  },
  {
    category: "About Me",
    question: "Am I clingy when I want attention?🤔",
    options: ["Yes", "Sometimes", "Rarely", "Never"],
    correct: 0,
    time: 10,
  },
  {
    category: "About Me",
    question: "When is my birthday?👀",
    options: [
      "April 8, 2004",
      "May 18, 2004",
      "April 18, 2004",
      "April 18, 2003",
    ],
    correct: 2,
    time: 10,
  },
  {
    category: "About Me",
    question: "How tall is your favorite person?👀",
    options: ["168 cm", "171 cm", "175 cm", "190 cm (in his dreams)"],
    correct: 1,
    time: 10,
  },

  {
    category: "About Me",
    question: "Do I love baby time?😳",
    options: ["Yes, always", "Sometimes", "Rarely", "No"],
    correct: 3,
    time: 10,
  },
  {
    category: "About Me",
    question: "If I get jealous, what do I do?🤔",
    options: ["Act cold", "Stay silent", "Tease you", "Pretend I don’t care"],
    correct: 0,
    time: 10,
  },
  {
    category: "About Me",
    question: "What makes me soft instantly?😗",
    options: ["Compliments", "Baby Time", "Baby voice", "Food"],
    correct: 1,
    time: 10,
  },

  {
    category: "About Me",
    question: "Where do I usually kiss you the most?👀",
    options: ["Your forehead", "Your lips", "Your cheeks", "Your neck"],
    correct: 0,
    time: 10,
  },
  {
    category: "About Me",
    question: "Do I prefer slow romantic moments or intense ones?👀",
    options: [
      "Slow and romantic",
      "Intense and passionate",
      "Depends on the mood",
      "I act innocent",
    ],
    correct: 1,
    time: 10,
  },

  {
    category: "Our Relationship",
    question: "Do you remember when we officially became a couple?",
    options: [
      "March 18, 2021",
      "March 8, 2021",
      "April 18, 2021",
      "I don’t remember either",
    ],
    correct: 0,
    time: 10,
  },
  {
    category: "Our Relationship",
    question: "Who kissed first?",
    options: [
      "You did!",
      "I did!",
      "We kissed at the same time",
      "Neither, it was awkward",
    ],
    correct: 1,
    time: 10,
  },
  {
    category: "Our Relationship",
    question: "Who teases more during private moments?",
    options: ["You do!", "I do!", "Both equally", "Neither, we’re chill"],
    correct: 0,
    time: 10,
  },
  {
    category: "Our Relationship",
    question: "Who is more likely to start a fight?",
    options: ["You are!", "I am!", "Both equally", "Neither, we’re calm"],
    correct: 1,
    time: 10,
  },
  {
    category: "Our Relationship",
    question: "Who is more likely to ignore the other when they are mad?",
    options: ["You are!", "I am!", "Both equally", "Neither, we talk it out"],
    correct: 1,
    time: 10,
  },
  {
    category: "Our Relationship",
    question: "Who usually takes the bottom role during intimate moments?👀",
    options: [
      "You do!",
      "I do!",
      "We switch equally",
      "Neither, we’re unpredictable",
    ],
    correct: 1,
    time: 10,
  },
  {
    category: "Our Relationship",
    question: "Who texts good morning first?",
    options: ["You do!", "I do!", "Both equally", "Neither, we’re lazy"],
    correct: 2,
    time: 10,
  },
  {
    category: "Our Relationship",
    question: "Who usually forgets to reply for hours?",
    options: ["You do!", "I do!", "Both equally", "Neither, we reply fast"],
    correct: 1,
    time: 10,
  },
  {
    category: "Our Relationship",
    question: "Who is more patient?",
    options: [
      "You do!",
      "I do!",
      "Sometimes we both lose it",
      "Neither, we’re equally stubborn",
    ],
    correct: 1,
    time: 10,
  },
  {
    category: "Our Relationship",
    question: "Who is more likely to fall asleep first?",
    options: [
      "You do!",
      "Both at the same time",
      "Neither, we stay up late",
      "I do!",
    ],
    correct: 3,
    time: 10,
  },
];

const feedbackImages = {
  correct: [
    "images/games/correct1.jpg",
    "images/games/correct2.jpg",
    "images/games/correct3.jpg",
    "images/games/correct4.jpg",
    "images/games/correct5.jpg",
  ],
  wrong: [
    "images/games/incorrect1.jpg",
    "images/games/incorrect2.jpg",
    "images/games/incorrect3.jpg",
    "images/games/incorrect4.jpg",
    "images/games/incorrect5.jpg",
  ],
};

function loadQuiz(container) {
  let currentIdx = 0;
  let score = 0;
  let timeLeft = 0;
  let timerInterval = null;
  let filteredQuestions = [];

  window.currentQuizStop = () => {
    if (timerInterval) clearInterval(timerInterval);
  };

  function showCategorySelection() {
    container.innerHTML = `
    <div class="fixed inset-0 w-full h-full flex flex-col justify-between p-6 animate-fadeIn select-none bg-[#FFF9FA] overflow-hidden">
      
      <div class="absolute inset-0 z-0 opacity-[0.4] pointer-events-none" 
           style="background-image: radial-gradient(#FFD1DC 1.5px, transparent 1.5px); background-size: 30px 30px;">
      </div>
      
      <div class="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-40">
        <svg width="100%" height="200" viewBox="0 0 1000 200" preserveAspectRatio="none" class="overflow-visible">
          <path d="M0,100 L400,100 L410,80 L430,140 L450,40 L465,100 L500,100 
                   C500,80 525,80 535,95 C545,80 570,80 570,100 C570,125 535,145 535,145 C535,145 500,125 500,100 
                   L1000,100" 
                fill="none" stroke="#FFD1DC" stroke-width="2" />
          
          <path d="M0,100 L400,100 L410,80 L430,140 L450,40 L465,100 L500,100 
                   C500,80 525,80 535,95 C545,80 570,80 570,100 C570,125 535,145 535,145 C535,145 500,125 500,100 
                   L1000,100" 
                fill="none" stroke="#ff4d6d" stroke-width="4" stroke-linecap="round" class="ekg-bg-line" />
        </svg>
      </div>

      <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-pink-100/40 rounded-full blur-[80px] animate-pulse"></div>
        <div class="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-red-50/40 rounded-full blur-[80px] animate-pulse" style="animation-delay: 2s"></div>
      </div>

      <div class="relative z-10 w-full max-w-6xl mx-auto flex justify-between items-center shrink-0 px-2">
        <div class="flex flex-col">
          <span class="text-[10px] font-black text-pink-400 uppercase tracking-[0.3em]">Game Selection</span>
          <h2 class="text-xl font-black text-gray-800 tracking-tight">QUIZ CENTER</h2>
        </div>
        <div class="flex items-center gap-2 bg-white/50 backdrop-blur-md px-4 py-2 rounded-2xl border border-pink-100 shadow-sm">
           <span class="text-xs font-black text-gray-600 uppercase italic">Online</span>
           <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
        </div>
      </div>

      <div class="relative z-10 flex flex-col items-center justify-center flex-grow">
        <div class="text-center mb-8">
          <h3 class="text-5xl font-black text-gray-900 tracking-tighter uppercase italic transform -skew-x-2">
            Pick your <span class="text-pink-500">Quest</span>
          </h3>
        </div>
        
        <div class="flex flex-col gap-5 w-full max-w-sm">
          <button onclick="confirmCategory('About Me')" 
            class="group relative w-full h-24 bg-white/70 backdrop-blur-md rounded-[2rem] border-2 border-pink-100 hover:border-pink-500 hover:bg-white transition-all duration-300 flex items-center px-6 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1">
            <div class="absolute -right-4 -top-4 w-20 h-20 bg-pink-500/5 rounded-full group-hover:scale-[3] transition-transform duration-700"></div>
            <div class="relative z-10 flex items-center justify-between w-full">
              <div class="flex items-center gap-5">
               <div class="w-14 h-14 bg-pink-500 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg group-hover:rotate-12 transition-transform">
  <img 
    src="images/games/tuko.jpg" 
    alt="Tukooo" 
    class="w-full h-full object-cover"
  />
</div>
                <div class="text-left">
                  <h4 class="text-lg font-black text-gray-800 uppercase leading-none">About Me</h4>
                  <p class="text-[9px] font-bold text-pink-400 uppercase tracking-widest mt-1">Difficulty: Beginner</p>
                </div>
              </div>
              <div class="w-8 h-8 rounded-full border-2 border-pink-100 flex items-center justify-center text-pink-400 group-hover:bg-pink-500 group-hover:text-white group-hover:border-pink-500 transition-all">→</div>
            </div>
          </button>

          <button onclick="confirmCategory('Our Relationship')" 
            class="group relative w-full h-24 bg-white/70 backdrop-blur-md rounded-[2rem] border-2 border-red-100 hover:border-red-500 hover:bg-white transition-all duration-300 flex items-center px-6 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1">
            <div class="absolute -right-4 -top-4 w-20 h-20 bg-red-500/5 rounded-full group-hover:scale-[3] transition-transform duration-700"></div>
            <div class="relative z-10 flex items-center justify-between w-full">
              <div class="flex items-center gap-5">
<div class="w-14 h-14 bg-red-500 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg group-hover:-rotate-12 transition-transform">
  <img 
    src="images/games/us.jpg" 
    alt="Us" 
    class="w-full h-full object-cover"
  />
</div>
                <div class="text-left">
                  <h4 class="text-lg font-black text-gray-800 uppercase leading-none">Our Story</h4>
                  <p class="text-[9px] font-bold text-red-400 uppercase tracking-widest mt-1">Difficulty: Master</p>
                </div>
              </div>
              <div class="w-8 h-8 rounded-full border-2 border-red-100 flex items-center justify-center text-red-400 group-hover:bg-red-500 group-hover:text-white group-hover:border-red-500 transition-all">→</div>
            </div>
          </button>
        </div>
      </div>

      <div class="relative z-10 w-full pt-8 pb-2 shrink-0">
         <div class="flex justify-between items-center px-4 text-[9px] font-black text-pink-300 uppercase tracking-widest">
            <div class="flex items-center gap-2">
               <span class="w-2 h-2 rounded-full bg-pink-200"></span>
               <span>v1.0.4</span>
            </div>
            <div class="animate-pulse">Press to Start Quest</div>
         </div>
      </div>

    </div>
  `;
  }

  window.confirmCategory = (category) => {
    filteredQuestions = quizData.filter((q) => q.category === category);

    container.innerHTML = `
    <div class="fixed inset-0 w-full h-full flex items-center justify-center p-6 animate-fadeIn select-none bg-[#FFF9FA] overflow-hidden">
      
      <div class="absolute inset-0 z-0 opacity-[0.4] pointer-events-none" 
           style="background-image: radial-gradient(#FFD1DC 1.5px, transparent 1.5px); background-size: 30px 30px;">
      </div>

      <div id="quiz-modal" class="relative z-10 w-full max-w-md bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl text-center border-4 border-pink-50 overflow-visible">
        
        <div class="absolute inset-0 pointer-events-none" style="margin: -2px;"> 
          <svg width="100%" height="100%" viewBox="0 0 400 500" preserveAspectRatio="none" class="overflow-visible shadow-glow">
            <path d="
              M 40,0 
              L 140,0 L 150,-15 L 165,25 L 180,-25 L 195,0 
              C 195,-15 215,-15 220,-5 C 225,-15 245,-15 245,0 C 245,15 220,30 220,30 C 220,30 195,15 195,0
              L 360,0 
              A 40,40 0 0 1 400,40 
              L 400,460 
              A 40,40 0 0 1 360,500 
              L 40,500 
              A 40,40 0 0 1 0,460 
              L 0,40 
              A 40,40 0 0 1 40,0" 
              fill="none" 
              stroke="#ff4d6d" 
              stroke-width="4" 
              stroke-linecap="round"
              class="ekg-refined-path" />
          </svg>
        </div>

        <div class="relative z-20">
          <div class="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
             <span class="text-3xl animate-pulse">❤️</span>
          </div>

          <h3 class="text-2xl font-black text-gray-800 mb-4 uppercase italic">Vital Signs</h3>
          
          <div class="space-y-3 mb-8">
            <div class="flex items-center gap-3 bg-pink-50/50 p-3 rounded-2xl border border-pink-100">
              <span class="text-pink-500 font-black text-[10px] tracking-widest shrink-0">SYNC</span>
              <span class="text-[11px] font-bold text-gray-600 uppercase tracking-tight text-left">Timer will start immediately.</span>
            </div>
            <div class="flex items-center gap-3 bg-pink-50/50 p-3 rounded-2xl border border-pink-100">
              <span class="text-pink-500 font-black text-[10px] tracking-widest shrink-0">LIFE</span>
              <span class="text-[11px] font-bold text-gray-600 uppercase tracking-tight text-left">Wrong answers drain heart meter.</span>
            </div>
          </div>

          <button onclick="startActualQuiz()" class="w-full py-4 bg-pink-600 text-white rounded-2xl font-black shadow-lg hover:bg-pink-700 active:scale-95 transition-all uppercase tracking-[0.2em] text-[11px]">
            Begin the Challenge
          </button>
        </div>
      </div>

    </div>
    `;
  };

  window.startActualQuiz = () => {
    currentIdx = 0;
    score = 0;
    renderQuestion();
  };

  // --- 3. TIMER LOGIC ---
  function stopTimer() {
    if (timerInterval) clearInterval(timerInterval);
  }
  function startTimer(seconds) {
    const totalTime = seconds;
    let timeInMs = seconds * 1000;

    const timerPath = document.getElementById("timer-progress");
    const timerText = document.getElementById("timer-text");

    stopTimer();

    if (timerPath) {
      const pathLength = timerPath.getTotalLength();
      timerPath.style.strokeDasharray = pathLength;
      timerPath.style.strokeDashoffset = "0";
      timerPath.setAttribute("stroke", "#ff4d6d");

      // Ensure shake is removed at the start of a new question
      if (timerText) timerText.classList.remove("animate-shake");

      timerInterval = setInterval(() => {
        timeInMs -= 50;
        const currentSeconds = Math.ceil(timeInMs / 1000);

        if (timerText && timerText.innerText != currentSeconds) {
          timerText.innerText = Math.max(0, currentSeconds);
        }

        const offset =
          pathLength - (timeInMs / (totalTime * 1000)) * pathLength;
        timerPath.style.strokeDashoffset = offset;

        // --- DANGER EFFECTS ---
        if (timeInMs <= 5000) {
          timerPath.setAttribute("stroke", "#ef4444"); // Path turns red at 5s
        }

        if (timeInMs <= 3000) {
          if (timerText) timerText.classList.add("animate-shake"); // Text shakes at 3s
        }

        if (timeInMs <= 0) {
          stopTimer();
          if (timerText) timerText.classList.remove("animate-shake");
          handleAnswer(null);
        }
      }, 50);
    }
  }

  // --- 4. ANSWER HANDLING ---
  window.handleAnswer = (selectedIdx) => {
    stopTimer();

    // 1. Grab all buttons and disable them immediately
    const buttons = document.querySelectorAll(".quiz-option");
    buttons.forEach((btn) => (btn.style.pointerEvents = "none"));

    const q = filteredQuestions[currentIdx];

    // Check if answer is correct (and handle the null case for timeout)
    const isCorrect = selectedIdx !== null && selectedIdx === q.correct;

    if (isCorrect) score++;

    // 2. Show the feedback image modal (Correct or Wrong/Timeout)
    showFeedbackModal(isCorrect);

    // 3. Highlight the specific button clicked
    if (selectedIdx !== null) {
      buttons[selectedIdx].classList.add(
        isCorrect ? "bg-green-500" : "bg-red-500",
        "text-white",
        "border-transparent",
      );
    } else {
      // If they timed out, maybe highlight the right answer in green anyway?
      // This is optional but helpful for the user to learn.
      buttons[q.correct].classList.add("bg-green-100", "border-green-500");
    }

    // 4. Transition to next question
    setTimeout(() => {
      currentIdx++;
      if (currentIdx < filteredQuestions.length) {
        renderQuestion();
      } else {
        showQuizResults();
      }
    }, 2000);
  };
  // --- 5. RENDER QUESTION ---
  function renderQuestion() {
    const q = filteredQuestions[currentIdx];
    container.innerHTML = `
    <div class="fixed inset-0 w-full h-full flex flex-col justify-between p-6 md:p-10 animate-fadeIn select-none bg-[#FFF9FA] overflow-hidden">
      
      <div class="relative z-10 flex justify-between items-end mb-2 shrink-0">
        <div class="flex flex-col">
          <span class="text-[10px] font-black uppercase tracking-[0.3em] text-pink-400 mb-1">${q.category}</span>
          <span class="text-xs text-gray-400 font-bold uppercase italic">Phase ${currentIdx + 1}</span>
        </div>
        <div class="text-right">
          <span id="timer-text" class="inline-block font-black text-pink-600 text-4xl tracking-tighter italic leading-none">
            ${q.time}
          </span>
        </div>
      </div>

      <div class="relative z-10 w-full h-16 mb-4 shrink-0">
        <svg width="100%" height="100%" viewBox="0 0 1000 60" preserveAspectRatio="none" class="overflow-visible">
          <path d="M0,30 L150,30 L165,10 L185,50 L205,0 L220,30 L250,30 C250,15 270,15 275,25 C280,15 300,15 300,30 C300,45 275,60 275,60 C275,60 250,45 250,30 L450,30 L465,10 L485,50 L505,0 L520,30 L1000,30" 
                fill="none" stroke="#FFE4E9" stroke-width="2" />

          <path id="timer-progress" 
                d="M0,30 L150,30 L165,10 L185,50 L205,0 L220,30 L250,30 C250,15 270,15 275,25 C280,15 300,15 300,30 C300,45 275,60 275,60 C275,60 250,45 250,30 L450,30 L465,10 L485,50 L505,0 L520,30 L1000,30" 
                fill="none" stroke="#ff4d6d" stroke-width="5" stroke-linecap="round"
                class="filter drop-shadow-[0_0_8px_rgba(255,77,109,0.5)]" />
        </svg>
      </div>

      <div class="relative z-10 text-center flex-grow flex items-center justify-center px-4">
        <h3 class="text-2xl md:text-4xl font-black text-gray-800 leading-tight uppercase italic transform -skew-x-2">
          "${q.question}"
        </h3>
      </div>

      <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl mx-auto mb-6 shrink-0">
        ${q.options
          .map(
            (opt, i) => `
          <button onclick="handleAnswer(${i})" class="quiz-option group relative w-full py-5 px-6 bg-white border-2 border-pink-100 rounded-[1.5rem] hover:border-pink-500 hover:shadow-xl active:scale-[0.98] transition-all text-left flex justify-between items-center shadow-sm">
            <span class="font-black text-gray-700 uppercase italic text-sm group-hover:text-pink-600 transition-colors">${opt}</span>
            <div class="w-6 h-6 rounded-full border border-pink-100 flex items-center justify-center text-[10px] text-pink-200 group-hover:bg-pink-500 group-hover:text-white transition-all">
              ${String.fromCharCode(65 + i)}
            </div>
          </button>
        `,
          )
          .join("")}
      </div>

      <div class="relative z-10 w-full text-center pb-2 opacity-30">
        <span class="text-[8px] font-black uppercase tracking-[0.5em] text-pink-400 italic">Synchronizing Vitals...</span>
      </div>

    </div>
  `;
    startTimer(q.time);
    window.currentQuizStop = stopTimer;
  }

  function showFeedbackModal(isCorrect) {
    const type = isCorrect ? "correct" : "wrong";
    const images = feedbackImages[type];
    const randomImg = images[Math.floor(Math.random() * images.length)];

    // Create modal element
    const overlay = document.createElement("div");
    overlay.className =
      "fixed inset-0 z-[999] flex items-center justify-center p-6 animate-fadeIn"; // High z-index

    overlay.innerHTML = `
      <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      <div class="relative bg-white p-4 rounded-[2.5rem] shadow-2xl animate-popIn">
        <div class="absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl shadow-lg ${isCorrect ? "bg-green-500" : "bg-red-500"}">
          ${isCorrect ? "✓" : "✕"}
        </div>
        <img src="${randomImg}" class="w-64 h-64 md:w-80 md:h-80 object-cover rounded-[2rem]" onerror="this.src='https://via.placeholder.com/300?text=Image+Not+Found'" />
        <p class="text-center mt-4 font-black uppercase tracking-widest ${isCorrect ? "text-green-500" : "text-red-500"}">
          ${isCorrect ? "HEHE!" : "Tch!"}
        </p>
      </div>
    `;

    document.body.appendChild(overlay);

    // Auto-remove after 1.5 seconds
    setTimeout(() => {
      overlay.style.opacity = "0";
      overlay.style.transition = "opacity 0.5s ease";
      setTimeout(() => overlay.remove(), 500);
    }, 1500);
  }

  function showQuizResults() {
    const passed = score >= filteredQuestions.length / 2;

    container.innerHTML = `
    <div class="fixed inset-0 w-full h-full flex flex-col items-center justify-center p-6 md:p-12 animate-fadeIn select-none bg-[#FFF9FA] overflow-hidden">
      
      <div class="absolute inset-0 z-0 pointer-events-none">
        <div class="absolute top-1/2 left-1/4 -translate-y-1/2 w-[60%] h-[60%] ${passed ? "bg-pink-100/20" : "bg-gray-200/20"} rounded-full blur-[120px]"></div>
      </div>

      <div class="relative z-10 w-full max-w-5xl flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        
        <div class="w-64 h-64 md:w-80 md:h-80 shrink-0 pointer-events-none select-none">
          <div class="w-full h-full overflow-hidden rounded-[2rem]">
            <style>
              .tenor-gif-embed { background-color: transparent !important; border: none !important; box-shadow: none !important; }
              .tenor-gif-embed iframe { pointer-events: none !important; background: transparent !important; }
            </style>

            ${
              passed
                ? `
              <div class="tenor-gif-embed" 
                   data-postid="3324100104126026193" 
                   data-share-method="host" 
                   data-aspect-ratio="1.06667" 
                   data-width="100%">
                <a href="https://tenor.com/view/peach-and-goma-hugging-love-cute-gif-3324100104126026193"></a>
              </div>
            `
                : `
              <div class="tenor-gif-embed" 
                   data-postid="23262688" 
                   data-share-method="host" 
                   data-aspect-ratio="0.909375" 
                   data-width="100%">
                <a href="https://tenor.com/view/mochi-cat-chibi-cat-white-cat-mushy-cat-gif-23262688"></a>
              </div>
            `
            }
          </div>
        </div>

        <div class="flex flex-col items-center md:items-start text-center md:text-left pointer-events-none">
          <div class="mb-2">
             <span class="text-[11px] font-black ${passed ? "text-pink-400" : "text-gray-400"} uppercase tracking-[0.5em] opacity-80">Final Results</span>
          </div>

          <h2 class="text-[8rem] md:text-[12rem] font-black text-gray-900 leading-none tracking-tighter mb-6 transform -skew-x-3">
            ${score}<span class="${passed ? "text-pink-500" : "text-gray-400"} text-5xl md:text-7xl ml-2">/</span><span class="text-gray-200 text-7xl md:text-9xl">${filteredQuestions.length}</span>
          </h2>

          <div class="max-w-sm">
            <h3 class="text-3xl font-black text-gray-800 uppercase italic mb-3 tracking-tight">
              ${passed ? "Perfectly Synced" : "Gentle Echoes"}
            </h3>
            <p class="text-gray-400 text-lg font-medium leading-relaxed italic">
              ${
                passed
                  ? "Dahil dyaan chat mo ako bibigyan kita reward HEHE"
                  : "Anoooo yaaan?! Wala may kabit na ata, sa kabit na nya yung natatandaan"
              }
            </p>
          </div>
        </div>

      </div>

      <div class="absolute bottom-0 left-0 w-full h-1.5 bg-gray-50">
        <div class="h-full ${passed ? "bg-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.4)]" : "bg-gray-400"} transition-all duration-[2000ms] ease-out" 
             style="width: ${(score / filteredQuestions.length) * 100}%"></div>
      </div>
    </div>
  `;

    // Standard injection to wake up the Tenor GIFs
    const script = document.createElement("script");
    script.src = "https://tenor.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }

  showCategorySelection();
}

function loadLoveWars(container) {
  let userScore = 0,
    botScore = 0;
  let userHealth = 3,
    botHealth = 3;
  let round = 1;
  let currentBet = "";
  const maxRounds = 3;
  let roundHistory = [];

  const choices = [
    { name: "Rock", icon: "✊", beats: "Scissor" },
    { name: "Paper", icon: "✋", beats: "Rock" },
    { name: "Scissor", icon: "✌️", beats: "Paper" },
  ];

  // --- NEW STEP 0: INITIAL PICKER ---
  function showInitialPicker() {
    container.innerHTML = `
    <div class="fixed inset-0 w-full h-full bg-[#0f0a0c] z-0 overflow-hidden">
        <div class="absolute top-0 left-0 w-full md:w-1/2 h-full bg-pink-900/15 blur-[120px]"></div>
        <div class="absolute bottom-0 right-0 w-full md:w-1/2 h-full bg-red-900/15 blur-[120px]"></div>
        <div class="absolute inset-0 opacity-[0.04]" 
             style="background-image: linear-gradient(45deg, #ff4d6d 1px, transparent 1px), linear-gradient(-45deg, #ff4d6d 1px, transparent 1px); background-size: 28px 28px;">
        </div>
    </div>

    <div class="relative z-10 min-h-screen w-full flex flex-col items-center justify-center p-4 animate-fadeIn transform -translate-y-12">
      
      <div class="mb-8 md:mb-10 text-center">
          <h2 class="text-5xl md:text-6xl font-black text-white tracking-tighter uppercase italic leading-[0.8] drop-shadow-[0_0_15px_rgba(236,72,153,0.4)]">
              LOVE <br/> <span class="text-pink-500">WARS</span>
          </h2>
          <div class="mt-3 flex items-center justify-center gap-2">
              <span class="text-[8px] font-black text-pink-400/50 uppercase tracking-[0.5em] animate-pulse">Battle Sequence Active</span>
          </div>
      </div>
      
      <div class="w-full max-w-[300px] md:max-w-3xl flex flex-col md:flex-row items-stretch justify-center gap-4 md:gap-8">
          
          <button onclick="initiateDareSequence('user')" 
                  class="group relative flex-1 bg-white/[0.04] backdrop-blur-md rounded-[2rem] border-2 border-pink-500/10 transition-all duration-500 hover:scale-[1.03] hover:border-pink-500/50 hover:bg-white/[0.07] active:scale-95">
              <div class="h-full py-8 md:py-12 px-6 flex flex-col items-center justify-center">
                  <div class="relative mb-4">
                      <div class="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-pink-500 to-pink-700 rounded-2xl flex items-center justify-center overflow-hidden shadow-[0_0_20px_rgba(236,72,153,0.4)] group-hover:rotate-6 transition-transform">
  <img 
    src="images/games/bansot.jpg" 
    alt="Bansot" 
    class="w-full h-full object-cover"
  />
</div>
                      <div class="absolute -top-2 -left-2 bg-pink-500 text-white font-black text-[7px] md:text-[8px] px-2 py-0.5 rounded italic">Bansooot</div>
                  </div>
                  <h4 class="text-lg md:text-xl font-black text-white uppercase italic tracking-tighter">Me First</h4>
                  <p class="text-[8px] md:text-[9px] font-black text-pink-400 uppercase tracking-[0.2em] mt-2 opacity-50">Striker Protocol</p>
              </div>
          </button>

          <div class="relative flex items-center justify-center shrink-0">
              <div class="w-10 h-10 md:w-12 md:h-12 rounded-full border border-pink-500/20 flex items-center justify-center bg-black/60 backdrop-blur-xl z-20">
                  <span class="text-pink-500 font-black italic text-xs md:text-sm animate-pulse">VS</span>
              </div>
          </div>

          <button onclick="initiateDareSequence('bot')" 
                  class="group relative flex-1 bg-white/[0.04] backdrop-blur-md rounded-[2rem] border-2 border-red-500/10 transition-all duration-500 hover:scale-[1.03] hover:border-red-500/50 hover:bg-white/[0.07] active:scale-95">
              <div class="h-full py-8 md:py-12 px-6 flex flex-col items-center justify-center">
                  <div class="relative mb-4">
                      <div class="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center overflow-hidden shadow-[0_0_20px_rgba(239,68,68,0.4)] group-hover:-rotate-6 transition-transform">
  <img 
    src="images/games/tuko.jpg" 
    alt="tukoo" 
    class="w-full h-full object-cover"
  />
</div>
                      <div class="absolute -top-2 -right-2 bg-red-500 text-white font-black text-[7px] md:text-[8px] px-2 py-0.5 rounded italic">tukooo</div>
                  </div>
                  <h4 class="text-lg md:text-xl font-black text-white uppercase italic tracking-tighter">Tukoo First</h4>
                  <p class="text-[8px] md:text-[9px] font-black text-red-400 uppercase tracking-[0.2em] mt-2 opacity-50">Defender Mode</p>
              </div>
          </button>
      </div>

      <div class="mt-8 md:mt-12 flex items-center gap-3 px-6 py-2 rounded-full bg-white/[0.02] border border-white/5">
          <div class="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse"></div>
          <p class="text-[7px] md:text-[8px] font-black text-white/30 uppercase tracking-[0.4em]">Protocol Initialized</p>
      </div>
    </div>
  `;
  }
  // --- STEP 1: DARE FLOW ---
  window.initiateDareSequence = (winner) => {
    if (round === 1) window.initialPickerWinner = winner;

    const isBot = winner === "bot";
    const themeColor = isBot ? "red-500" : "pink-500";
    const themeGradient = isBot ? "from-red-900/20" : "from-pink-900/20";
    const shadowColor = isBot ? "rgba(239,68,68,0.4)" : "rgba(236,72,153,0.4)";
    const accentHex = isBot ? "#ef4444" : "#ff4d6d";
    const bansotImageUrl = "images/games/bansot.jpg";
    const tukoImageUrl = "images/games/tuko.jpg";

    container.innerHTML = `
    <div class="fixed inset-0 w-full h-full bg-[#0f0a0c] z-0 overflow-hidden">
        
        <div class="absolute inset-0 ${themeGradient} blur-[120px] opacity-40"></div>
        
        <div class="absolute inset-0 opacity-[0.08]" 
             style="background-image: 
                linear-gradient(to right, ${accentHex} 1px, transparent 1px),
                linear-gradient(to bottom, ${accentHex} 1px, transparent 1px);
                background-size: 40px 40px;">
        </div>

        <div class="absolute inset-0 pointer-events-none flex items-center justify-center">
            
            <div class="absolute w-[500px] h-[500px] opacity-[0.03] rotate-12">
                <svg viewBox="0 0 100 100" class="w-full h-full text-${themeColor}">
                    <path fill="currentColor" d="M50,85 L15,50 A25,25 0 0,1 50,20 A25,25 0 0,1 85,50 Z" />
                </svg>
            </div>

            <div class="absolute top-[10%] right-[5%] w-64 h-64 opacity-30 filter drop-shadow-[0_0_20px_${accentHex}]">
                <svg viewBox="0 0 100 100" class="w-full h-full text-${themeColor}">
                    <path fill="none" stroke="currentColor" stroke-width="0.8" d="M50,88 L12,50 A28,28 0 0,1 50,18 A28,28 0 0,1 88,50 Z" />
                    <path fill="none" stroke="currentColor" stroke-width="0.4" d="M50,25 V40 M30,50 H45 M55,50 H75 M50,60 V80" />
                    <rect x="46" y="42" width="8" height="8" fill="none" stroke="currentColor" stroke-width="0.5" class="animate-pulse" />
                    <circle cx="30" cy="50" r="1.5" fill="currentColor" />
                    <circle cx="75" cy="50" r="1.5" fill="currentColor" />
                    <circle cx="50" cy="25" r="1.5" fill="currentColor" />
                </svg>
            </div>

            <div class="absolute bottom-[20%] left-[10%] border-l-2 border-${themeColor}/30 pl-4 py-2 opacity-40 font-mono">
                <p class="text-[10px] text-${themeColor} font-black uppercase tracking-tighter">Heart_Rate: 144_BPM</p>
                <p class="text-[8px] text-white/40 uppercase">Encrypted_Affection: ACTIVE</p>
                <div class="w-12 h-1 bg-${themeColor}/20 mt-1 overflow-hidden">
                    <div class="h-full bg-${themeColor} animate-loadingBarShadow" style="width: 70%"></div>
                </div>
            </div>
        </div>

        <div class="absolute inset-0 w-full h-full">
            <div class="w-full h-[35vh] bg-gradient-to-b from-transparent via-${themeColor}/10 to-transparent -translate-y-full animate-slowScan"></div>
        </div>
        <div class="absolute inset-0 shadow-[inset_0_0_250px_rgba(0,0,0,1)]"></div>
    </div>

    <div class="relative z-10 min-h-screen w-full flex flex-col items-center justify-center p-6 animate-fadeIn text-center transform -translate-y-10 md:-translate-y-16">
      
      <div class="mb-6 md:mb-8">
        <div class="w-16 h-16 md:w-18 md:h-18 mx-auto rounded-2xl bg-gradient-to-br ${isBot ? "from-red-500 to-red-700" : "from-pink-500 to-pink-700"} flex items-center justify-center overflow-hidden mb-4 shadow-[0_0_25px_${shadowColor}] animate-bounce">
  <img 
    src="${winner === "user" ? bansotImageUrl : tukoImageUrl}" 
    class="w-full h-full object-cover" 
    alt="Winner Icon"
  />
</div>
        <h2 class="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none mb-2">
            ${winner === "user" ? "Your <span class='text-pink-500'>Turn</span>" : "Tukoo's <span class='text-red-500'>Turn</span>"}
        </h2>
        <p class="text-[8px] md:text-[10px] font-black text-${themeColor} opacity-70 uppercase tracking-[0.4em]">Protocol: Dare_Exchange_0${round}</p>
      </div>

      <div id="dare-action-area" class="relative z-20 w-full flex items-center justify-center py-2">
        ${winner === "user" ? renderUserInput() : renderBotThinking()}
      </div>

      <div class="mt-8 flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-1.5 rounded-full backdrop-blur-md opacity-90">
          <div class="w-1.5 h-1.5 rounded-full bg-${themeColor} animate-pulse"></div>
          <p class="text-[8px] font-black text-white/50 uppercase tracking-[0.2em]">Connection: ${isBot ? "Secure_Linked" : "Admin_Access"}</p>
      </div>
    </div>
`;

    // (isBot setTimeout block remains the same...)
    if (isBot) {
      setTimeout(() => {
        const botDares = [
          "Video yourself dancing 🙈",
          "Send 3 voice messages of you singing 🥰",
          "Baby time 🙊",
          "18 kisses 😗",
          "Send a selfie with your cutest smile 😘",
          "Record a 10-second love note for me 💌",
        ];

        currentBet = botDares[Math.floor(Math.random() * botDares.length)];
        document.getElementById("dare-action-area").innerHTML = `
        <div class="animate-fadeIn flex flex-col items-center max-w-lg w-full px-4">
          <p class="text-[9px] font-black text-red-500 uppercase tracking-[0.3em] mb-3 opacity-80">Tukoo's Demands</p>
          <div class="w-full px-6 py-8 bg-white/5 border border-white/10 backdrop-blur-xl rounded-[1.5rem] mb-6 shadow-xl">
              <p class="text-xl md:text-2xl font-black text-white italic uppercase tracking-tighter">"${currentBet}"</p>
          </div>
          <button onclick="startBattle()" class="group relative px-10 py-3 bg-white text-black font-black rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg">
            <span class="relative z-10 uppercase tracking-widest text-[10px]">Challenge Accepted</span>
            <div class="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        </div>
      `;
      }, 3000);
    }
  };

  function renderUserInput() {
    return `
    <div class="animate-fadeIn w-full max-w-[300px] md:max-w-xl flex flex-col items-center md:-mt-8">
      <div class="relative w-full mb-4 group/input">
          <input type="text" id="dare-input" placeholder="ENTER YOUR DARE..." 
            class="w-full bg-black/40 border border-pink-500/20 rounded-xl md:rounded-full p-4 md:p-5 
                   text-white font-black tracking-widest text-center outline-none transition-all duration-300
                   placeholder:text-pink-900/20 text-base md:text-lg
                   hover:border-pink-500/50 hover:bg-pink-500/[0.08]
                   focus:border-pink-500 focus:bg-pink-500/10 focus:shadow-[0_0_20px_rgba(236,72,153,0.15)]">
          
          <div class="absolute -top-2 left-1/2 -translate-x-1/2 bg-pink-600 text-[7px] font-black px-2 py-0.5 rounded italic text-white uppercase tracking-tighter transition-transform group-hover/input:scale-110">
            Input_Field
          </div>
      </div>

      <button onclick="confirmUserDare()" 
        class="group relative w-full max-w-[240px] py-3 bg-pink-600 text-white font-black rounded-full overflow-hidden transition-all hover:scale-[1.05] active:scale-95 shadow-lg hover:shadow-pink-500/20">
        <span class="relative z-10 uppercase tracking-widest text-[10px]">Set Stake & Fight</span>
        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      </button>
    </div>
  `;
  }

  function renderBotThinking() {
    return `
    <div class="flex flex-col items-center justify-center p-4 animate-fadeIn md:-mt-8">
      
      <div class="relative mb-4">
          <div class="absolute inset-0 w-20 h-20 md:w-24 md:h-24 -left-2 -top-2 md:-left-3 md:-top-3 border-2 border-red-500/20 rounded-full animate-ping"></div>
          
          <div class="relative w-16 h-16 md:w-18 md:h-18 bg-black border border-red-500 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.2)] overflow-hidden">
              <img src="images/games/tuko.jpg" alt="tukoo" class="w-full h-full object-cover opacity-80 transition-opacity">
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/10 to-transparent animate-scanline pointer-events-none"></div>
          </div>
          
          <div class="absolute top-0 left-0 w-full h-1 bg-red-500/60 shadow-[0_0_10px_#ef4444] animate-scanline rounded-full"></div>
      </div>

      <div class="text-center">
          <h3 class="text-xl md:text-2xl font-black text-white uppercase italic tracking-tighter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]">
            <span class="text-red-500 animate-pulse">Plotting</span>
          </h3>
      </div>

      <div class="mt-4 w-40 md:w-48 h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/10 p-[1px]">
          <div class="h-full bg-gradient-to-r from-red-600 via-red-400 to-pink-500 rounded-full animate-loadingBarShadow" style="width: 100%"></div>
      </div>
    </div>
  `;
  }

  window.confirmUserDare = () => {
    const val = document.getElementById("dare-input").value;
    currentBet = val || "A sweet kiss";
    startBattle();
  };

  window.startBattle = () => {
    userHealth = 3;
    botHealth = 3;
    renderArena();
  };

  function renderArena(
    userChoice = null,
    botChoice = null,
    resultText = "Battle for the Stake!",
  ) {
    // Theme configuration for the Arena
    const themeColor = "pink-500";
    const botTheme = "red-500";

    // Wrapped in a fixed inset-0 container for perfect full-screen fit
    container.innerHTML = `
      <div class="fixed inset-0 w-full h-full flex flex-col justify-between p-4 animate-fadeIn select-none bg-[#0f0a0c] overflow-hidden">
        
        <div class="absolute inset-0 z-0 pointer-events-none">
            <div class="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-pink-900/20 to-transparent blur-[100px]"></div>
            <div class="absolute inset-0 opacity-[0.03]" 
                 style="background-image: linear-gradient(45deg, #ff4d6d 1px, transparent 1px), linear-gradient(-45deg, #ff4d6d 1px, transparent 1px); background-size: 40px 40px;">
            </div>
        </div>

        <div class="relative z-10 flex justify-between items-center w-full max-w-6xl mx-auto px-6 md:px-14">
          
          <div class="flex items-center gap-3">
            <div class="relative">
                <div class="w-12 h-12 md:w-16 md:h-16 rounded-xl border-2 border-pink-500/50 overflow-hidden bg-black shadow-[0_0_15px_rgba(236,72,153,0.3)]">
                    <img src="images/games/bansot.jpg" class="w-full h-full object-cover" />
                </div>
                <div class="absolute -bottom-1 -right-1 bg-pink-500 text-[8px] font-black px-1 rounded text-white italic">Bansot</div>
            </div>
            <div class="flex flex-col">
              <span class="font-black text-[10px] tracking-[0.3em] text-pink-500 uppercase leading-none mb-1">Bansooot</span>
              <div id="user-hearts" class="flex gap-1 filter drop-shadow-[0_0_5px_rgba(236,72,153,0.8)]">
                ${"❤️".repeat(userHealth)}${"🖤".repeat(3 - userHealth)}
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center">
            <div class="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.4)]">
              <span class="font-black italic text-lg">${round}</span>
            </div>
            <span class="text-[8px] font-black uppercase text-white/40 tracking-[0.4em] mt-1 italic">Phase</span>
          </div>

          <div class="flex items-center gap-3 text-right">
            <div class="flex flex-col items-end">
              <span class="font-black text-[10px] tracking-[0.3em] text-red-500 uppercase leading-none mb-1">Tukoooo</span>
              <div id="bot-hearts" class="flex gap-1 filter drop-shadow-[0_0_5px_rgba(239,68,68,0.8)]">
                ${"❤️".repeat(botHealth)}${"🖤".repeat(3 - botHealth)}
              </div>
            </div>
            <div class="relative">
                <div class="w-12 h-12 md:w-16 md:h-16 rounded-xl border-2 border-red-500/50 overflow-hidden bg-black shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                    <img src="images/games/tuko.jpg" class="w-full h-full object-cover" />
                </div>
                <div class="absolute -bottom-1 -left-1 bg-red-500 text-[8px] font-black px-1 rounded text-white italic">Tukoo</div>
            </div>
          </div>
        </div>

        <div class="relative z-10 bg-white/5 backdrop-blur-md mx-auto px-8 py-2 rounded-full border border-white/10 text-center max-w-xs shadow-2xl mt-4">
           <p class="text-[8px] font-black text-pink-500/60 uppercase tracking-widest">Active Stake</p>
           <p class="text-xs font-bold text-white italic uppercase tracking-tighter">"${currentBet}"</p>
        </div>

        <div class="relative z-10 flex flex-grow items-center justify-center gap-4 md:gap-20 px-4">
          <div id="user-box" class="w-32 h-32 md:w-56 md:h-56 bg-black/40 border-2 border-pink-500/30 rounded-[2.5rem] flex items-center justify-center text-6xl md:text-8xl shadow-[0_0_30px_rgba(236,72,153,0.1)] transition-all duration-300">
              ${userChoice !== null ? choices[userChoice].icon : "⚔️"}
          </div>

          <div class="text-2xl font-black italic text-white/10">VS</div>

          <div id="bot-box" class="w-32 h-32 md:w-56 md:h-56 bg-black/40 border-2 border-red-500/30 rounded-[2.5rem] flex items-center justify-center text-6xl md:text-8xl shadow-[0_0_30px_rgba(239,68,68,0.1)] transition-all duration-300">
              ${botChoice !== null ? choices[botChoice].icon : "❓"}
          </div>
        </div>

        <div class="relative z-10 shrink-0 pb-6">
          <div class="text-center h-12 mb-4">
            <h2 id="battle-result" class="text-2xl md:text-4xl font-black text-white uppercase italic tracking-tighter drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                ${resultText}
            </h2>
          </div>

          <div class="grid grid-cols-3 gap-4 max-w-md mx-auto px-4">
            ${choices
              .map(
                (choice, i) => `
              <button onclick="playRound(${i})" 
                class="group flex flex-col items-center bg-white/5 border border-white/10 p-4 rounded-3xl hover:bg-pink-600 transition-all shadow-xl active:scale-95 hover:-translate-y-1">
                <span class="text-3xl md:text-4xl mb-2 filter group-hover:drop-shadow-[0_0_10px_white] transition-all">${choice.icon}</span>
                <span class="text-[9px] font-black text-white/40 group-hover:text-white uppercase tracking-widest">${choice.name}</span>
              </button>
            `,
              )
              .join("")}
          </div>
        </div>
      </div>
    `;
  }

  window.playRound = (index) => {
    const userBox = document.getElementById("user-box");
    const botBox = document.getElementById("bot-box");
    const userChoice = choices[index];
    const botChoice = choices[Math.floor(Math.random() * 3)];

    userBox.style.transform = "translateX(40px) rotate(5deg)";
    botBox.style.transform = "translateX(-40px) rotate(-5deg)";
    userBox.innerText = userChoice.icon;
    botBox.innerText = botChoice.icon;

    setTimeout(() => {
      if (userChoice.name === botChoice.name) {
        document.getElementById("battle-result").innerText = "Draw! Re-clash!";
        userBox.style.transform = "scale(0.9)";
        botBox.style.transform = "scale(0.9)";
      } else if (userChoice.beats === botChoice.name) {
        botHealth--;
        document.getElementById("battle-result").innerText = "Hit! 🏹";
      } else {
        userHealth--;
        document.getElementById("battle-result").innerText = "Ouch! 💔";
      }

      document.getElementById("user-hearts").innerHTML =
        "❤️".repeat(userHealth) + "🖤".repeat(3 - userHealth);
      document.getElementById("bot-hearts").innerHTML =
        "❤️".repeat(botHealth) + "🖤".repeat(3 - botHealth);

      if (userHealth === 0 || botHealth === 0) {
        const roundWinner = userHealth > 0 ? "user" : "bot";

        // SAVE HISTORY HERE
        roundHistory.push({
          dare: currentBet,
          winner: roundWinner,
          setBy:
            round === 1
              ? window.initialPickerWinner || "user"
              : roundHistory[round - 2].winner,
        });

        if (roundWinner === "user") userScore++;
        else botScore++;

        setTimeout(() => {
          if (round >= maxRounds) {
            showFinalResult();
          } else {
            round++;
            initiateDareSequence(roundWinner);
          }
        }, 1500);
      } else {
        setTimeout(() => {
          userBox.style.transform = "none";
          botBox.style.transform = "none";
          userBox.innerText = "⚔️";
          botBox.innerText = "❓";
        }, 1000);
      }
    }, 400);
  };

  function showFinalResult() {
    const ultimateWinner = userScore > botScore;

    const userDaresWon = roundHistory.filter(
      (h) => h.setBy === "user" && h.winner === "user",
    );

    const botDaresWon = roundHistory.filter(
      (h) => h.setBy === "bot" && h.winner === "bot",
    );

    const successfulDares = [...userDaresWon, ...botDaresWon];

    container.innerHTML = `
      <div class="fixed inset-0 w-full h-full flex flex-col justify-between p-4 bg-[#0f0a0c] animate-fadeIn select-none overflow-hidden">
        
        <div class="absolute inset-0 z-0 pointer-events-none">
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b ${ultimateWinner ? "from-pink-900/20" : "from-red-900/20"} to-transparent blur-[120px] opacity-50"></div>
            <div class="absolute inset-0 opacity-[0.03]" 
                 style="background-image: linear-gradient(45deg, #ff4d6d 1px, transparent 1px), linear-gradient(-45deg, #ff4d6d 1px, transparent 1px); background-size: 40px 40px;">
            </div>
        </div>

        <div class="relative z-10 pt-4 shrink-0 px-4 text-center">
          <h2 class="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-none drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            ${ultimateWinner ? "Bansot <span class='text-pink-500'>Wins</span>" : "Tukoo <span class='text-red-500'>Wins</span>"}
          </h2>
          <p class="text-[9px] font-black text-white/40 uppercase tracking-[0.5em] mt-2 italic">Final Battle Report</p>
        </div>

        <div class="relative z-10 w-full max-w-xl md:max-w-5xl mx-auto px-2 flex flex-col md:grid md:grid-cols-3 gap-4 flex-grow justify-center items-center py-6 overflow-hidden">
          
          <div class="flex flex-col bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-[2rem] p-5 shadow-2xl relative order-first md:order-none md:col-start-2 w-full min-h-[160px] justify-center text-center">
             <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter italic whitespace-nowrap">The Decree</div>
             
             <div class="space-y-4 overflow-y-auto max-h-[25vh] md:max-h-full custom-scrollbar pr-1">
               ${
                 successfulDares.length > 0
                   ? successfulDares
                       .map(
                         (d) => `
                 <div class="flex flex-col gap-1">
                     <p class="text-[7px] font-black uppercase tracking-[0.2em] ${d.winner === "user" ? "text-pink-500" : "text-red-500"}">
                         ${d.winner === "user" ? "Bot must perform:" : "You must perform:"}
                     </p>
                     <p class="text-lg md:text-2xl font-black text-white uppercase italic tracking-tighter leading-tight">
                         "${d.dare}"
                     </p>
                 </div>
               `,
                       )
                       .join(
                         "<div class='h-px w-8 bg-white/10 mx-auto my-1'></div>",
                       )
                   : '<p class="text-white/30 italic text-xs">No stakes were claimed.</p>'
               }
             </div>
          </div>

          <div class="flex flex-col bg-white/5 border border-white/10 rounded-[1.5rem] p-3 md:order-first w-full ${!ultimateWinner ? "opacity-40" : "shadow-[0_0_20px_rgba(236,72,153,0.1)]"} min-h-[100px] max-h-[140px] md:max-h-full">
            <div class="flex flex-row md:flex-col items-center gap-2 mb-2 justify-center">
              <div class="relative w-8 h-8 md:w-12 md:h-12 rounded-lg border border-pink-500/50 overflow-hidden">
                 <img src="images/games/bansot.jpg" class="w-full h-full object-cover" />
              </div>
              <span class="text-[8px] font-black text-pink-500 uppercase tracking-widest">Your Victories</span>
            </div>
            <div class="overflow-y-auto space-y-2 px-1 custom-scrollbar">
               ${
                 userDaresWon.length > 0
                   ? userDaresWon
                       .map(
                         (d) =>
                           `<div class="bg-black/40 border border-white/5 p-2 rounded-lg text-[9px] text-pink-100 italic text-left">"${d.dare}"</div>`,
                       )
                       .join("")
                   : '<p class="text-[8px] text-white/20 italic text-center">Empty</p>'
               }
            </div>
          </div>

          <div class="flex flex-col bg-white/5 border border-white/10 rounded-[1.5rem] p-3 w-full ${ultimateWinner ? "opacity-40" : "shadow-[0_0_20px_rgba(239,68,68,0.1)]"} min-h-[100px] max-h-[140px] md:max-h-full">
            <div class="flex flex-row md:flex-col items-center gap-2 mb-2 justify-center">
              <div class="relative w-8 h-8 md:w-12 md:h-12 rounded-lg border border-red-500/50 overflow-hidden">
                 <img src="images/games/tuko.jpg" class="w-full h-full object-cover" />
              </div>
              <span class="text-[8px] font-black text-red-500 uppercase tracking-widest">Tukoo Victories</span>
            </div>
            <div class="overflow-y-auto space-y-2 px-1 custom-scrollbar">
               ${
                 botDaresWon.length > 0
                   ? botDaresWon
                       .map(
                         (d) =>
                           `<div class="bg-black/40 border border-white/5 p-2 rounded-lg text-[9px] text-red-100 italic text-left">"${d.dare}"</div>`,
                       )
                       .join("")
                   : '<p class="text-[8px] text-white/20 italic text-center">Empty</p>'
               }
            </div>
          </div>

        </div>

        <div class="relative z-10 pb-6 shrink-0 text-center">
           <p class="text-[7px] font-black text-white/20 uppercase tracking-[0.4em]">Operation Concluded</p>
        </div>
      </div>
    `;
  }

  showInitialPicker();
}

function loadInYourWords(container) {
  const prompts = [
    {
      label: "What is one thing you think we need to work on as a couple?",
      placeholder: "...",
    },
    {
      label: "What do you believe we're teaching each other right now?",
      placeholder: "...",
    },
    {
      label: "What have you learned about yourself from loving me?",
      placeholder: "...",
    },
    {
      label: "How do you feel about the way we handle our individdual space?",
      placeholder: "...",
    },
    {
      label: "When do you feel most vulnerable in our relationship?",
      placeholder: "...",
    },
    {
      label: "How do you like to be supported during difficult times?",
      placeholder: "...",
    },
    {
      label:
        "What part of yourself have you trusted me with that you’ve never trusted anyone else with?",
      placeholder: "...",
    },
    {
      label:
        "Do you think love is enough to build a strong relationship, or does financial capacity play an equal role?",
      placeholder: "...",
    },
    {
      label:
        "When you see other relationships or different kinds of men, does it ever make you reflect on ours in any way?",
      placeholder: "...",
    },
    {
      label: "Will you marry me??",
      placeholder: "...",
    },
  ];

  let currentStep = 0;
  let messages = [];

  function renderStep() {
    const item = prompts[currentStep];
    container.innerHTML = `
    <div class="fixed inset-0 w-full h-full bg-gradient-to-br from-[#FFF5F6] via-[#FEF9F9] to-[#FFF0F2] z-0">
      
      <div class="absolute inset-0 z-0 opacity-[0.25] pointer-events-none" 
           style="background-image: linear-gradient(#FFD1DC 1px, transparent 1px), linear-gradient(90deg, #FFD1DC 1px, transparent 1px); background-size: 32px 32px;">
      </div>

      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-100/40 rounded-full blur-[120px] z-0 animate-pulse"></div>
    </div>

    <div class="flex flex-col min-h-full max-w-2xl mx-auto p-6 md:p-12 animate-fadeIn relative z-10">
      
      <div class="flex-grow flex flex-col justify-center items-center text-center px-2 mb-8 relative z-10">
          <div class="flex flex-col items-center gap-1 mb-4">
            <span class="text-[#560bad] font-black text-[9px] uppercase tracking-[0.6em] opacity-80">Collection: In Your Words</span>
            <div class="h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div>
          </div>
          
          <h3 class="text-3xl md:text-5xl font-serif italic text-gray-900 leading-tight tracking-tight drop-shadow-sm">
            ${item.label}
          </h3>
          
          <div class="mt-6 flex items-center gap-3">
             <span class="text-[10px] font-bold text-red-300 uppercase tracking-widest italic">Phase</span>
             <span class="text-lg font-serif italic text-red-700">${currentStep + 1}</span>
             <span class="text-[10px] font-bold text-red-300 uppercase tracking-widest italic">of ${prompts.length}</span>
          </div>
      </div>

      <div class="w-full pb-4 relative z-10">
        <div class="relative flex flex-col gap-4 bg-white/95 backdrop-blur-md rounded-3xl border border-red-100 shadow-[0_20px_50px_rgba(185,28,28,0.12)] p-6 md:p-8 transition-all focus-within:shadow-[0_20px_60px_rgba(185,28,28,0.2)] focus-within:border-red-400 focus-within:bg-white">
          
          <div class="flex justify-between items-center px-1">
            <span class="text-[10px] font-mono text-red-400 uppercase tracking-tighter">Drafting Manuscript...</span>
            <div class="flex gap-1.5">
               <div class="w-2 h-2 rounded-full bg-red-100 animate-pulse"></div>
               <div class="w-2 h-2 rounded-full bg-red-600 shadow-[0_0_5px_rgba(220,38,38,0.5)]"></div>
            </div>
          </div>

          <div class="flex items-end gap-4">
            <textarea id="words-input" 
              class="flex-grow bg-transparent border-none focus:ring-0 focus:outline-none p-0 text-gray-800 text-lg md:text-2xl font-mono placeholder-red-100/50 resize-none max-h-40 overflow-y-auto leading-relaxed italic"
              placeholder="${item.placeholder}" 
              rows="1"
              oninput="this.style.height = '';this.style.height = Math.min(this.scrollHeight, 160) + 'px'"></textarea>
            
            <button onclick="saveWords()" 
              class="bg-gray-900 hover:bg-red-700 text-white w-14 h-14 rounded-2xl transition-all duration-500 flex items-center justify-center shrink-0 shadow-xl active:scale-90 group">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
        
        <div class="mt-8 flex justify-between items-center px-2">
            <div class="flex items-center gap-2">
               <div class="w-2 h-2 bg-red-600 rounded-full animate-ping"></div>
               <span class="text-[9px] font-black text-gray-400 uppercase tracking-[0.4em]">Live Connection</span>
            </div>
            
            <div class="w-32 h-[3px] bg-red-100/50 relative overflow-hidden rounded-full">
               <div class="absolute inset-y-0 left-0 bg-red-600 transition-all duration-1000 shadow-[0_0_10px_rgba(220,38,38,0.8)]" 
                    style="width: ${((currentStep + 1) / prompts.length) * 100}%"></div>
            </div>
        </div>
      </div>
    </div>
  `;

    setTimeout(() => {
      const input = document.getElementById("words-input");
      if (input) input.focus();
    }, 100);
  }

  window.saveWords = () => {
    const input = document.getElementById("words-input");
    if (!input || input.value.trim() === "")
      return alert("Don't leave me hanging! Write something sweet.");

    messages.push({
      prompt: prompts[currentStep].label,
      answer: input.value.trim(),
    });

    currentStep++;
    if (currentStep < prompts.length) {
      renderStep();
    } else {
      showFinalLetter();
    }
  };

  function showFinalLetter() {
    container.innerHTML = `
    <div class="fixed inset-0 w-full h-full bg-gradient-to-br from-[#FFF5F6] via-[#FEF9F9] to-[#FFF0F2] z-0">
      <div class="absolute inset-0 z-0 opacity-[0.25] pointer-events-none" 
           style="background-image: linear-gradient(#FFD1DC 1px, transparent 1px), linear-gradient(90deg, #FFD1DC 1px, transparent 1px); background-size: 32px 32px;">
      </div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-100/40 rounded-full blur-[120px] z-0 animate-pulse"></div>
    </div>

    <div class="flex flex-col min-h-full max-w-2xl mx-auto p-6 md:p-12 animate-fadeIn relative z-10 pb-20">
      
      <div id="capture-letter" class="bg-white/95 backdrop-blur-md p-8 md:p-16 rounded-[2.5rem] md:rounded-[3rem] shadow-[0_20px_50px_rgba(185,28,28,0.15)] border border-red-50 relative h-auto overflow-hidden">
        
        <div class="absolute top-6 right-6 md:top-12 md:right-12 w-14 h-14 md:w-20 md:h-20 border-2 border-red-100 rounded-xl flex flex-col items-center justify-center text-red-200 rotate-12 select-none">
          <span class="text-[8px] md:text-[10px] font-black uppercase tracking-tighter">Verified</span>
          <span class="font-serif italic text-sm md:text-xl text-red-300">FEB 14</span>
        </div>

        <div class="mb-10">
          <span class="text-[10px] font-black text-[#560bad] uppercase tracking-[0.4em] block mb-2 opacity-60">Completed Manuscript</span>
          <h2 class="font-serif italic text-4xl md:text-6xl text-gray-900 leading-none">To us...</h2>
        </div>
        
        <div class="space-y-10 font-mono text-base md:text-lg leading-relaxed text-gray-700 relative">
          <div class="absolute -left-4 md:-left-8 top-0 bottom-0 w-px bg-red-50"></div>

          ${messages
            .map(
              (m) => `
            <div class="text-left relative">
              <p class="text-[8px] font-black text-red-400 uppercase tracking-[0.3em] mb-3 leading-tight italic">Q: ${m.prompt}</p>
              <div class="pl-0">
                <p class="text-gray-800 break-words whitespace-pre-wrap font-mono italic md:text-xl">
                  "${m.answer}"
                </p>
              </div>
            </div>
          `,
            )
            .join("")}
        </div>

        <div class="mt-16 pt-8 border-t border-red-50 text-right">
            <p class="font-serif italic text-3xl md:text-5xl text-red-700">I love you.</p>
            <p class="text-[9px] font-black text-gray-300 uppercase tracking-[0.6em] mt-2">End of Entry</p>
        </div>
      </div>

      <div class="mt-10 flex justify-center">
        <button onclick="saveAsImage()" 
          class="group w-full md:w-auto px-12 py-5 bg-gray-900 text-white rounded-2xl text-[10px] font-black tracking-[0.3em] uppercase italic hover:bg-red-700 transition-all shadow-2xl flex items-center justify-center gap-4 active:scale-95">
          <span id="btn-text">Archive as Image</span>
          <div class="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:rotate-12 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </div>
        </button>
      </div>

    </div>
  `;
  }

  renderStep();
}

window.saveAsImage = function () {
  const element = document.getElementById("capture-letter");
  const btnText = document.getElementById("btn-text");
  const originalWidth = element.offsetWidth;

  btnText.innerText = "Generating...";

  const clone = element.cloneNode(true);
  Object.assign(clone.style, {
    position: "absolute",
    top: "-9999px",
    left: "0",
    width: originalWidth + "px",
    height: "auto",
    overflow: "visible",
    transform: "none",
  });
  document.body.appendChild(clone);

  setTimeout(() => {
    html2canvas(clone, {
      backgroundColor: "#fffafa",
      scale: 3,
      useCORS: true,
      allowTaint: true,
      width: originalWidth,
      height: clone.offsetHeight,
    }).then(async (canvas) => {
      document.body.removeChild(clone);

      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

      if (isMobile && navigator.share) {
        canvas.toBlob(async (blob) => {
          const file = new File([blob], "Letter-to-Tokoo.png", {
            type: "image/png",
          });
          try {
            await navigator.share({
              files: [file],
              title: "Our Story",
            });
            btnText.innerText = "Sent! ✨";
          } catch (err) {
            btnText.innerText = "Send to Tokoo";
          }
        });
      } else {
        const link = document.createElement("a");
        link.download = "Letter-to-Tokoo.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
        btnText.innerText = "Downloaded! ❤️";
      }
    });
  }, 100);
};

let guiltCount = 0;
const totalImages = 6;
let isGameOver = false;

function dodgeAndGuilt() {
  if (isGameOver) return;

  const noBtn = document.getElementById("no-dodge");
  const yesBtn = document.getElementById("yes-boss");
  const container = document.getElementById("valentine-boss");
  const overlay = document.getElementById("guilt-overlay");

  guiltCount++;

  // 1. SURRENDER CHECK (At exactly 10 hovers)
  if (guiltCount >= 10) {
    // Force scale to be huge on the 10th hover
    yesBtn.style.transform = `scale(40)`;
    triggerNoButtonSuicide();
    return;
  }

  // 2. "NO" BUTTON POSITIONING
  noBtn.style.zIndex = "2000";
  noBtn.style.position = "absolute";

  const safeWidth = container.clientWidth * 0.8;
  const safeHeight = container.clientHeight * 0.8;
  const startX = (container.clientWidth - safeWidth) / 2;
  const startY = (container.clientHeight - safeHeight) / 2;

  const maxX = safeWidth - noBtn.offsetWidth;
  const maxY = safeHeight - noBtn.offsetHeight;

  noBtn.style.left = `${Math.random() * maxX + startX}px`;
  noBtn.style.top = `${Math.random() * maxY + startY}px`;

  // 3. IMAGE SPAWNING (Limit to 5)
  if (overlay.children.length >= 5) {
    overlay.removeChild(overlay.firstChild);
  }

  const imgIndex = guiltCount % totalImages || totalImages;
  const img = document.createElement("img");
  img.src = `images/valentines/shock${imgIndex}.jpg`;

  const popX = Math.random() * (container.clientWidth - 200);
  const popY = Math.random() * (container.clientHeight - 200);

  img.className =
    "absolute w-40 h-40 md:w-56 md:h-56 object-cover rounded-2xl shadow-xl border-4 border-white animate-pop-in";
  img.style.left = `${popX}px`;
  img.style.top = `${popY}px`;
  img.style.zIndex = "1000";
  img.style.transform = `rotate(${(Math.random() - 0.5) * 40}deg)`;

  overlay.appendChild(img);

  // 4. GROW YES BUTTON (Calculated to reach huge size by count 10)
  // Starts at 1.0, adds roughly 3.9 per hover to reach ~40 scale
  const currentScale = 1 + guiltCount * 1;
  yesBtn.style.transform = `scale(${currentScale})`;
  yesBtn.style.zIndex = "100";
}

function triggerNoButtonSuicide() {
  isGameOver = true;
  const noBtn = document.getElementById("no-dodge");
  const yesBtn = document.getElementById("yes-boss");
  const container = document.getElementById("valentine-boss");

  const btnRect = noBtn.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();
  const startX = btnRect.left - containerRect.left;
  const startY = btnRect.top - containerRect.top;

  // 1. Create the Truck
  const truck = document.createElement("div");
  truck.id = "cleanup-truck";
  truck.innerHTML = `
    <svg width="240" height="120" viewBox="0 0 240 120">
      <ellipse cx="110" cy="95" rx="90" ry="10" fill="black" fill-opacity="0.1" />
      <g class="truck-chassis">
        <rect x="20" y="20" width="120" height="60" rx="4" fill="#fbbf24"/> 
        <g id="truck-cargo-item" style="opacity: 0; transform: translate(40px, 30px) scale(0.6);">
           <rect width="70" height="40" rx="5" fill="#334155" stroke="white" stroke-width="2"/>
           <text x="35" y="25" fill="white" font-size="10" text-anchor="middle" font-family="Arial" font-weight="bold">CLEANUP</text>
        </g>
        <path d="M20 20L35 10H155L140 20H20Z" fill="#fcd34d"/> 
        <path d="M140 35H180C188 35 195 42 195 50V80H140V35Z" fill="#fbbf24"/> 
        <path d="M150 42H175V55H145L150 42Z" fill="#334155" fill-opacity="0.8"/>
      </g>
      <g class="wheel-group front-wheel" style="transform-origin: 160px 85px;"><circle cx="160" cy="85" r="18" fill="#1e293b"/><circle cx="160" cy="85" r="12" fill="#475569" stroke="white" stroke-width="2"/></g>
      <g class="wheel-group back-wheel" style="transform-origin: 60px 85px;"><circle cx="60" cy="85" r="18" fill="#1e293b"/><circle cx="60" cy="85" r="12" fill="#475569" stroke="white" stroke-width="2"/></g>
    </svg>
  `;

  truck.className = "absolute z-[3000] truck-moving";
  truck.style.left = "-300px";
  truck.style.top = `${startY + btnRect.height / 2}px`;
  truck.style.transform = "translateY(-50%)";
  container.appendChild(truck);

  // Helper: Smooth JS Parabolic Jump
  function animateHop(element, targetX, targetY, callback) {
    const startX = parseFloat(element.style.left);
    const startY = parseFloat(element.style.top);
    const duration = 800;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out sine for X, parabolic for Y
      const currentX = startX + (targetX - startX) * progress;
      const jumpHeight = 150;
      const currentY =
        startY +
        (targetY - startY) * progress -
        Math.sin(progress * Math.PI) * jumpHeight;

      element.style.left = `${currentX}px`;
      element.style.top = `${currentY}px`;
      element.style.transform = `translate(-50%, -50%) rotate(${progress * 20}deg) scale(${1 - progress * 0.4})`;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.style.opacity = "0";
        if (callback) callback();
      }
    }
    requestAnimationFrame(update);
  }

  // --- EXECUTION CHAIN ---
  setTimeout(() => {
    // 1. Truck arrives and stops so the BED (rect at x=20) is near the button
    truck.style.transition = "left 1.5s cubic-bezier(0.25, 1, 0.5, 1)";
    const stopX = startX - 40;
    truck.style.left = `${stopX}px`;

    setTimeout(() => {
      truck.classList.remove("truck-moving");

      // 2. Spawn Sign
      const warningSign = document.createElement("div");
      warningSign.className =
        "warning-sign absolute z-[2900] bg-yellow-400 border-2 border-black p-2 text-[11px] font-bold uppercase";
      warningSign.style.left = `${startX + 40}px`;
      warningSign.style.top = `${startY + 80}px`;
      warningSign.style.opacity = "0";
      warningSign.innerHTML = "Removing this<br>damn button!";
      container.appendChild(warningSign);

      // Pop the sign
      warningSign.style.transition =
        "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
      setTimeout(() => {
        warningSign.style.opacity = "1";
        warningSign.style.transform = "scale(1)";
      }, 100);

      // 3. The Sequenced Hops
      setTimeout(() => {
        const cargoBedX = stopX + 60; // Exact center of truck cargo bed
        const cargoBedY = startY;

        // Hop 1: Button
        animateHop(noBtn, cargoBedX, cargoBedY, () => {
          truck.classList.add("truck-jolt");

          // Hop 2: Sign (Starts after button lands)
          setTimeout(() => {
            animateHop(warningSign, cargoBedX, cargoBedY, () => {
              document.getElementById("truck-cargo-item").style.opacity = "1";

              // 4. Leave
              setTimeout(() => {
                truck.classList.add("truck-moving");
                truck.style.transition = "left 2s cubic-bezier(0.4, 0, 1, 1)";
                truck.style.left = "120vw";

                setTimeout(() => {
                  noBtn.remove();
                  truck.remove();
                  warningSign.remove();
                  yesBtn.style.zIndex = "9999";
                  document.getElementById("guilt-overlay").style.display =
                    "none";
                }, 2000);
              }, 600);
            });
          }, 300);
        });
      }, 2000);
    }, 1600);
  }, 100);
}

function acceptValentine() {
  // 1. Instantly remove the No button if it's still there
  const noBtn = document.getElementById("no-dodge");
  if (noBtn) {
    noBtn.remove();
  }

  // 2. Hide the question container and the guilt images
  document.getElementById("ask-container").classList.add("hidden");
  document.getElementById("guilt-overlay").style.display = "none";

  // 3. Show the success message
  const success = document.getElementById("final-success");
  success.classList.remove("hidden");

  // Force the success message to the top layer so it's not hidden
  success.style.zIndex = "10000";
  success.classList.add("flex", "flex-col", "items-center", "justify-center");
}

window.addEventListener("load", () => {
  const noBtn = document.getElementById("no-dodge");

  noBtn.style.left = "calc(50% + -5px)";

  noBtn.style.top = "85%";

  // Ensure it doesn't jump when the script starts
  noBtn.style.transform = "translate(-50%, -50%)";
});

function createPoppingHeart() {
  const container = document.getElementById("final-success");
  // Only create hearts if the success screen is actually visible
  if (container.classList.contains("hidden")) return;

  const heart = document.createElement("div");
  heart.className = "floating-heart";

  // Random position on the screen
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;

  heart.style.left = x + "px";
  heart.style.top = y + "px";

  // Custom SVG Heart
  heart.innerHTML = `
    <svg width="30" height="30" viewBox="0 0 24 24" fill="#ec4899" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  `;

  document.body.appendChild(heart);

  // Remove heart from DOM after animation ends
  setTimeout(() => {
    heart.remove();
  }, 2000);
}

// Start spawning hearts every 300ms
setInterval(createPoppingHeart, 300);

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("play-pause-btn")?.addEventListener("click", () => {
    if (!player || typeof player.playVideo !== "function") return;
    player.getPlayerState() !== YT.PlayerState.PLAYING
      ? player.playVideo()
      : player.pauseVideo();
  });

  document.addEventListener("click", (e) => {
    const item = e.target.closest(".playlist-item");
    if (item) {
      const songId = item.getAttribute("data-song-id");
      loadSong(songId);
      updatePlaylistUI(item);
    }
  });

  document
    .getElementById("progress-container")
    ?.addEventListener("click", (e) => {
      if (!player || typeof player.getDuration !== "function") return;
      const container = e.currentTarget;
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = x / rect.width;
      player.seekTo(player.getDuration() * percentage, true);
    });
});

