import { sheet } from "./nav-style";
class NavBar extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
  }

  connectedCallback() {
    this.render();
  }

  _emptyContent() {
    this._shadowRoot.innerHTMl = "";
  }

  _updateStyle() {
    this._shadowRoot.adoptedStyleSheets = [sheet];
  }

  _onClickHamburgerButton(event) {
    event.preventDefault();

    const hamburgerElement = this._shadowRoot.querySelector(".hamburger");
    const navContainerElement =
      this._shadowRoot.querySelector(".nav-container");
    navContainerElement.classList.toggle("show");

    if (navContainerElement.classList.contains("show")) {
      hamburgerElement.innerHTML = "X";
    } else {
      hamburgerElement.innerHTML = "☰";
    }
  }

  _onClickHomeMenu(event) {
    event.preventDefault();

    const navigateEvent = new CustomEvent("navigate", {
      detail: { page: "home" },
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(navigateEvent);
  }

  _onClickArchiveMenu(event) {
    event.preventDefault();

    const navigateEvent = new CustomEvent("navigate", {
      detail: { page: "archive" },
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(navigateEvent);
  }

  _activateButton() {
    const hamburgerElement = this._shadowRoot.getElementById("hamburger");
    const homeMenuElement = this._shadowRoot.getElementById("homeMenu");
    const archiveMenuElement = this._shadowRoot.getElementById("archiveMenu");

    hamburgerElement.addEventListener("click", (event) =>
      this._onClickHamburgerButton(event),
    );
    homeMenuElement.addEventListener("click", (event) =>
      this._onClickHomeMenu(event),
    );
    archiveMenuElement.addEventListener("click", (event) =>
      this._onClickArchiveMenu(event),
    );
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
            <div class="navbar">
                <div class="hamburger" id="hamburger">
                    &#9776;
                </div>
                <nav class="nav-container">
                    <ul class="nav-list">
                        <li class="nav-item" id="homeMenu">Home</li>
                        <li class="nav-item" id="archiveMenu">Archive</li>
                    </ul>
                </nav>                
            </div>
        `;

    this._activateButton();
  }
}

customElements.define("nav-bar", NavBar);
