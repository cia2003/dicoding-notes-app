import NotesApi from "../../data/notes-api.js";
import Utils from "../../utils/utils.js";
import { navigationSessionStorage } from "../../utils/storage-manager.js";
import { mapNotesToElements } from "./notes-operation.js";

function determintePage() {
  const page = navigationSessionStorage.getActivePage();

  if (page === null) {
    navigationSessionStorage.setActivePage("home");
  }

  return JSON.parse(navigationSessionStorage.getActivePage());
}

export async function displayAllNotes() {
  const noteListContainer = document.querySelector(".note-list");
  let notesToDisplay = null;
  let page = determintePage();

  switch (page) {
    case "home":
      notesToDisplay = await NotesApi.getNote(false);
      break;
    case "archive":
      notesToDisplay = await NotesApi.getNote(true);
      break;
  }

  const noteItemElements = mapNotesToElements(notesToDisplay);

  Utils.emptyElement(noteListContainer);
  noteListContainer.append(...noteItemElements);
}
