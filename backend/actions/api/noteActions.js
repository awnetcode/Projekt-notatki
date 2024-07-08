const Note = require('../../database/models/note.js')

class NoteActions {

    //zapisywanie notatek
    saveNote(request, response) {
        /*
        const newNote = new Note({
            title: 'tytuł testowy',
            body: 'treść mojej notatki'
        });

        newNote.save().then(() => {
            console.log('zapisano notatkę')
        });
            */
           const title = request.body.title;
           const body = request.body.body;
           
        response.send('Notatka została zapisana! Tytuł: '+title+' treść: '+body);

    }

    getAllNotes(req, res) {
        Note.find({}, (err, doc) => {
            console.log(doc);
        });
        //pobieranie notatek
        res.send('API działa!');
    }

    getNote(req, res) {
        //pobieranie notatki (konkretnej)
        res.send('Info o notatce:');
    }

    updateNote(req, res) {
        //edycja notatki
        res.send('Zaktualizowano notatkę');
    }

    deleteNote(req, res) {
        const id = req.params.id;
        //usuwanie notatki
        res.send('Usunięto notatkę o ID: ' + id);
    }
}

module.exports = new NoteActions();