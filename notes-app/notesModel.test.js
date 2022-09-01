const NotesModel = require('./notesModel')

describe('NotesModel', () => {
  it('returns an empty list of notes', () => {
    const model = new NotesModel();
    expect(model.getNotes()).toEqual([]);
  });

  it('returns a list with notes added', () => {
    const model = new NotesModel();
    model.addNote('Buy milk');
    model.addNote('Go to the gym');

    expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym']);
  });

  it('returns an empty list after resetting the notes', () => {
    const model = new NotesModel();
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    model.reset()
;
    expect(model.getNotes()).toEqual([]);
  });
});