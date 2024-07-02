const Note = require('../../database/models/note.js')

module.exports = {
    saveNote(request, response) {

        const newNote = new Note({
            title: 'tytuł testowy',
            body: 'treść mojej notatki'
        });

        newNote.save().then(() => {
            console.log('zapisano notatkę')
        })

        response.send('Strona głowna działa!');
    }
}