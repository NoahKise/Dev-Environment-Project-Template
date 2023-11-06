import Entry from "./journal.js";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function handleTriangleForm() {
  event.preventDefault();
}

window.addEventListener("load", function () {
  document.querySelector("#triangle-checker-form").addEventListener("submit", handleTriangleForm);
});