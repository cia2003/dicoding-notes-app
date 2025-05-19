function createFormDialog(title, form) {
  const dialogElement = document.createElement("form-dialog");
  dialogElement.setAttribute("dialog-title", title);
  form.setAttribute("slot", "form-content");

  dialogElement.appendChild(form);

  return dialogElement;
}

export function createAddNoteDialog(addNoteForm, handler) {
  const dialogElement = createFormDialog("Add Note Form", addNoteForm);
  addNoteForm.addEventListener("send-note", handler);
  return dialogElement;
}
