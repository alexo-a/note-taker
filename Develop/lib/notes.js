//for validating, creating new notes,filtering
//check that, validating not required by me, the save button disappears if either field is blank
const fs = require("fs");
const path = require("path");

function createNewNote(note, notesArray, newIndex) {
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;

};

function deleteNote(id, notesArray) {
    id = id.toString();
    let indexToDelete = 0;
    for (i = 0; i < notesArray.length; i++){
        if (notesArray[i].id === id){
            indexToDelete = i; 
            break;
        }
    }
    let deletedNote = notesArray.splice(indexToDelete,1);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return deletedNote;
}

module.exports = {
    createNewNote,
    deleteNote
}