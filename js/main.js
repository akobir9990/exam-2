function openNavbar() {
  document.getElementById("navbar-responsive").style.left = "0";
  // document.getElementById("navbar-responsive").style.top = "0";
}
function closeNavbar() {
  document.getElementById("navbar-responsive").style.left = "-100%";
  // document.getElementById("navbar-responsive").style.top = "-100%";
}

document.getElementById("navbar-open").addEventListener("click", openNavbar);
document.getElementById("navbar-close").addEventListener("click", closeNavbar);

window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    backtop.classList.add("backtop-show");
  } else {
    backtop.classList.remove("backtop-show");
  }
}

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
});
