const sheet = new CSSStyleSheet();
sheet.replaceSync(`
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
            .ellipsis {
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .background-shadow {
              box-shadow: 1px 0 10px rgba(0, 0, 0, 0.5);
            }
    `);
export { sheet };
