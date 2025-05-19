const sheet = new CSSStyleSheet();
sheet.replaceSync(`
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
    `);
export { sheet };
