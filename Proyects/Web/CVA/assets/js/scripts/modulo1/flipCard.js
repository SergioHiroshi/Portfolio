const cards = document.querySelectorAll(".flipCard");

cards.forEach((card) => {
  card.addEventListener("click", function () {
    removeActiveClasses();
    card.classList.toggle("is-flipped");
  });
});
function removeActiveClasses() {
  cards.forEach((card) => {
    card.classList.remove("is-flipped");
  });
}
