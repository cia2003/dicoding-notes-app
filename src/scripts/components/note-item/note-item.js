import { setAnimation } from "./note-item-animation";
import {
  calculateDateTime,
  archiveAction,
  undoAction,
  removeAction,
} from "./note-item-logic";

import { sheet } from "./note-item-style";

class NoteItem extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  _clickEvent = "click";
  _noteAction = "note-action";

  _note = {
    id: null,
    title: null,
    body: null,
    createdAt: null,
    archived: null,
  };

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
  }

  set note(value) {
    this._note = value;

    this.render();
  }

  get note() {
    return this._note;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = "";
  }

  _updateStyle() {
    this._shadowRoot.adoptedStyleSheets = [sheet];
  }

  _calculateDateTime() {
    const result = calculateDateTime(this._note.createdAt);
    return result;
  }

  _archiveAction() {
    const noteEvent = archiveAction(this._note, this._noteAction);
    this.dispatchEvent(noteEvent);
  }

  _undoAction() {
    const noteEvent = undoAction(
      this._note,
      this._noteAction,
      this.dispatchEvent,
    );
    this.dispatchEvent(noteEvent);
  }

  _removeAction() {
    const noteEvent = removeAction(
      this._note,
      this._noteAction,
      this.dispatchEvent,
    );
    this.dispatchEvent(noteEvent);
  }

  async _activateButton() {
    const note = this._note;

    if (note.archived == false) {
      const archiveButton = this._shadowRoot.querySelector(".archive-button");
      archiveButton.addEventListener("click", (event) =>
        this._archiveAction(event),
      );
    } else {
      const undoButton = this._shadowRoot.querySelector(".undo-button");
      undoButton.addEventListener("click", (event) => this._undoAction(event));
    }

    const removeButton = this._shadowRoot.querySelector(".remove-button");
    removeButton.addEventListener("click", (event) =>
      this._removeAction(event),
    );
  }

  async _addAnimation() {
    setAnimation(this._shadowRoot);
  }

  async connectedCallback() {
    await this._activateButton();
    await this._addAnimation();
  }

  render() {
    const calculateDateTime = this._calculateDateTime();
    const dateOnly = calculateDateTime.dateOnly;
    const timeOnly = calculateDateTime.timeOnly;

    this._emptyContent();
    this._updateStyle();

    if (this._note.archived === false) {
      this._shadowRoot.innerHTML = `
                <section class="note-item" id="${this._note.id}">
                    <header class="note-header">
                        <h2 class="note-title ellipsis">${this._note.title}</h2>
                        <p class="note-datetime">${dateOnly} | ${timeOnly}</p>                        
                    </header>
                    <main class="note-content">
                        <p class="note-body ellipsis">
                            ${this._note.body}
                        </p>
                    </main>
                    <footer class="note-footer">
                        <button class="note-button archive-button">Archive</button>
                        <button class="note-button remove-button">Remove</button>
                    </footer>
                </section>
            `;
    } else {
      this._shadowRoot.innerHTML = `
            <section class="note-item" id="${this._note.id}">
                <header class="note-header">
                    <h2 class="note-title">${this._note.title}</h2>
                    <p class="note-datetime">${dateOnly} | ${timeOnly}</p>                        
                </header>
                <main class="note-content">
                    <p class="note-body">
                        ${this._note.body}
                    </p>
                </main>
                <footer class="note-footer">
                    <button class="note-button undo-button">Undo</button>
                    <button class="note-button remove-button">Remove</button>
                </footer>
            </section>
        `;
    }
  }
}

customElements.define("note-item", NoteItem);
