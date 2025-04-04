// Script for AGES AERTALENT

// Dynamically set the current year in the footer
const yearSpan = document.getElementById("footer-year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
