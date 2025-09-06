const cfs = document.querySelectorAll(".container-fluid");
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");
const aside = document.querySelectorAll("aside");
const link = document.querySelectorAll("a");
const nav = document.querySelector("nav");
const body = document.querySelector("body");
const animateBlock = document.querySelector('.animate-block');


cfs.forEach((cf) => {
  const hr = document.createElement("hr");
  cf.insertAdjacentElement("afterend", hr);
})

window.addEventListener("mousemove", (e) => {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  cursorOutline.animate({
    left: `${posX}px`,
    top: `${posY}px`
  }, { duration: 300, fill: "forwards"})
})

aside.forEach((a) => {
  a.addEventListener("mouseenter", () => {
    cursorDot.style.opacity = 0;
    a.style.cursor = none;
  })
  a.addEventListener("mouseleave", () => {
    cursorDot.style.opacity = 1;
  })
});

nav.addEventListener("mouseenter", () => {
  cursorDot.style.opacity = 0;
});
nav.addEventListener("mouseleave", () => {
  cursorDot.style.opacity = 1;
});

animateBlock.addEventListener("mouseenter", () => {
  cursorDot.style.opacity = 0;
});
animateBlock.addEventListener("mouseleave", () => {
  cursorDot.style.opacity = 1;
});