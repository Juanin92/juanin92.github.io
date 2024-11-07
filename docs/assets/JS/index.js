// document.addEventListener("DOMContentLoaded", function () {
//   const toggler = document.querySelector(".navbar-toggler");
//   const mainContent = document.querySelector("main");

//   navbarNav.classList.remove("show");
//   toggler.setAttribute("aria-expanded", "false");

//   // Evento de clic para manejar el despliegue manual
//   toggler.addEventListener("click", function () {
//     const isExpanded = toggler.getAttribute("aria-expanded") === "true";
//     toggler.setAttribute("aria-expanded", !isExpanded); // Cambia el valor de aria-expanded
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const visibilityToggle = document.getElementById("themeToggle");
  const lightTheme = document.getElementById("lightTheme");
  const darkTheme = document.getElementById("darkTheme");

  if (visibilityToggle) {
    visibilityToggle.addEventListener("click", () => {
      if (darkTheme.disabled) {
        darkTheme.disabled = false;
        lightTheme.disabled = true;
      } else {
        darkTheme.disabled = true;
        lightTheme.disabled = false;
      }

      const icon = document.getElementById("iconVisibility");
      if (!darkTheme.disabled) {
        icon.src = "assets/Image/Icons/sun.png";
        icon.alt = "sun.png";
      } else {
        icon.src = "assets/Image/Icons/moon.png";
        icon.alt = "moon.png";
      }
    });
  } else {
    console.error("El botón de tema no se encontró en el DOM.");
  }
});