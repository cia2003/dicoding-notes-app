class NoteItem extends HTMLElement {
    _shadowRoot = null;
    _style = null;

    _clickEvent = 'click';
    _noteAction = 'note-action';

    _note = {
        id: null,
        title: null,
        body: null,
        createdAt: null,
        archived: null,
    }

    constructor() {
        super();

        this._shadowRoot = this.attachShadow( {mode: 'open'} );
        this._style = document.createElement('style');
    }

    set note(value) {
        this._note = value;

        this.render();
    }

    get note() {
        return this._note;
    }

    _emptyContent() {
        this._shadowRoot.innerHTML = '';
    }

    _updateStyle() {
        this._style.textContent = `
            .note-item {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                gap: 5px;
                background-color: white;
                padding: 20px;
                border-radius: 5px;
                height: 100%;
            }

            .note-datetime {
                color: grey;
                margin-bottom: 0;
            }

            .note-body{
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .note-button {
                background-color: transparent;
                border: none;
                border-radius: 3px;
                padding: 5px 10px;
                font-family: 'Outfit';
            }

            .note-button:hover {
                border: 1px solid blacks;
                cursor: pointer;
                transition: all 0.5s ease;
            }

            .archive-button {
                background-color: green;
                color: white;
            }

            .archive-button:hover {
                background-color: white;
                color: green;

            }
            
            .undo-button{
                background-color: blue;
                color: white;
            }

            .undo-button:hover {
                background-color: white;
                color: blue;
            }

            .remove-button {
                background-color: red;
                color: white;
            }

            .remove-button:hover {
                background-color: white;
                color: red;
            } 
        `;
        
    }

    _calculateDateTime() {
        const dateTime = new Date(this._note.createdAt);

        const dateOnly = dateTime.toLocaleDateString();
        const timeOnly = dateTime.toLocaleTimeString();

        return {dateOnly, timeOnly};
    }

    _archiveAction() {
        const noteActionEvent = new CustomEvent(this._noteAction, {
            detail: { 
                action: 'archive',
                noteId: this._note.id
            },
            bubbles: true
        });

        this.dispatchEvent(noteActionEvent);
    }

    _undoAction() {
        const noteActionEvent = new CustomEvent(this._noteAction, {
            detail: { 
                action: 'undo', 
                noteId: this._note.id
            },
            bubbles: true
        });

        this.dispatchEvent(noteActionEvent);
    }

    _removeAction() {
        const noteActionEvent = new CustomEvent(this._noteAction, {
            detail: { 
                action: 'remove', 
                noteId: this._note.id
            },
            bubbles: true
        });

        this.dispatchEvent(noteActionEvent);
    }

    _activateButton() {
        const note = this._note;

        if (note.archived == false) {
           const archiveButton = this._shadowRoot.querySelector('.archive-button'); 
           archiveButton.addEventListener('click', (event) => this._archiveAction(event));

        } else {
            const undoButton = this._shadowRoot.querySelector('.undo-button');
            undoButton.addEventListener('click', (event) => this._undoAction(event));
        }

        const removeButton = this._shadowRoot.querySelector('.remove-button');
        removeButton.addEventListener('click', (event) => this._removeAction(event));
    }

    connectedCallback() {
        this._activateButton();
    }

    render() {
        const calculateDateTime = this._calculateDateTime();
        const dateOnly = calculateDateTime.dateOnly;
        const timeOnly = calculateDateTime.timeOnly;

        this._emptyContent()
        this._updateStyle();

        this._shadowRoot.appendChild(this._style);

        if (this._note.archived === false) {
            this._shadowRoot.innerHTML += `
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
                        <button class="note-button archive-button">Archive</button>
                        <button class="note-button remove-button">Remove</button>
                    </footer>
                </section>
            `;            
        } else {
            this._shadowRoot.innerHTML += `
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

customElements.define('note-item', NoteItem)