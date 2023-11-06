import Entry from "./journal.js";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function handleJournalForm() {
  event.preventDefault();
  const titleInput = document.getElementById("inputTitle").value;
  const entryInput = document.getElementById("inputEntry").value;
  const inputEntryObject = new Entry(titleInput, entryInput);
  // inputEntryObject.wordCount();
  inputEntryObject.wordCount();
  inputEntryObject.letterCount();
}

window.addEventListener("load", function () {
  document.querySelector("#journalEntry").addEventListener("submit", handleJournalForm);
});