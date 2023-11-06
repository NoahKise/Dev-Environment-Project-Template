import Entry from "./journal.js";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function handleJournalForm(event) {
  event.preventDefault();
  const titleInput = document.getElementById("inputTitle").value;
  const entryInput = document.getElementById("inputEntry").value;
  const inputEntryObject = new Entry(titleInput, entryInput);
  document.getElementById("wordCount").innerText = "Word Count: " + inputEntryObject.wordCount();
  document.getElementById("vowelCount").innerText = "Vowel Count: " + inputEntryObject.letterCount().vowelCount;
  document.getElementById("conCount").innerText = "Consonant Count: " + inputEntryObject.letterCount().conCount;
  document.getElementById("teaser").innerText = "A Teaser for this Entry: " + inputEntryObject.teaser() + "...";
}

window.addEventListener("load", function () {
  document.querySelector("#journalEntry").addEventListener("submit", handleJournalForm);
  
});