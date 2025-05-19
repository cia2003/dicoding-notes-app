import Utils from "./utils";

class UIStateManager {
  constructor(
    loadingSelector = "loading-indicator",
    listSelector = ".note-list",
    buttonContainer = ".add-note",
  ) {
    this.loadingIndicator = document.querySelector(loadingSelector);
    this.listElement = document.querySelector(listSelector);
    this.buttonContainer = document.querySelector(buttonContainer);
  }

  enterLoadingState() {
    Utils.showElement(this.loadingIndicator);
    Utils.hideElement(this.buttonContainer);
    Utils.hideElement(this.listElement);
  }

  exitLoadingState() {
    Utils.hideElement(this.loadingIndicator);
    Utils.showElement(this.buttonContainer);
    Utils.showElement(this.listElement, "grid");
  }
}

export const uiStateManager = new UIStateManager();
