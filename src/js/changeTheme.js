const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


const switchToggleRef = document.querySelector(".theme-switch__toggle");


function changeClass(addClass, removeClass) {
   document.body.classList.add(addClass);
   document.body.classList.remove(removeClass);
}
function defaultTheme() {
   if (localStorage.getItem("theme") === 'dark-theme') {
    switchToggleRef.checked = true;
    changeClass('dark-theme', 'light-theme');
   } else {
      switchToggleRef.checked = false;
      changeClass('light-theme', "dark-theme");
   }
}
defaultTheme();

function changeTheme(evt) {
    if (evt.target.checked) {
      changeClass("dark-theme", 'light-theme');
      localStorage.setItem("theme", "dark-theme");
   } else {
      changeClass('light-theme', "dark-theme");
      localStorage.setItem("theme", "light-theme");
   }
}
switchToggleRef.addEventListener("change",changeTheme);

