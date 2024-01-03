class NotesList {
    constructor() {
        this.notes = [];
    }
    addNote(noteTitle, noteContent, isCompleted = false, time, editTime = null) {
        time = new Date();
        const newNote = {
            noteTitle: noteTitle,
            noteContent: noteContent,
            isCompleted: isCompleted,
            time: time,
            editTime: editTime
        };
        this.notes.push(newNote);
        console.log(`Note "${noteTitle}" was added`);
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

        const note = this.notes.find(note => note.noteTitle === getInfo);
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

    sortNotesByCompleted() {
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
    sortNotesByUncompleted() {
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

    sortByAsc() {
        this.notes.sort((a, b) => {
            if (!a.editTime && b.editTime) return -1;
            if (a.editTime && !b.editTime) return 1;
            if (a.editTime && b.editTime) return a.editTime - b.editTime;
            return 0;
        });
        console.log("Sorted Notes by Edit Time (Ascending):");
        this.getNotes();
    }



    sortByDesc() {
        // Сортируем заметки по убыванию времени редактирования
        this.notes.sort((a, b) => {
            if (!a.editTime && b.editTime) return 1;
            if (a.editTime && !b.editTime) return -1;
            if (a.editTime && b.editTime) return b.editTime - a.editTime;
            return 0;
        });
        // Перемещаем заметки без времени редактирования в конец
        this.notes.sort((a, b) => {
            if (!a.editTime && b.editTime) return 1;
            if (a.editTime && !b.editTime) return -1;
            return 0;
        });
        // Выводим отсортированный список в консоль
        console.log("Sorted Notes by Edit Time (Descending):");
        this.getNotes();
    }



}
const sortedNotesList = new SortedNotesList();

const myNotesList = new NotesList();
sortedNotesList.addNote('NY', `Don't worry! Be happy!`, true, time = new Date());
sortedNotesList.addNote('JS', `To complete the JS tasks`, false, time = new Date());
sortedNotesList.addNote('Salad', `Finish the salad with crab sticks`, true, time = new Date());
sortedNotesList.addNote('Movie', `Watch a movie`, false, time = new Date());
sortedNotesList.addNote('Book', `Read some pages`, true, time = new Date());
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
    9) Sort by ascending edit time
    10) Sort by descending edit time
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
            sortedNotesList.sortNotesByCompleted();
            break;
        case '8':
            sortedNotesList.sortNotesByUncompleted();
            break;
        case '9':
            sortedNotesList.sortByAsc();
            break;
        case '10':
            sortedNotesList.sortByDesc();
            break;
    }
}




