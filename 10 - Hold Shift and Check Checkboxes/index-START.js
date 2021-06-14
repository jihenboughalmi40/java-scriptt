// 利用在 window 上監聽 keydown 事件來偵測使用者按下的按鍵
window.addEventListener("keydown", playSound);
const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach(key =>
key.addEventListener("transitionend", removeTransition)
);

function removeTransition(e) {
 if (e.propertyName !== "transform") return;
e.target.classList.remove("playing");
}

function playSound(e) {
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
if (!audio) return;
 key.classList.add("playing");
    audio.currentTime = 0;
      audio.play();
    }
