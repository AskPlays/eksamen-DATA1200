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
const submitButton = document.getElementById("submit");
if(submitButton) {
  submitButton.addEventListener("click", () => {
    alert("Takk for din reservasjon "+ document.getElementById("navn").value + ". Ditt reservasjonsnummer er: " + Math.floor(Math.random() * 1000000));
  });
}