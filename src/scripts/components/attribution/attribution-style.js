const sheet = new CSSStyleSheet();
sheet.replaceSync(`
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
            margin: 0 5px;
        }

        .attribution a:hover {
            background-color: white;
            color: #123458;
            transition: all 0.3s ease;
        }
    `);
export { sheet };
