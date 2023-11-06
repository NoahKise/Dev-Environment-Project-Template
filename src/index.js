import Entry from "./journal.js";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function handleJournalForm(event) {
  event.preventDefault();
  const titleInput = document.getElementById("inputTitle").value;
  const entryInput = document.getElementById("inputEntry").value;
  const inputEntryObject = new Entry(titleInput, entryInput);
  document.getElementById("wordCount").innerText = inputEntryObject.wordCount();
  document.getElementById("vowelCount").innerText = inputEntryObject.letterCount().vowelCount;
  document.getElementById("conCount").innerText = inputEntryObject.letterCount().conCount;
}

window.addEventListener("load", function () {
  document.querySelector("#journalEntry").addEventListener("submit", handleJournalForm);
  
});