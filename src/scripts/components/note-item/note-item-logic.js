function calculateDateTime(datetime) {
  const dateTime = new Date(datetime);

  const dateOnly = dateTime.toLocaleDateString();
  const timeOnly = dateTime.toLocaleTimeString();

  return { dateOnly, timeOnly };
}

function archiveAction(noteInstance, eventName) {
  console.log("udah diklik");
  const noteActionEvent = new CustomEvent(eventName, {
    detail: {
      action: "archive",
      noteId: noteInstance.id,
    },
    bubbles: true,
  });

  return noteActionEvent;
}

function undoAction(noteInstance, eventName) {
  const noteActionEvent = new CustomEvent(eventName, {
    detail: {
      action: "undo",
      noteId: noteInstance.id,
    },
    bubbles: true,
  });

  return noteActionEvent;
}

function removeAction(noteInstance, eventName) {
  const noteActionEvent = new CustomEvent(eventName, {
    detail: {
      action: "remove",
      noteId: noteInstance.id,
    },
    bubbles: true,
  });

  return noteActionEvent;
}

export { calculateDateTime, archiveAction, undoAction, removeAction };
