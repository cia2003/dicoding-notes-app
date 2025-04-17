import './scripts/components/index.js';
import home from "./scripts/view/home.js";

document.addEventListener('DOMContentLoaded', () => {
    home();

    if (document.body.classList.contains('home')) {
        console.log("This is the home page.");
    } else if (document.body.classList.contains('archive')) {
        console.log("This is an archive page.");
    }
})