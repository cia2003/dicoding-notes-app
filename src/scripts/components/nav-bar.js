// import home from "../view/home.js";

class NavBar extends HTMLElement {
    _shadowRoot = null;
    _style = null;

    constructor() {
        super();

        this._shadowRoot = this.attachShadow( {mode: 'open'} );
        this._style = document.createElement('style');
    }

    connectedCallback() {
        this.render();
    }

    _emptyContent() {
        this._shadowRoot.innerHTMl = '';
    }

    _updateStyle() {
        this._style.textContent = `
            .hamburger {
                font-size: 1.5rem;
                display: none;
                cursor: pointer;
            }

            .nav-list {
                display: flex;
                flex-direction: column;
                gap: 10px;
                padding-left: 0px;
            }

            .nav-item {
                list-style-type: none;
                cursor: pointer;
                padding: 10px 20px;
            }

            .nav-item:hover {
                background-color: white;
                color: var(--Midnight-Blue);
                transition: all 0.5s ease;
            }

            @media screen and (max-width: 768px){
                .hamburger {
                    display: block;
                }

                .nav-container {
                    display: none;
                }

                .show {
                    display: flex;
                    position: absolute;
                    align-items: center;
                    justify-content: center;
                    left: 0;
                    top: 80px;
                    width: 100vw;
                    text-align: center;
                    background-color: var(--Midnight-Blue);
                    border-top: 1px solid white;
                    padding: 10px 0;
                    z-index: 1000;
                }
            }
            `;
    }

    _onClickHamburgerButton(event) {
        event.preventDefault();

        const navContainerElement = this._shadowRoot.querySelector('.nav-container')
        navContainerElement.classList.toggle('show');

    }

    _onClickHomeMenu(event) {
        event.preventDefault();

        const navigateEvent = new CustomEvent('navigate', {
            detail: { page: 'home' }, 
            bubbles: true, 
            composed: true
        });

        this.dispatchEvent(navigateEvent);
    }

    _onClickArchiveMenu(event) {
        event.preventDefault();

        const navigateEvent = new CustomEvent('navigate', {
            detail: { page: 'archive' }, 
            bubbles: true, 
            composed: true
        });

        this.dispatchEvent(navigateEvent);
    }

    _activateButton() {
        const hamburgerElement = this._shadowRoot.getElementById('hamburger');
        const homeMenuElement = this._shadowRoot.getElementById('homeMenu');
        const archiveMenuElement = this._shadowRoot.getElementById('archiveMenu');
        
        hamburgerElement.addEventListener('click', (event) => this._onClickHamburgerButton(event));
        homeMenuElement.addEventListener('click', (event) => this._onClickHomeMenu(event));
        archiveMenuElement.addEventListener('click', (event) => this._onClickArchiveMenu(event))
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

customElements.define('nav-bar', NavBar);