document.addEventListener("DOMContentLoaded", () => {
  const currentYearSpan = document.getElementById("currentyear");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  const lastModifiedP = document.getElementById("lastModified");
  if (lastModifiedP) {
    lastModifiedP.textContent = `Last Modification: ${document.lastModified}`;
  }

  const mainNav = document.querySelector(".navigation");
  const hambutton = document.querySelector("#menu");

  if (hambutton && mainNav) {
    hambutton.addEventListener("click", () => {
      mainNav.classList.toggle("open");
      hambutton.classList.toggle("open");
    });
  }
});