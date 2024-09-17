function toggleMenu(){
    const menu = document.querySelector(".hamburger-items");
    const icon = document.querySelector(".hamburger-icons");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}