console.log('The notes app is running') 

const NotesApi = require('./notesApi');
const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

const api = new NotesApi();
const model = new NotesModel();
const view = new NotesView(model, api);
model.addNote('This is an example note');
view.displayNotes();