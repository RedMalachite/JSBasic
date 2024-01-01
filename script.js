class NotesList {
    constructor() {
        this.notes = [];
    }

    addNote(noteTitle, noteContent, isCompleted = false, time) {
        const newNote = {
            noteTitle: noteTitle,
            noteContent: noteContent,
            isCompleted: isCompleted,
            time: time
        };
        this.notes.push(newNote);
    }

    deleteNote(toDelete) {
        const indexToDelete = this.notes.findIndex(note => note.noteTitle === toDelete);
        this.notes.splice(indexToDelete, 1);
        console.log(`Note with title '${toDelete}' deleted.`);

    }

    editNote(toEdit) {
        const indexToEdit = this.notes.findIndex(note => note.noteTitle === toEdit);
        if (indexToEdit === -1) {
            console.log(`Note with title '${toEdit}' not found.`);
            return;
        }

        let newContent = prompt(`Enter new content for the note '${toEdit}':`);
        let isCompleted = prompt(`Is the note '${toEdit}' completed? (y/n):`);
        if (isCompleted === 'y') {
            isCompleted = true;
        } else isCompleted = false;

        this.notes[indexToEdit].noteContent = newContent;
        this.notes[indexToEdit].isCompleted = isCompleted;

        console.log(`Note '${toEdit}' edited.`);
    }

    getNoteInfo(getInfo) {
        const note = this.notes.find(note => note.noteTitle === getInfo);
        console.log(`Title: ${note.noteTitle}
        Content: ${note.noteContent}
        Status: ${note.isCompleted}
        Date: ${note.time}`);
    }

    getNotes() {
        console.log(this.notes);
    }

    notesNumber(){
        const totalNotes = this.notes.length;
        const uncompletedNotes = this.notes.filter(note => !note.isCompleted).length;

        console.log(`Total number of notes: ${totalNotes}\nNumber of uncompleted notes: ${uncompletedNotes}
        `);
    }

    // getCompletedNotes() {
    //     console.log(this.notes.filter(note => note.isCompleted));
    // }
    //
    // getUncompletedNotes() {
    //     console.log(this.notes.filter(note => !note.isCompleted));
    //
    // }
}

const myNotesList = new NotesList();

myNotesList.addNote('New Year', `Don't worry! Be happy!`, true, time = new Date());
myNotesList.addNote('JS tasks', `To complete the JS tasks`, false, time = new Date());
myNotesList.addNote('NY salad', `Finish the salad with crab sticks`, false, time = new Date());

for (; ;) {
    let choice = prompt(`Choice a variant:
    1) Add new note
    2) Delete a note
    3) Edit a note
    4) Get information of a note
    5) List of notes
    6) Total number of all and uncompleted notes
    0) Exit`)
    if (choice == 0) break;
    switch (choice) {
        case '1':
            let newNote = prompt("Title of a new note");
            let noteContent = prompt("Note text");
            let isCompleted = prompt("Is the note completed? y/n");
            isCompleted = isCompleted === 'y';
            myNotesList.addNote(newNote, noteContent, isCompleted);
            break;
        case '2':
            let toDelete = prompt("Delete a note");
            myNotesList.deleteNote(toDelete);
            break;
        case '3':
            let toEdit = prompt("Edit a note");
            myNotesList.editNote(toEdit);
            break;
        case '4':
            let getInfo = prompt("Title of a note");
            myNotesList.getNoteInfo(getInfo);
            break;
        case '5':
            myNotesList.getNotes();
            break;
        case '6':
            myNotesList.notesNumber();
            break;
    }
}




