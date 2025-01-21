let Logo = document.getElementById("logo");
let searchBarInput = document.getElementById("search-bar-input");
let foldersMenu = document.getElementById("folders-menu");

// change visibility of logo when focus on search bar and select
searchBarInput.addEventListener("focus", () => {
  Logo.style.visibility = "hidden";
});
searchBarInput.addEventListener("blur", () => {
  Logo.style.visibility = "visible";
});

foldersMenu.addEventListener("focus", () => {
  Logo.style.visibility = "hidden";
});
foldersMenu.addEventListener("blur", () => {
  Logo.style.visibility = "visible";
});

let searchBarBox = document.querySelector(".search-bar-box");
let searchButton = document.querySelector(".magnifying-glass");
let searchBarForm = document.getElementById("search-bar-form");
let appLaunsherDropdown = document.querySelector(".app-launsher-dropdown");
let navbarContainer2 = document.querySelector(".navbar-container-2");
// let sunIcon = document.querySelector(".sun-icon");

// remove the navbar content to show search bar for 100% width
searchButton.addEventListener("click", () => {
  searchBarBox.style.display = "flex";
  navbarContainer2.style.display = "none";
  navbarContainer2.classList.remove("d-flex");
  appLaunsherDropdown.style.display = "none";
  appLaunsherDropdown.classList.remove("d-flex");
  Logo.style.display = "none";
  searchBarInput.focus();
});
// return the content after leave the search bar
searchBarInput.addEventListener("blur", () => {
  searchBarBox.style.display = "";
  appLaunsherDropdown.style.display = "flex";
  Logo.style.display = "flex";
  navbarContainer2.style.display = "flex";
});

let menuIconBtn = document.querySelector(".menu-icon-btn");
let homeBtn = document.querySelector(".home-btn");
let viewBtn = document.querySelector(".view-btn");
let helpBtn = document.querySelector(".help-btn");
let panelBtns1 = document.querySelector(".panel-btns-1");
let panelBtns2 = document.querySelector(".panel-btns-2");
let panelBtns3 = document.querySelector(".panel-btns-3");

const secNavBtn = document.querySelectorAll(".sec-nav-btns");
const panel = document.querySelectorAll(".panel-btns");

// remove active from all buttons and add it to the one that i click
// secNavBtn.forEach((button) => {
//   button.addEventListener("click", () => {
//     secNavBtn.forEach((btn) => btn.classList.remove("active"));
//     button.classList.add("active");
//   });
// });

// click on the button to display its own panel
// homeBtn.addEventListener("click", () => {
//   panelBtns1.style.display = "flex";
//   panelBtns2.style.display = "none";
//   panelBtns3.style.display = "none";
// });
// viewBtn.addEventListener("click", () => {
//   panelBtns1.style.display = "none";
//   panelBtns2.style.display = "flex";
//   panelBtns3.style.display = "none";
// });
// helpBtn.addEventListener("click", () => {
//   panelBtns1.style.display = "none";
//   panelBtns2.style.display = "none";
//   panelBtns3.style.display = "flex";
// });

// remove active from all buttons and add it to the one that i click
// click on the button to display its own panel

for (let i = 0; i < 3; i++) {
  secNavBtn[i].addEventListener("click", () => {
    secNavBtn.forEach((btn) => btn.classList.remove("active"));
    secNavBtn[i].classList.add("active");
    panel.forEach((pnl) => (pnl.style.display = "none"));
    panel[i].style.display = "flex";
  });
}

let sunBtn = document.querySelector(".sun-icon");
let sunIcon = document.querySelector(".fa-sun");
let moonIcon = document.querySelector(".fa-moon");
let isDarkMode = true;

// change the colors from :root and icon of mode button
sunBtn.addEventListener("click", () => {
  if (isDarkMode) {
    document.documentElement.style.setProperty("--blue-color", "#0c5697");
    document.documentElement.style.setProperty(
      "--white-smoke-color",
      "#1e2021"
    );
    document.documentElement.style.setProperty(
      "--white-dareker-color",
      "#202325"
    );
    document.documentElement.style.setProperty("--white-color", "#000000");
    document.documentElement.style.setProperty("--black-color", "#ffffff");
    document.documentElement.style.setProperty("--text-white-color", "#000000");
    document.documentElement.style.setProperty("--text-black-color", "#ffffff");
    sunIcon.classList.add("d-none");
    moonIcon.classList.remove("d-none");
  } else {
    document.documentElement.style.setProperty("--blue-color", "#0f6cbd");
    document.documentElement.style.setProperty(
      "--white-smoke-color",
      "#f5f5f5"
    );
    document.documentElement.style.setProperty(
      "--white-dareker-color",
      "#f0f0f0f0"
    );
    document.documentElement.style.setProperty("--white-color", "#ffffff");
    document.documentElement.style.setProperty("--black-color", "#000000");
    document.documentElement.style.setProperty("--text-white-color", "#ffffff");
    document.documentElement.style.setProperty("--text-black-color", "#000000");
    moonIcon.classList.add("d-none");
    sunIcon.classList.remove("d-none");
  }
  isDarkMode = !isDarkMode;
});

// rotate the icons
var mlBtn = document.querySelectorAll(".ml-btn");
var angleBtns = document.querySelectorAll(".fa-angle-right");

for (let i = 0; i < 2; i++) {
  mlBtn[i].addEventListener("click", () => {
    if (angleBtns[i].style.transform === "rotate(90deg)") {
      angleBtns[i].style.transform = "rotate(0deg)";
    } else {
      angleBtns[i].style.transform = "rotate(90deg)";
    }
  });
}
