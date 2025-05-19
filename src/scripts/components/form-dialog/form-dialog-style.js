const sheet = new CSSStyleSheet();
sheet.replaceSync(`
            ::slotted(*) {
                width: 100%;
            }
            .dialog {
                display: none;
                flex-direction: column;
                align-items: center;
                margin: auto;
                top: 0;
                padding: 30px;
                border: none;
                border-radius: 10px;
                width: 280px;
            }

            .dialog-header {
                width: 100%;
                display: flex;
                justify-content: flex-end;
            }
            
            .dialog-title {
                text-align: center;
                font-size: 1.5rem;
                margin-bottom: 1.5rem;
            }

            .dialog-body {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
            }
            
            .dialog .close-button {
                font-size: 2rem;
                background-color: transparent;
                border: none;
                cursor: pointer; 
    `);
export { sheet };
