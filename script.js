const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");
const year = document.querySelector("#current-year");
const profilePhoto = document.querySelector(".avatar-photo");

if (year) {
  year.textContent = String(new Date().getFullYear());
}

if (profilePhoto instanceof HTMLImageElement) {
  profilePhoto.addEventListener("load", () => {
    profilePhoto.hidden = false;
    profilePhoto.previousElementSibling?.setAttribute("hidden", "");
  });
}

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation menu");
      navigation.classList.remove("is-open");
    }
  });
}
