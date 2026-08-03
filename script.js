// Eastern Pinetree Engineering PLLC — minimal site JS.
// Keeps the footer copyright year current.
document.addEventListener("DOMContentLoaded", function () {
  var year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
