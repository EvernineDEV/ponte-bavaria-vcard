// Minimal progressive enhancement — no framework, no build step.
// Everything here is optional; the page is fully readable without JS.
const yearEl = document.getElementById("wf-year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}
