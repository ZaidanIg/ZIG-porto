function toggleMenu() {
  const menu = document.getElementById("nav-items");
  const button = document.querySelector(".menu-toggle");
  const isOpen = menu.classList.toggle("open");
  button.setAttribute("aria-expanded", String(isOpen));
  button.textContent = isOpen ? "×" : "☰";
}

document.querySelectorAll("#nav-items a").forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("nav-items");
    const button = document.querySelector(".menu-toggle");
    menu.classList.remove("open");
    button.setAttribute("aria-expanded", "false");
    button.textContent = "☰";
  });
});
