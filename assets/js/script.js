function getLocal() {
  var notes = localStorage.getItem('NoteList');

  if(notes != null) {
      return JSON.parse(notes);
  }
  else {
    return [];
  }
}

function setLocal(inputText, inputDate, inputImportant, inputIcon) {
  var origNotes = getLocal();
  var newNote = {
    text:       inputText,
    date:       inputDate,
    important:  inputImportant,
    icon:       inputIcon
  };
  origNotes.push(newNote);

  var newNotes = JSON.stringify(origNotes);

  localStorage.setItem('notes', newNotes);
}

setLocal('Cry', '2018/03/07 10:30:01', true, 'tint');
