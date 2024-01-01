class NotesList {
    constructor() {
        this.notes = [];
    }
    addNote(noteTitle, noteContent, isCompleted = false, time, editTime) {
        time = new Date();
        editTime = new Date();
        const newNote = {
            noteTitle: noteTitle,
            noteContent: noteContent,
            isCompleted: isCompleted,
            time: time,
            editTime: editTime
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
        this.notes[indexToEdit].editTime = new Date();

        console.log(`Note '${toEdit}' edited.`);
    }
    getNoteInfo(getInfo) {
        // if (){
        //
        //
        // }

        const note = this.notes.find(note => note.noteTitle === getInfo);

        console.log(`${note.time}\n${note.editTime}`);
        if(note.time == note.editTime) console.log("Same");
        console.log(`Title: ${note.noteTitle}
        Content: ${note.noteContent}
        Status: ${note.isCompleted}
        Creation Time: ${note.time}
        Edit Time: ${note.editTime}
        `);
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
}

class SortedNotesList extends NotesList {
    constructor() {
        super();
    }

    sortNotesByStatus() {
        // Сначала сортируем по статусу выполнения (завершенные впереди)
        this.notes.sort((a, b) => {
            if (a.isCompleted && !b.isCompleted) return -1;
            if (!a.isCompleted && b.isCompleted) return 1;
            return 0;
        });

        // Выводим отсортированный список в консоль
        console.log("Sorted Notes by Status:");
        this.getNotes();
    }
    sortNotesByUncompletedFirst() {
        // Сортируем по статусу выполнения (незавершенные впереди)
        this.notes.sort((a, b) => {
            if (!a.isCompleted && b.isCompleted) return -1;
            if (a.isCompleted && !b.isCompleted) return 1;
            return 0;
        });

        // Выводим отсортированный список в консоль
        console.log("Sorted Notes by Uncompleted First:");
        this.getNotes();
    }
}
const sortedNotesList = new SortedNotesList();

const myNotesList = new NotesList();
sortedNotesList.addNote('New Year', `Don't worry! Be happy!`, true, time = new Date(), editTime= new Date());
sortedNotesList.addNote('JS tasks', `To complete the JS tasks`, false, time = new Date(), editTime= new Date());
sortedNotesList.addNote('NY salad', `Finish the salad with crab sticks`, true, time = new Date(), editTime= new Date());
for (; ;) {
    let choice = prompt(`Choice a variant:
    1) Add new note
    2) Delete a note
    3) Edit a note
    4) Find a note
    5) List of notes
    6) Total number of all and uncompleted notes
    7) Sort the notes (completed first)
    8) Sort the notes (UNcompleted first)
    0) Exit`)
    if (choice == 0) break;
    switch (choice) {
        case '1':
            let newNote = prompt("Title of a new note");
            let noteContent = prompt("Note text");
            let isCompleted = prompt("Is the note completed? y/n");
            isCompleted = isCompleted === 'y';
            sortedNotesList.addNote(newNote, noteContent, isCompleted, time);
            break;
        case '2':
            let toDelete = prompt("Delete a note");
            sortedNotesList.deleteNote(toDelete);
            break;
        case '3':
            let toEdit = prompt("Edit a note");
            sortedNotesList.editNote(toEdit);
            break;
        case '4':
            let getInfo = prompt("Title of a note");
            sortedNotesList.getNoteInfo(getInfo);
            break;
        case '5':
            sortedNotesList.getNotes();
            break;
        case '6':
            sortedNotesList.notesNumber();
            break;
        case '7':
            sortedNotesList.sortNotesByStatus();
            break;
        case '8':
            sortedNotesList.sortNotesByUncompletedFirst();
            break;
    }
}




