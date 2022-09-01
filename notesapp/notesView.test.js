/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const NotesView = require('./notesView'); 
 const NotesModel = require('./notesModel');
const NotesApi = require('./notesApi');
 
 describe('NotesView', () => {
   beforeEach(() => {
     document.body.innerHTML = fs.readFileSync('./index.html');
   });

   it('displays no notes on the web page', () => {
    const model = new NotesModel();
    const view = new NotesView(model);

     view.displayNotes();
 
     expect(document.querySelectorAll('.note').length).toBe(0);
    });
 
   it('displays notes on the web page', () => {
    const model = new NotesModel();
    const view = new NotesView(model);

     model.addNote('Alex has a lovely dog');
     model.addNote('Naomi had a great cycle to the office');
     view.displayNotes();
 
     expect(document.querySelectorAll('.note').length).toBe(2);
     expect(document.querySelector('.note').textContent).toBe('Alex has a lovely dog');
    });

    it('clicking the button adds a new note', () => {
      const model = new NotesModel();
      const view = new NotesView(model);

      const inputEl = document.querySelector('#note-input');
      inputEl.value = 'This is a note';

      const buttonEl = document.querySelector('#add-note-button');
      buttonEl.click();

      expect(document.querySelectorAll('.note').length).toBe(1);
      expect(document.querySelector('.note')).not.toBeNull();
      expect(document.querySelector('.note').textContent).toBe('This is a note');
    })

    it('clicking the button removes previous notes and adds a new note and', () => {
      const model = new NotesModel();
      const view = new NotesView(model);

      const inputEl = document.querySelector('#note-input');
      inputEl.value = 'This is a note';

      const buttonEl = document.querySelector('#add-note-button');
      buttonEl.click();
      buttonEl.click();

      expect(document.querySelectorAll('.note').length).toBe(2);
      expect(document.querySelector('.note')).not.toBeNull();
      expect(document.querySelector('.note').textContent).toBe('This is a note');
    })

    it('loads and displays notes from the api', () => {
      const model = new NotesModel();
      const api = new NotesApi();
      const view = new NotesView(model, api);

      api.loadNotes(localhost:3000/notes, (loadedNotes) => { 
        model.setNotes(loadedNotes);
        view.displayNotes();})
     

// loadnotes( url, (arg) => { 
//   do this shit here to the arg
// })

      




    })
 });