class NotesView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.mainContainerEl = document.querySelector('#main-container');
    this.noteInputEl = document.querySelector('#note-input');
    this.addButtonEl = document.querySelector('#add-note-button');

    // Creating buttons
    this.addButtonEl.addEventListener('click', () => {
      this.removeNotes();
      this.addNotes();
      this.displayNotes();
    });
  }

  displayNotes() {   
    const notes = this.model.getNotes();

    notes.forEach((note) => {
      let div = document.createElement('div');
      div.className = 'note'
      div.textContent = note;
      this.mainContainerEl.append(div);
    });
  };

  addNotes() {
    this.model.addNote(this.noteInputEl.value);
  }

  removeNotes() {
    document.querySelectorAll('.note').forEach(element => {
      element.remove();
    });
  }
};

module.exports = NotesView;