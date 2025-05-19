import { sheet } from "./loading-style.js";
class LoadingIndicator extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
  }

  _empytElement() {
    this._shadowRoot.innerHTML = "";
  }

  _updateStyle() {
    this._shadowRoot.adoptedStyleSheets = [sheet];
  }

  _animateBox() {
    const { animate } = require("motion");
    animate(
      this._shadowRoot.querySelector(".loading-box"),
      { rotate: 90 },
      { type: "spring", repeat: Infinity, repeatDelay: 0.2 },
    );
  }

  render() {
    this._empytElement();
    this._updateStyle();
    this._shadowRoot.innerHTML = `
            <div class="loading-group">
                <div class="loading-box"></div>
                <div class="loading-text">
                    <h3>LOADING...</h3>
                </div>            
            </div>

        `;
  }

  connectedCallback() {
    this.render();
    this._animateBox();
  }
}

customElements.define("loading-indicator", LoadingIndicator);
