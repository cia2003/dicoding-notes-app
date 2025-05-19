import * as NoteFeature from "../features/notes/notes-index.js";

function initializeEventListeners() {
  const navbarElement = document.querySelector("nav-bar");
  const searchBarElement = document.querySelector("search-bar");
  const addNoteButton = document.querySelector(".add-note-button");

  navbarElement.addEventListener("navigate", (event) =>
    NoteFeature.onNavigateMenu(event),
  );
  searchBarElement.addEventListener("search", NoteFeature.onSearchHandler);
  addNoteButton.addEventListener("click", (event) =>
    NoteFeature.onClickAddNoteButton(event),
  );
}

function home() {
  initializeEventListeners();
  NoteFeature.displayAllNotes();
}

export default home;
