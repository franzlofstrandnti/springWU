/* alert("Hallå") */
/* alert("Hallå") */

let layer = document.querySelector(".fade-layer")
layer.addEventListener("click", showMenu)

let button = document.querySelector(".menu-button")
button.addEventListener("click", showMenu)

function showMenu(){
    let menu = document.querySelector(".menu")
    menu.classList.toggle("show")

    let layer = document.querySelector(".fade-layer")
    layer.classList.toggle("visible")
}

let topBtn = document.getElementById("back-to-top");

window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});