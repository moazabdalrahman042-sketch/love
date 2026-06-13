
const API = "https://script.google.com/macros/s/AKfycbzaMXR3_ZAnQXKazFywnNkz8XXkyEntzndVi0gnWyl57z4cTBT7t57L_jv1iRfDyNTNRA/exec";

let bCurrentPage = 0;
let bAnimating = false;
let currentLang = "en";

const translations = {
  en: {
    loginTitle: "Enter Password ❤️", loginBtn: "Enter", wrongPass: "Wrong Password 💔",
    welcome: "Welcome to our story", btn1: "Time Counter ⏳", btn2: "Love Message 💌",
    btn3: "Our Promises", btn4: "What to do?", btn5: "Our Book",
    counterTitle: "Our Time Together ❤️", since: "Since: 13 / 1 / 2026",
    months: "Months", days: "Days", hours: "Hours", minutes: "Minutes", seconds: "Seconds",
    mainParagraphs: "I made this for you, and I hope it's something that makes you happy and brings you joy. I just want to tell you that I love you so much — you are the most beautiful and amazing person in my life. I pray that God always keeps you in my life and that you stay by my side forever. I wanted to create something for us to remember all our memories together, because like we said, we are truly going to be different from anyone else. I never want you to be upset with me, no matter what happens. And finally, I just want to say that I truly love you and I'm deeply in love with you, my light of life. ❤️I love all of you🥰",
    letterNote: "My sweetheart Alaa.. ❤️<br>This is a hidden note inside this letter just to tell you that you are the most beautiful thing that has ever happened in my entire life.. May God keep you by my side forever!",
    envelopeHint: "Click on the envelope to open it 💌", promisesTitle: "Our Promises 🤝❤️",
    promisesHint: "Tap or hover over the cards to see our promises",
    p1f: "Promise #1 🔒", p1b: "I will always stay by your side through every single step, and I will never let you go ❤️",
    p2f: "Promise #2 🌸", p2b: "No disagreement will ever last between us, and I'll do whatever it takes to make your heart happy 🥰",
    p3f: "Promise #3 ✨", p3b: "We will always remain unique from anyone else, continuing our beautiful story until the very end 💍",
    wheelTitle: "What to do today? 🎡", wheelHint: "Can't decide what to do? Spin the wheel and let luck choose! 😉",
    wheelBtn: "Spin the Wheel 🎲", wheelSpinning: "Spinning the wheel... 🤔🎲",
    bookTitle: "Our Book 📖", bookHint: "Every beautiful moment we share is kept here.. ❤️", backTop: "⬆ Back to Top",
    coverHint: "Tap the cover to open 🐚✨", closeBook: "✕ Close Book",
    storyTitle: "A Day to Remember ✨❤️",
    storyText: "On Monday, May 25th, 2026, I went out with the most beautiful girl in the world—my girlfriend—to meet up, see each other, and enjoy our time together. We went Downtown, walked a lot, and grabbed a Pepsi. After that, we sat down for a bit, and I got her a beautiful red rose that looked just as lovely as her. Then, we ordered an Uber and headed to Zamalek. That was the best part because we went to the Zamalek Corniche; the weather was amazing, we took so many videos and pictures, and we talked sweetly to each other. She even teared up out of pure emotion when she told me 'I love you.' I told her 'I love you' back more than ten times, and I was so happy and completely relaxed. In the end, I walked her right to her doorstep because I wanted to make sure she was safe, and then I went home. We had such a wonderful time.",
    vidTitle: "Our Video Memory"
  },
  it: {
    loginTitle: "Inserisci la password ❤️", loginBtn: "Entra", wrongPass: "Password errata 💔",
    welcome: "Benvenuta nella nostra storia", btn1: "Contatore del tempo ⏳", btn2: "Messaggio d'amore 💌",
    btn3: "Le nostre promesse", btn4: "Cosa fare?", btn5: "Il nostro libro",
    counterTitle: "Il nostro tempo insieme ❤️", since: "Dal: 13 / 1 / 2026",
    months: "Mesi", days: "Giorni", hours: "Ore", minutes: "Minuti", seconds: "Secondi",
    mainParagraphs: "Ho fatto questo per te, e spero che sia qualcosa che ti renda felice e ti porti gioia. Voglio solo dirti che ti amo così tanto — sei la persona più bella e straordinaria della mia vita. Prego che Dio ti tenga sempre nella mia vita e che tu rimanga al mio fianco per sempre. Volevo creare qualcosa per ricordare tutti i nostri ricordi insieme, perché come abbiamo detto, saremo davvero diversi da chiunque altro. Non voglio mai che tu ti arrabbi con me, qualunque cosa accada. E infine, voglio solo dirti che ti amo davvero e sono profondamente innamorato di te, luce della mia vita. ❤️Amo tutto di te🥰",
    letterNote: "Dolcezza mia Alaa.. ❤️<br>Questa è una nota nascosta dentro questa lettera solo per dirti che sei la cosa più bella che sia mai successa in tutta la mia vita.. Che Dio ti tenga al mio fianco per sempre!",
    envelopeHint: "Clicca sulla busta per aprirla 💌", promisesTitle: "Le nostre promesse 🤝❤️",
    promisesHint: "Tocca o passa il mouse sulle schede per vedere le promesse",
    p1f: "Promessa #1 🔒", p1b: "Rimarrò sempre al tuo fianco in ogni singolo passo, e non ti lascerò mai andare ❤️",
    p2f: "Promessa #2 🌸", p2b: "Nessun disaccordo durerà mai tra di noi, e farò tutto il necessario per rendere felice il tuo cuore 🥰",
    p3f: "Promessa #3 ✨", p3b: "Rimarremo sempre unici rispetto a chiunque altro, continuando la nostra bellissima storia fino alla fine 💍",
    wheelTitle: "Cosa fare oggi? 🎡", wheelHint: "Non riesci a decidere cosa fare? Gira la ruota e lascia che scelga la fortuna! 😉",
    wheelBtn: "Gira la ruota 🎲", wheelSpinning: "Girando la ruota... 🤔🎲",
    bookTitle: "Il nostro libro 📖", bookHint: "Ogni bel momento che condividiamo è custodito qui.. ❤️", backTop: "⬆ Torna su",
    coverHint: "Tocca la copertina per aprire 🐚✨", closeBook: "✕ Chiudi il libro",
    storyTitle: "Un giorno da ricordare ✨❤️",
    storyText: "Lunedì 25 maggio 2026 sono uscito con la ragazza più bella del mondo, la mia fidanzata, per incontrarci, vederci e godere del tempo insieme. Siamo andati in Centro, abbiamo camminato molto e preso una Pepsi. Dopodiché ci siamo seduti per un po' e le ho preso una bellissima rosa rossa che era incantevole proprio come lei. Poi abbiamo ordinato un Uber e ci siamo diretti a Zamalek. Questa è stata la parte migliore perché siamo andati al Zamalek Corniche; il tempo era fantastico, abbiamo fatto tantissimi video e foto e ci siamo parlati dolcemente. Le sono persino venute le lacrime agli occhi per la pura emozione quando mi ha detto 'Ti amo'. Le ho risposto 'Ti amo' a mia volta più di dieci volte, ed ero così felice e completamente rilassato. Alla fine l'ho accompagnata proprio davanti alla porta di casa perché volevo assicurarmi che fosse al sicuro, e poi sono tornato a casa. Abbiamo passato un tempo meraviglioso.",
    vidTitle: "Il nostro video ricordo"
  }
};

const wheelOptions = {
  en: ["Go to the cinema 🎬", "Eat ice cream together 🍦", "Walk by the Nile 🌊", "Have a long video call 📞❤️", "Order food we love 🍔", "Listen to a full album together 🎵"],
  it: ["Andare al cinema 🎬", "Mangiare un gelato insieme 🍦", "Camminare lungo il Nilo 🌊", "Fare una lunga videochiamata 📞❤️", "Ordinare cibo che amiamo 🍔", "Ascoltare un intero album insieme 🎵"]
};

function toEmbedUrl(url) {
  if (!url) return "";
  const ytReg = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/;
  if (ytReg.test(url)) {
    return "https://www.youtube.com/embed/" + url.match(ytReg)[1];
  }
  const reg1 = /\/file\/d\/([^/]+)/;
  const reg2 = /[?&]id=([^&]+)/;
  let fileId = "";
  if (reg1.test(url)) { fileId = url.match(reg1)[1]; }
  else if (reg2.test(url)) { fileId = url.match(reg2)[1]; }
  if (fileId) {
    return "https://drive.google.com/file/d/" + fileId + "/preview?authuser=0&hl=en";
  }
  return url;
}

function toggleLanguage() {
  currentLang = currentLang === "en" ? "it" : "en";
  document.getElementById("lang-toggle-btn").innerText = currentLang === "en" ? "EN | IT" : "IT | EN";
  applyTranslations();
}

function applyTranslations() {
  const lang = translations[currentLang];
  document.getElementById("text-login-title").innerText = lang.loginTitle;
  document.getElementById("text-login-btn").innerText = lang.loginBtn;
  document.getElementById("text-home-welcome").innerText = lang.welcome;
  document.querySelector("#nav-btn-1 .btn-label").innerText = lang.btn1;
  document.querySelector("#nav-btn-2 .btn-label").innerText = lang.btn2;
  document.querySelector("#nav-btn-3 .btn-label").innerText = lang.btn3;
  document.querySelector("#nav-btn-4 .btn-label").innerText = lang.btn4;
  document.querySelector("#nav-btn-5 .btn-label").innerText = lang.btn5;
  document.getElementById("text-counter-title").innerText = lang.counterTitle;
  document.getElementById("text-counter-since").innerText = lang.since;
  document.getElementById("lbl-months").innerText = lang.months;
  document.getElementById("lbl-days").innerText = lang.days;
  document.getElementById("lbl-hours").innerText = lang.hours;
  document.getElementById("lbl-minutes").innerText = lang.minutes;
  document.getElementById("lbl-seconds").innerText = lang.seconds;
  document.getElementById("text-main-paragraphs").innerText = lang.mainParagraphs;
  document.getElementById("text-letter-note").innerHTML = lang.letterNote;
  document.getElementById("text-envelope-hint").innerText = lang.envelopeHint;
  document.getElementById("text-promises-title").innerText = lang.promisesTitle;
  document.getElementById("text-promises-hint").innerText = lang.promisesHint;
  document.getElementById("text-p1-f").innerText = lang.p1f;
  document.getElementById("text-p1-b").innerText = lang.p1b;
  document.getElementById("text-p2-f").innerText = lang.p2f;
  document.getElementById("text-p2-b").innerText = lang.p2b;
  document.getElementById("text-p3-f").innerText = lang.p3f;
  document.getElementById("text-p3-b").innerText = lang.p3b;
  document.getElementById("text-wheel-title").innerText = lang.wheelTitle;
  document.getElementById("text-wheel-hint").innerText = lang.wheelHint;
  document.getElementById("text-wheel-btn").innerText = lang.wheelBtn;
  document.getElementById("text-book-section-title").innerText = lang.bookTitle;
  document.getElementById("text-book-section-hint").innerText = lang.bookHint;
  document.getElementById("text-cover-hint").innerText = lang.coverHint;
  document.getElementById("text-close-book-btn").innerText = lang.closeBook;
  document.getElementById("text-back-top").innerText = lang.backTop;
  document.getElementById("text-story-title").innerText = lang.storyTitle;
  document.getElementById("text-story-body").innerText = lang.storyText;
  for (let i = 1; i <= 5; i++) {
    document.getElementById("lbl-vid" + i + "-t").innerText = lang.vidTitle + " " + i + " ❤️";
  }
  updateBookIndicator();
}

/* ===== LOGIN ===== */
async function checkPass() {
  let pass = document.getElementById("pass").value;
  try {
    const res = await fetch(API + "?action=login&password=" + pass);
    const data = await res.json();
    if (data.success) {
      sessionStorage.setItem("token", data.token);
      document.getElementById("login").style.display = "none";
      document.getElementById("music").play();
      startHearts();
      loadVideos();
    } else {
      document.getElementById("error").innerText = translations[currentLang].wrongPass;
    }
  } catch (e) {
    document.getElementById("error").innerText = translations[currentLang].wrongPass;
  }
}

async function loadVideos() {
  const token = sessionStorage.getItem("token");
  if (!token) return;
  try {
    const res = await fetch(API + "?action=getData&token=" + token);
    const result = await res.json();
    if (result.success) {
      const d = result.data;
      if (d["main_video"])   document.getElementById("main-video-frame").src = toEmbedUrl(d["main_video"]);
      if (d["letter_video"]) document.getElementById("letter-video-frame").src = toEmbedUrl(d["letter_video"]);
      if (d["book_page1"])   document.getElementById("bp1-video").src = toEmbedUrl(d["book_page1"]);
      if (d["book_page2"])   document.getElementById("bp2-video").src = toEmbedUrl(d["book_page2"]);
      if (d["book_page3"])   document.getElementById("bp3-video").src = toEmbedUrl(d["book_page3"]);
      if (d["book_page4"])   document.getElementById("bp4-video").src = toEmbedUrl(d["book_page4"]);
      if (d["book_page5"])   document.getElementById("bp5-video").src = toEmbedUrl(d["book_page5"]);
    }
  } catch (e) {
    console.error("Error loading data:", e);
  }
}

/* ===== BOOK ENGINE ===== */
function openBook() {
  if (bCurrentPage > 0) return;
  document.getElementById("bookCover").classList.add("open");
  bCurrentPage = 1;
  updateBookIndicator();
}

function closeBook() {
  for (let i = 1; i <= 6; i++) {
    document.getElementById("bpage" + i).classList.remove("turned");
  }
  document.getElementById("bookCover").classList.remove("open");
  bCurrentPage = 0;
  updateBookIndicator();
}

function bNext(n) {
  if (bAnimating || bCurrentPage === 0) return;
  bAnimating = true;
  document.getElementById("bpage" + n).classList.add("turned");
  bCurrentPage = n + 1;
  updateBookIndicator();
  setTimeout(() => bAnimating = false, 750);
}

function bPrev(n) {
  if (bAnimating || n <= 1) return;
  bAnimating = true;
  document.getElementById("bpage" + (n - 1)).classList.remove("turned");
  bCurrentPage = n - 1;
  updateBookIndicator();
  setTimeout(() => bAnimating = false, 750);
}

function updateBookIndicator() {
  const el = document.getElementById("book-indicator");
  if (bCurrentPage === 0) {
    el.innerText = currentLang === "en" ? "Tap the cover to open" : "Tocca la copertina per aprire";
  } else {
    el.innerText = currentLang === "en" ? "Page " + bCurrentPage + " of 6" : "Pagina " + bCurrentPage + " di 6";
  }
}

/* Swipe support */
let bTouchX = 0;
document.querySelector('.book-scene').addEventListener('touchstart', e => { bTouchX = e.touches[0].clientX; });
document.querySelector('.book-scene').addEventListener('touchend', e => {
  const diff = bTouchX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 40) {
    if (diff > 0 && bCurrentPage > 0 && bCurrentPage < 6) bNext(bCurrentPage);
    else if (diff < 0 && bCurrentPage > 1) bPrev(bCurrentPage);
  }
});

/* ===== COUNTER ===== */
const startDate = new Date("2026-01-13T00:00:00");
function updateCounter() {
  const now = new Date();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();
  if (days < 0) { months--; days += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); }
  let years = now.getFullYear() - startDate.getFullYear();
  if (months < 0) { years--; months += 12; }
  const diffMs = now - new Date(now.getFullYear(), now.getMonth(), now.getDate(), startDate.getHours(), startDate.getMinutes(), startDate.getSeconds());
  let hours = Math.floor((diffMs % (1000*60*60*24)) / (1000*60*60));
  let minutes = Math.floor((diffMs % (1000*60*60)) / (1000*60));
  let seconds = Math.floor((diffMs % (1000*60)) / 1000);
  if (hours < 0) { hours += 24; days--; }
  if (minutes < 0) { minutes += 60; hours--; }
  if (seconds < 0) { seconds += 60; minutes--; }
  document.getElementById("months").innerText = months;
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}
setInterval(updateCounter, 1000);
updateCounter();

/* ===== HEARTS ===== */
function startHearts() {
  setInterval(() => {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }, 300);
}

/* ===== ENVELOPE ===== */
function toggleLetter() {
  document.querySelector('.envelope-wrapper').classList.toggle('open');
}

/* ===== WHEEL ===== */
let currentDegree = 0;
let isSpinning = false;
function spinWheel() {
  if (isSpinning) return;
  isSpinning = true;
  document.getElementById("wheel-result").innerText = translations[currentLang].wheelSpinning;
  const randomExtra = Math.floor(Math.random() * 360);
  currentDegree += 1800 + randomExtra;
  document.getElementById("wheel").style.transform = "rotate(" + currentDegree + "deg)";
  setTimeout(() => {
    isSpinning = false;
    const normalized = (360 - (currentDegree % 360)) % 360;
    const idx = Math.floor(normalized / 60);
    const selected = wheelOptions[currentLang][idx];
    document.getElementById("wheel-result").innerText = currentLang === "en"
      ? "Today's plan: " + selected + " ✨❤️"
      : "Piano di oggi: " + selected + " ✨❤️";
  }, 4000);
}

/* ===== INIT ===== */
if (sessionStorage.getItem("token")) {
  document.getElementById("login").style.display = "none";
  startHearts();
  loadVideos();
}
applyTranslations();
