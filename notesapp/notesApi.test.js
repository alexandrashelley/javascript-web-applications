
const NotesApi = require('./notesApi');

// This makes `fetch` available to our test
// (it is not by default, as normally `fetch` is only
// available within the browser)
require('jest-fetch-mock').enableMocks()

describe('NotesApi class', () => {
  it('calls fetch and loads list of notes', async () => {
    const api = new NotesApi();
    fetch.mockResponseOnce(JSON.stringify({
      name: 'Example note'
    }));

    api.loadNotes('localhost:3000/notes', (jsonObject) => {
      expect(jsonObject.name).toBe('Example note');
    });
  });
});