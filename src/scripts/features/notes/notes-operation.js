import { onNoteAction } from "./notes-event";
import NotesApi from "../../data/notes-api";
import Utils from "../../utils/utils";

function checkResponseStatus(status, refreshPageFn) {
  let succeed = status >= 200 && status < 300;

  if (succeed) {
    refreshPageFn();
  }
}

export async function archiveNote(targetId, setNoteToArchiveFn, refreshPageFn) {
  let responseStatus = await setNoteToArchiveFn(targetId);
  checkResponseStatus(responseStatus, refreshPageFn);
}

export async function undoNoteFromArchive(
  targetId,
  undoNoteFromArchiveFn,
  refreshPageFn,
) {
  let responseStatus = await undoNoteFromArchiveFn(targetId);
  checkResponseStatus(responseStatus, refreshPageFn);
}

export async function removeNote(targetId, removeNoteFn, refreshPageFn) {
  const responseStatus = await removeNoteFn(targetId);
  checkResponseStatus(responseStatus, refreshPageFn);
}

export function mapNotesToElements(notes) {
  return notes.map((note) => {
    const noteItemElement = document.createElement("note-item");
    noteItemElement.note = note;
    noteItemElement.addEventListener("note-action", (event) =>
      onNoteAction(event),
    );
    return noteItemElement;
  });
}

export async function searchNotes(query, refreshPageFn) {
  if (query === "") {
    refreshPageFn();
  } else {
    const result = await NotesApi.searchNote(query);

    if (result.length === 0) {
      alert("Maaf! Tidak ketemu catatannya :D");
      refreshPageFn();
    }

    const noteListContainer = document.querySelector(".note-list");
    const noteItemElements = mapNotesToElements(result);

    Utils.emptyElement(noteListContainer);
    noteListContainer.append(...noteItemElements);
  }
}

export async function insertNewNote(newNote, insertNewNoteFn, refreshPageFn) {
  const responseStatus = await insertNewNoteFn(newNote);
  checkResponseStatus(responseStatus, refreshPageFn);
}
