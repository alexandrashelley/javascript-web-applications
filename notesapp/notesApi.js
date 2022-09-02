class NotesApi {

  // Load notes
  loadNotes(callback) {
    fetch('http://localhost:3000/notes')
    .then(response => {
      console.log("hello")
      console.log(response)
      return response.json()
    })
    .then(data => callback(data))
  }

  // Create note

  // fetch()

}


module.exports = NotesApi;

