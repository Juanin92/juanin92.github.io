document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.querySelector(".navbar-toggler");
  const mainContent = document.querySelector("main");

  toggler.addEventListener("click", function () {
    if (window.innerWidth < 576) {
      mainContent.classList.toggle("main-shifted"); 
    }
  });
});

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