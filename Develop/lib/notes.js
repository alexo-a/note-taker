//for validating, creating new notes,filtering
//check that, validating not required by me, the save button disappears if either field is blank
const fs = require("fs");
const path = require("path");



function test(){
    console.log("./lib/notes.js working")
};
function createNewNote(note, notesArray, newIndex){
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray , index: newIndex}, null, 2)
    );
    return note;

};

module.exports= {
test,
createNewNote
}