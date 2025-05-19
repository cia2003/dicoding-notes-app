import { navigationSessionStorage } from "../utils/storage-manager";
import { uiStateManager } from "../utils/ui-state-manager";

const BASE_URL = "https://notes-api.dicoding.dev/v2";

class NotesApi {
  static async getNote(isArchived) {
    uiStateManager.enterLoadingState();
    try {
      let response = null;

      if (isArchived) {
        response = await fetch(`${BASE_URL}/notes/archived`);
      } else {
        response = await fetch(`${BASE_URL}/notes`);
      }

      const responseJson = await response.json();

      if (responseJson.error) {
        console.log(responseJson.message);
      } else {
        return responseJson.data;
      }
    } catch (error) {
      NotesApi.showResponseMessage(error);
    } finally {
      setTimeout(() => {
        uiStateManager.exitLoadingState();
      }, 1500);
    }
  }

  static async searchNote(query) {
    uiStateManager.enterLoadingState();
    let notesData = null;
    let page = JSON.parse(navigationSessionStorage.getActivePage());

    switch (page) {
      case "home":
        notesData = await this.getNote(false);
        break;
      case "archive":
        notesData = await this.getNote(true);
        break;
    }

    const result = notesData.filter((note) => {
      const loweredCaseNoteTitle = (note.title || "-").toLowerCase();
      const jammedNoteTitle = loweredCaseNoteTitle.replace(/\s/g, "");

      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, "");

      return jammedNoteTitle.indexOf(jammedQuery) !== -1;
    });
    setTimeout(() => {
      uiStateManager.exitLoadingState();
    }, 1500);

    return result;
  }

  static async insertNote(noteObject) {
    uiStateManager.enterLoadingState();
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: noteObject.title,
          body: noteObject.body,
        }),
      };
      const response = await fetch(`${BASE_URL}/notes`, options);
      const responseJson = await response.json();
      return response.status;
    } catch (error) {
      NotesApi.showResponseMessage(error);
    } finally {
      setTimeout(() => {
        uiStateManager.exitLoadingState();
      }, 1500);
    }
  }

  static async setNoteToArchive(targetId) {
    uiStateManager.enterLoadingState();
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(
        `${BASE_URL}/notes/${targetId}/archive`,
        options,
      );
      const responseJson = await response.json();
      return response.status;
    } catch (error) {
      NotesApi.showResponseMessage(error);
    } finally {
      setTimeout(() => {
        uiStateManager.exitLoadingState();
      }, 1500);
    }
  }

  static async undoNoteFromArchive(targetId) {
    uiStateManager.enterLoadingState();
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(
        `${BASE_URL}/notes/${targetId}/unarchive`,
        options,
      );
      const responseJson = await response.json();
      return response.status;
    } catch (error) {
      NotesApi.showResponseMessage(error);
    } finally {
      setTimeout(() => {
        uiStateManager.exitLoadingState();
      }, 1500);
    }
  }

  static async getSingleNote(targetId) {
    uiStateManager.enterLoadingState();
    try {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(`${BASE_URL}/notes/${targetId}`, options);
      const responseJson = await response.json();
      return responseJson.data;
    } catch (error) {
      NotesApi.showResponseMessage(error);
    } finally {
      setTimeout(() => {
        uiStateManager.exitLoadingState();
      }, 1500);
    }
  }

  static async removeNote(targetId) {
    uiStateManager.enterLoadingState();

    try {
      let deletedNote = null;
      try {
        deletedNote = await NotesApi.getSingleNote(targetId);
      } catch (error) {
        return;
      }

      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(`${BASE_URL}/notes/${targetId}`, options);
      const responseJson = await response.json();
      return response.status;
    } catch (error) {
      NotesApi.showResponseMessage(error);
    } finally {
      setTimeout(() => {
        uiStateManager.exitLoadingState();
      }, 1500);
    }
  }

  static showResponseMessage(message) {
    alert(message);
  }
}

export default NotesApi;
