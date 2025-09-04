const a = document.querySelector("a");
a.addEventListener("click", function() {
  window.addEventListener("scroll", function () {
    a.classList.add('active-state');
  })
})