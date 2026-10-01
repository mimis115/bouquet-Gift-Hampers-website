/* script.js */

function toggleMenu() {
  const menu = document.getElementById("navMenu");

  if (menu) {
    menu.classList.toggle("active");
  }
}

document.querySelectorAll("#navMenu a").forEach(function(link) {
  link.addEventListener("click", function() {
    const menu = document.getElementById("navMenu");

    if (menu) {
      menu.classList.remove("active");
    }
  });
});
