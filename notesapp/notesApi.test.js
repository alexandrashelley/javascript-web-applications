
const NotesApi = require('./notesApi');

// This makes `fetch` available to our test
// (it is not by default, as normally `fetch` is only
// available within the browser)
require('jest-fetch-mock').enableMocks()

describe('NotesApi class', () => {
  it('calls fetch and loads list of notes', async () => {
    const api = new NotesApi();


    fetch.mockResponseOnce(JSON.stringify({
      name: 'Example bar',
    }));

    // 3. We call the method, and use `expect`
    // to assert the values we get back contain
    // what we expect.
    api.loadData((returnedDataFromApi) => {
      expect(returnedDataFromApi.name).toBe("Some value");
      expect(returnedDataFromApi.id).toBe(123);
    });

    // api.loadNotes('localhost:3000/notes', (jsonObject) => {
    //   console.log(jsonObject)
    //   console.log("foo bar")
    //   expect(jsonObject.name).toBe('Example note');
    // });
  });
});