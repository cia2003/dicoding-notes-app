import { createAddNoteDialog } from "./notes-dialog.js";
import { navigationSessionStorage } from "../../utils/storage-manager.js";
import { displayAllNotes } from "./notes-ui.js";
import {
  archiveNote,
  undoNoteFromArchive,
  removeNote,
  searchNotes,
  insertNewNote,
} from "./notes-operation.js";
import NotesApi from "../../data/notes-api.js";

export function onClickAddNoteButton() {
  const container = document.querySelector(".main");
  const addNoteForm = document.createElement("add-note-form");
  const dialogElement = createAddNoteDialog(addNoteForm, onSendNewNote);

  container.appendChild(dialogElement);
  dialogElement.openDialog();
}

export function onSearchHandler(event) {
  const { query } = event.detail;

  searchNotes(query, displayAllNotes);
}

export function onNoteAction(event) {
  const noteAction = event.detail.action;
  const noteId = event.detail.noteId;

  switch (noteAction) {
    case "archive":
      archiveNote(noteId, NotesApi.setNoteToArchive, displayAllNotes);
      break;

    case "undo":
      undoNoteFromArchive(
        noteId,
        NotesApi.undoNoteFromArchive,
        displayAllNotes,
      );
      break;

    case "remove":
      removeNote(noteId, NotesApi.removeNote, displayAllNotes);
      break;
  }
}

export function onNavigateMenu(event) {
  const page = event.detail.page;
  navigationSessionStorage.setActivePage(page);
  displayAllNotes();
}

export async function onSendNewNote(event) {
  const dialogElement = document.querySelector("form-dialog");
  const newNote = event.detail.note;

  insertNewNote(newNote, NotesApi.insertNote, displayAllNotes);

  dialogElement.closeDialog();
}
