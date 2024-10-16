let nav = document.querySelector(".navigation-wrap");
document
  .querySelectorAll(".nav-item.dropdown .dropdown-menu .nav-link")
  .forEach((a) => {
    a.classList.add("text-truncate");
  });

window.onscroll = function () {
  if (document.documentElement.scrollTop > 0) {
    nav.classList.add("scroll-on");
  } else {
    nav.classList.remove("scroll-on");
  }
};

let navBar = document.querySelectorAll(".nav-link:not(.dropdown-toggle)");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});

const datePickers = document.querySelectorAll("#dateInput");

datePickers.forEach((d) => {
  const picker = new tempusDominus.TempusDominus(d, {
    display: {
      components: {
        calendar: true,
        date: true,
        month: true,
        year: true,
        clock: false,
      },
    },
    localization: {
      format: "dd/MM/yyyy",
    },
  });
});




console.log("Tempus Dominus initialized");
