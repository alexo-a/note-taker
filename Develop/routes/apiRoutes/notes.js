const router = require('express').Router();
const { createNewNote, deleteNote } = require('../../lib/notes');
let idArray = []//probably doesn't need to be global
let { notes } = require('../../db/db');

function getNextId(){
    //extract the IDs (as ints)
    idArray = notes.map(function (note) {
        return parseInt(note.id);
    });
    //sort the array in descending order
    idArray.sort(function (a, b) {
        return b-a;
    });
    //return the highest ID plus one 
    return idArray[0]+1;
}

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.post('/notes', (req, res) => {
    const newID = getNextId();

    //set the body id
    req.body.id = newID.toString();
    const newNote = createNewNote(req.body, notes, newID.toString());
    res.json(newNote);
});

router.delete("/notes/:id", (req, res) => {
    const deletedNote = deleteNote(req.params.id, notes);
    res.json(deletedNote);
});
module.exports = router;