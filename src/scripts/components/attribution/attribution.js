import { sheet } from "./attribution-style";

class Attribution extends HTMLElement {
  static observedAttributes = [
    "project-owner",
    "owner-link",
    "coder-name",
    "coder-link",
  ];
  _shadowRoot = null;
  _style = null;

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");

    this._projectOwner = this.getAttribute("project-owner");
    this._ownerLink = this.getAttribute("owner-link");
    this._coderName = this.getAttribute("coder-name");
    this._coderLink = this.getAttribute("coder-link");
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = "";
  }

  _updateStyle() {
    this._shadowRoot.adoptedStyleSheets = [sheet];
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.innerHTML = `
            <div class="attribution">
                Project by <a href="${this._ownerLink}" target="_blank">${this._projectOwner}</a> |
                Coded by <a href="${this._coderLink}" target="_blank">${this._coderName}</a>
            </div>
        `;
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "project-owner":
        this._projectOwner = newValue;
        break;

      case "owner-link":
        this._ownerLink = newValue;
        break;

      case "coder-name":
        this._coderName = newValue;
        break;

      case "coder-link":
        this._coderLink = newValue;
        break;
    }

    this.render();
  }
}

customElements.define("my-attribution", Attribution);
