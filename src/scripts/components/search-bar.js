class SearchBar extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  _submitEvent = "submit";
  _searchEvent = "search";

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
    this.render();
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = "";
  }

  _updateStyle() {
    this._style.textContent = `
            .search-form {
                display: flex;
                background-color: white;
                padding: 25px;
                box-shadow: 4px 4px 4px rgba(0, 0,0, 0.2);
            }

            .search-form .form-group {
                width: 100%;
                padding: 10px;
            }

            .search-form input {
                width: 100%;
                padding: 10px;
                border: none;
                box-shadow: 0px 0px 2px rgba(0, 0,0, 0.2);
            }

            .search-form button {
                background-color: transparent;
                border: none;
                cursor: pointer;
            }

        `;
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
            <form id="searchForm" class="search-form">
                <div class="form-group">
                    <label for="title"></label>
                    <input type="search" name="title" id="title" placeholder="Enter the Note's Title">                    
                </div>
                <button type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                        <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                    </svg>
                    <p hidden>Search</p>
                </button>
            </form>  
        `;
  }

  _onFormSubmit(event, formInstance) {
    formInstance.dispatchEvent(new CustomEvent("submit"));
    event.preventDefault();
  }

  _onSearchNote() {
    const query = this._shadowRoot.querySelector("input#title").value;

    this.dispatchEvent(
      new CustomEvent(this._searchEvent, {
        detail: { query },
        bubbles: true,
      }),
    );
  }

  connectedCallback() {
    this._shadowRoot
      .getElementById("searchForm")
      .addEventListener("submit", (event) => this._onFormSubmit(event, this));

    this.addEventListener(this._submitEvent, this._onSearchNote);
  }
}

customElements.define("search-bar", SearchBar);
