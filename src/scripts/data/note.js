import notesData from "./notes-data.js";

class Notes {
  static getAll() {
    return notesData;
  }

  static searchNote(query) {
    const result = notesData.filter((note) => {
      const loweredCaseNoteTitle = (note.title || '-').toLowerCase();
      const jammedNoteTitle = loweredCaseNoteTitle.replace(/\s/g, '');

      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

      return jammedNoteTitle.indexOf(jammedQuery) !== -1;
    });

    return result;
  }

  static pushData(noteObject) {
    notesData.push(noteObject);
  }

  static setNoteToArchive(targetId) {
    notesData.forEach((note) => {
      if (note.id === targetId) {
          note.archived = true;
      };
    });
  }

  static undoNoteFromArchive(targetId) {
    notesData.forEach((note) => {
      if (note.id === targetId) {
          note.archived = false;
      };
    });
  }

  static #searchNoteIndex(targetId) {
    let targetIndex = -1;

    for (let i=0; i<notesData.length; i++) {
        if (notesData[i].id === targetId) {
            targetIndex = i;
            break
        }
    }

    return targetIndex;
  }

  static removeNote(targetId) {
    const targetIndex = this.#searchNoteIndex(targetId);
    const noteArchiveStatus = notesData[targetIndex].archived;

    if (targetIndex === -1) return;

    notesData.splice(targetIndex, 1);

    return noteArchiveStatus;
  }
}

export default Notes;