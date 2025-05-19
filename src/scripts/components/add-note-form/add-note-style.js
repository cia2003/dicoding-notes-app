const sheet = new CSSStyleSheet();
sheet.replaceSync(`
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
    `);
export { sheet };
