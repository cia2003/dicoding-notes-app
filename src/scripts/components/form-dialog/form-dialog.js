import { sheet } from "./form-dialog-style";

class FormDialog extends HTMLElement {
  static observedAttributes = ["dialog-title"];

  _shadowRoot = null;
  _style = null;

  _submitEvent = "submit";
  _sendNoteEvent = "send-note";

  constructor() {
    super();

    this._dialogTitle = this.getAttribute("dialog-title");

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
  }

  _empytElement() {
    this._shadowRoot.innerHTML = "";
  }

  _updateStyle() {
    this._shadowRoot.adoptedStyleSheets = [sheet];
  }

  _activateButton() {
    const dialogElement = this._shadowRoot.querySelector(".dialog");
    const closeButton = dialogElement.querySelector(".close-button");

    closeButton.addEventListener("click", (event) => {
      event.preventDefault();
      this.closeDialog();
    });
  }

  render() {
    this._empytElement();
    this._updateStyle();
    this._shadowRoot.innerHTML += `
            <dialog class="dialog">
                <header class="dialog-header">
                    <button class="close-button">X</button>
                </header>
                <main class="dialog-body">
                    <h1 class="dialog-title">${this._dialogTitle}</h1>
                    <slot name="form-content"></slot>
                </main>  
            </dialog>
        `;
  }

  closeDialog() {
    const dialogElement = this._shadowRoot.querySelector(".dialog");
    dialogElement.style.display = "none";
    dialogElement.close();
    this.remove();
  }

  openDialog() {
    const dialogElement = this._shadowRoot.querySelector(".dialog");
    dialogElement.style.display = "flex";
    dialogElement.showModal();
  }

  connectedCallback() {
    this.render();
    this.openDialog();
    this._activateButton();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "dialog-title":
        this._dialogTitle = newValue;
        break;
    }
  }
}

customElements.define("form-dialog", FormDialog);
