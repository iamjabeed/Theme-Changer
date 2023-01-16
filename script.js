const toggle = document.querySelector('input[type="checkbox"]');
const themeTitle = document.querySelector(".toggle-text");
const moonIcon = document.querySelector(".fa-moon");
const sunIcon = document.querySelector(".fa-sun");

function switchTheme(e) {
  // console.log()
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    themeTitle.innerText = "Dark mode";
    moonIcon.style.visibility = "hidden";
    sunIcon.style.visibility = "visible";
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    sunIcon.style.visibility = "hidden";
    moonIcon.style.visibility = "visible";
  }
}

toggle.addEventListener("change", switchTheme);
