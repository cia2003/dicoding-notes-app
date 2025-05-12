class AddNoteForm extends HTMLElement {
    _shadowRoot = null;
    _style = null;

    _submitEvent = 'submit';
    _sendNoteEvent = 'send-note';

    constructor() {
        super();

        this._shadowRoot = this.attachShadow({ mode: 'open'});
        this._style = document.createElement('style');
    }

    _empytElement() {
        this._shadowRoot.innerHTML = '';
    }

    _updateStyle() {
        this._style.textContent = `
            :host {
                font-family: 'Outfit', sans-serif;
            }
            .add-note-form .form-group {
                margin-bottom: 1rem;
            }

            .add-note-form input[type="text"], .add-note-form textarea {
                padding: 5px;
                width: 100%;
                box-sizing: border-box;
            }

            .form-submit {
                width: 100%;
                background-color: #123458;
                color: white;
                border: 1px solid #123458;
                padding: 10px;
                border-radius: 5px;
                font-weight: 700;
                letter-spacing: 0.3rem;
            }

            .form-submit:hover {
                transition: all 0.5s ease;
                background-color: white;
                border: 3px solid #123458;
                color: #123458;
                cursor: pointer;
            }
        `;
    }

    _activateInput() {
        const titleInput = this._shadowRoot.getElementById('noteTitle');
        const bodyInput = this._shadowRoot.getElementById('noteBody');

        const titleError = this._shadowRoot.getElementById('titleError');
        const bodyError = this._shadowRoot.getElementById('bodyError');

        const setupInputValidation = (inputElement, errorElement, maxChar) => {
            inputElement.addEventListener('input', () => {
                const inputValue = inputElement.value;
                let charLength = inputValue.length;
                let remainCharLength = maxChar - charLength;

                if (remainCharLength === maxChar) {
                    errorElement.textContent = 'Required to fill this field!'
                    errorElement.style.color = '#dc143c';
                } else if (remainCharLength < maxChar) {
                    errorElement.textContent = `Remain Characters: ${remainCharLength}`;
                    errorElement.style.color = '#006400';
                } else if (charLength<=20) {
                    errorElement.textContent = `Remain Characters: ${remainCharLength}`;
                    errorElement.style.color = '#d4af37';
                } else if (charLength<=10) {
                    errorElement.textContent = `Remain Characters: ${remainCharLength}`;
                    errorElement.style.color = '#dc143c';
                }

            });
        }

        setupInputValidation(titleInput, titleError, 20);
        setupInputValidation(bodyInput, bodyError, 800);
    }

    _onFormSubmit(event, addNoteFormInstance) {
        addNoteFormInstance.dispatchEvent(new CustomEvent('submit'));

        event.preventDefault();
    }

    _onSendNote() {
        const titleInput = this._shadowRoot.getElementById('noteTitle').value.trim();
        const bodyInput = this._shadowRoot.getElementById('noteBody').value;

        if (!titleInput || !bodyInput) return;

        const newNote = {
            id: 'note-' + Date.now(),
            title: titleInput,
            body: bodyInput,
            createdAt: new Date().toISOString(),
            archived: false,
        }

        this.dispatchEvent(
            new CustomEvent(this._sendNoteEvent, {
                detail: { note: newNote },
                bubbles: true
            }),
        );
    }

    render() {
        this._empytElement();
        this._updateStyle();

        this._shadowRoot.appendChild(this._style);
        this._shadowRoot.innerHTML += `
            <form id="addNoteForm" class="add-note-form">
                <div class="form-group">
                    <label for="note-title">Title</label><br>
                    <input type="text" name="note-title" id="noteTitle" maxlength=20 required>
                    <small class="error-input" id="titleError"></small>
                </div>
                <div class="form-group">
                    <label for="note-body">Body</label><br>
                    <textarea name="note-body" rows="10" id="noteBody" maxlength=800 required></textarea>
                    <small class="error-input" id="bodyError"></small>
                </div>
                <button type="submit" class="form-submit">SUBMIT</button>
            </form>
        `;
    }

    connectedCallback() {
        this.render();
        this._activateInput();

        this._shadowRoot
            .getElementById('addNoteForm')
            .addEventListener('submit', (event) => this._onFormSubmit(event, this));

        this.addEventListener(this._submitEvent, this._onSendNote);
        
    }
}

customElements.define('add-note-form', AddNoteForm);