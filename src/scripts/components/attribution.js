class Attribution extends HTMLElement {
    _shadowRoot = null;
    _style = null;

    constructor() {
        super();

        this._shadowRoot = this.attachShadow( { mode: 'open'} );
        this._style = document.createElement('style');
        this.render();
    }

    _emptyContent() {
        this._shadowRoot.innerHTML = '';
    }

    _updateStyle() {
        this._style.textContent = `
        .attribution {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
        }

        .attribution a {
            text-decoration: none;
            color: white;
            background-color: #123458;
            padding: 5px;
            border-radius: 5px;
        }

        .attribution a:hover {
            background-color: white;
            color: #123458;
            transition: all 0.3s ease;
        }
        `;
    }

    render() {
        this._emptyContent();
        this._updateStyle();

        this._shadowRoot.appendChild(this._style);
        this._shadowRoot.innerHTML += `
            <div class="attribution">
                Project by <a href="https://www.dicoding.com/" target="_blank">Dicoding</a>.
                Coded by <a href="https://github.com/cia2003">Gracia N. S.</a>.
            </div>
        `;
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define('my-attribution', Attribution);