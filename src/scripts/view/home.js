import Notes from "../data/note.js";
import Utils from "../utils.js";

const allNotes = Notes;

function displayAllNotes(page) {
    const noteListContainer = document.querySelector('.note-list');
    const notesToDisplay = allNotes.getAll();
    let noteItemElements = null;

    switch(page) {
        case "home":
            noteItemElements = notesToDisplay
                                .filter((note) => note.archived === false)
                                .map((note) => {
                                    const noteItemElement = document.createElement('note-item');
                                    noteItemElement.note = note;
                            
                                    return noteItemElement;
                                });

            break;
        
        case "archive":
            noteItemElements = notesToDisplay
                                .filter((note) => note.archived === true)
                                .map((note) => {
                                    const noteItemElement = document.createElement('note-item');
                                    noteItemElement.note = note;
                            
                                    return noteItemElement;
                                });
            break;
    }

    Utils.emptyElement(noteListContainer);
    noteListContainer.append(...noteItemElements);

    setNoteItemEventListener(noteListContainer);
}

function onNavigateMenu(event) {
    event.preventDefault();

    const page = event.detail.page;

    switch(page) {
        case "home":
            console.log("home");
            displayAllNotes('home');
            break;

        case "archive":
            console.log('archive');
            displayAllNotes('archive');
            break;

    }
}

function archiveNote(targetId) {
    allNotes.setNoteToArchive(targetId);
    displayAllNotes("home");
}

function undoNoteFromArchive(targetId) {
    allNotes.undoNoteFromArchive(targetId);
    displayAllNotes("archive");
}

function removeNote(targetId) {
    const noteArchiveStatus = allNotes.removeNote(targetId);

    switch(noteArchiveStatus) {
        case false:
            displayAllNotes('home');
            break;
        case true:
            displayAllNotes('archive');
            break;
    }
}

function onNoteAction(event) {
    event.preventDefault();

    const noteAction = event.detail.action;
    const noteId = event.detail.noteId;
    
    switch(noteAction) {
        case 'archive':
            archiveNote(noteId);
            break;
        
        case 'undo':
            undoNoteFromArchive(noteId);
            break;

        case 'remove':
            removeNote(noteId);
            break;
    }
}

function setNoteItemEventListener(container) {
    const allNoteItemElements = container.querySelectorAll('note-item');

    allNoteItemElements.forEach((noteItem) => {
        noteItem.addEventListener('note-action', (event) => onNoteAction(event));
    });
}

function createDialog(title) {
    const dialogElement = document.createElement('dialog');
    const dialogHeader = document.createElement('header');
    const dialogBody = document.createElement('main');
    const dialogFooter = document.createElement('footer');
    const dialogStyle = document.createElement('style');

    const dialogTitle = document.createElement('h1');
    const closeButton = document.createElement('button');

    closeButton.classList.add('close-button');
    closeButton.innerHTML = 'X';

    closeButton.addEventListener('click', () => {
        dialogElement.close();
        dialogElement.remove();
    })

    dialogTitle.innerHTML = title;
    dialogTitle.classList.add('dialog-title');

    dialogFooter.classList.add('dialog-footer');
    dialogBody.classList.add('dialog-body');
    dialogHeader.classList.add('dialog-header');

    dialogBody.appendChild(dialogTitle);
    dialogHeader.appendChild(closeButton);

    dialogStyle.textContent = `
        .dialog {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: auto;
            top: 0;
            padding: 30px;
            border: none;
            border-radius: 10px;
            width: 300px;
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
        }  
    `;

    dialogElement.classList.add('dialog');

    dialogElement.append(dialogStyle, dialogHeader, dialogBody, dialogFooter);
    return dialogElement;
}

function onSendNewNote(event) {
    event.preventDefault();
    const dialogElement = document.querySelector('.dialog');
    
    const newNote = event.detail.note;

    allNotes.pushData(newNote);

    dialogElement.remove(dialogElement);
    displayAllNotes('home');
}

function onClickAddNoteButton(event) {
    event.preventDefault();

    const container = document.querySelector('.main');
    const dialogElement = createDialog('Add Note Form');
    const dialogBody = dialogElement.querySelector('.dialog-body');
    const addNoteForm = document.createElement('add-note-form');

    dialogBody.appendChild(addNoteForm);
    container.appendChild(dialogElement)

    dialogElement.showModal();

    addNoteForm.addEventListener('send-note', (event) => onSendNewNote(event));
}

function displayResult(notes) {
    const noteListContainer = document.querySelector('.note-list');
    const noteItemElements = notes.map((note) => {
        const noteItemElement = document.createElement('note-item');
        noteItemElement.note = note;

        return noteItemElement;
    });

    Utils.emptyElement(noteListContainer);
    noteListContainer.append(...noteItemElements);

    setNoteItemEventListener(noteListContainer);
}

function showCertainNote(query) {
    if (query === "") {
        displayAllNotes('home');
    } else {
        const result = allNotes.searchNote(query);
        displayResult(result);
    }
    
}

function onSearchHandler(event) {
    event.preventDefault();
    const { query } = event.detail;
    
    showCertainNote(query);
}

function home() {
    const navbarElement = document.querySelector('nav-bar');
    const searchBarElement = document.querySelector('search-bar');
    const addNoteButton = document.querySelector('.add-note-button');

    navbarElement.addEventListener('navigate', (event) => onNavigateMenu(event));
    searchBarElement.addEventListener('search', (event) => onSearchHandler(event));
    addNoteButton.addEventListener('click', (event) => onClickAddNoteButton(event));
    displayAllNotes("home");
}

export default home;