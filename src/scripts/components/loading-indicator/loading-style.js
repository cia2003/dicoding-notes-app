const sheet = new CSSStyleSheet();
sheet.replaceSync(`
            .loading-group {
                display: block;
                text-align: center;
            }
            .loading-box {
                width: 50px;
                height: 50px;
                background-color: #ff0088;
                border-radius: 10px;
                margin: 1rem auto;
            }
    `);
export { sheet };
