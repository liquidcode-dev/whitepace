// hamburger.js
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header-nav");

function toggleMenu(open) {
  if (open) {
    nav.classList.add("active");
    hamburger.classList.add("active");
    document.body.classList.add("menu-open");
    hamburger.setAttribute("aria-expanded", "true");
  } else {
    nav.classList.remove("active");
    hamburger.classList.remove("active");
    document.body.classList.remove("menu-open");
    hamburger.setAttribute("aria-expanded", "false");
  }
}

if (hamburger && nav) {
  hamburger.addEventListener("click", () => {
    const isOpen = nav.classList.contains("active");
    toggleMenu(!isOpen);
  });
}

// オーバーレイクリックで閉じる
document.addEventListener("click", (e) => {
  if (document.body.classList.contains("menu-open") && e.target === document.body) {
    toggleMenu(false);
  }
});
