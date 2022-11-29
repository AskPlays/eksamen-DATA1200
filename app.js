// Når brukeren scroller, utføres onScroll
window.onscroll = onScroll;

// Henter elementet header
const header = document.getElementById("header");

// Legger til klassen sticky til headeren når man scroller
function onScroll() {
  if (window.pageYOffset > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// når "reserver bord" knappen trykkes får kunden et reserverings nummer
document.querySelectorAll(".reserver_bord").forEach((button) => {
  button.addEventListener("click", () => {
    alert("Du har reservert bord "+Math.floor(Math.random()*99+1));
  });
});