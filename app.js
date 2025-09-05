const cfs = document.querySelectorAll(".container-fluid");
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

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