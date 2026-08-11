import path from 'node:path';
import {
    readFile,
    writeFile
} from 'node:fs/promises';

const notesFile = path.join(
    'data',
    'notes.json'
);


async function readNotes() {
    try {
        const data = await readFile(
            notesFile,
            'utf-8'
        );

        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading notes:', error.message);
        process.exit(1);
    }
}


async function writeNotes(notes) {
    try {
        const data = JSON.stringify(
            notes,
            null,
            2
        );

        await writeFile(
            notesFile,
            data,
            'utf-8'
        );
    } catch (error) {
        console.error('Error writing notes:', error.message);
        process.exit(1);
    }
}


async function addNote(text) {

    if (!text) {
        console.error('Please provide a note.');
        process.exit(1);
    }

    const notes = await readNotes();

    const newNote = {
        id: Date.now(),
        text: text
    };

    notes.push(newNote);

    await writeNotes(notes);

    console.log('Note added successfully!');
}


async function listNotes() {

    const notes = await readNotes();

    if (notes.length === 0) {
        console.log('No notes found.');
        return;
    }

    notes.forEach((note) => {
        console.log(
            `${note.id}: ${note.text}`
        );
    });
}


async function deleteNote(id) {

    if (!id) {
        console.error('Please provide note ID.');
        process.exit(1);
    }

    const notes = await readNotes();

    const noteId = Number(id);

    const updatedNotes = notes.filter(
        (note) => note.id !== noteId
    );

    if (updatedNotes.length === notes.length) {
        console.error('Note not found.');
        return;
    }

    await writeNotes(updatedNotes);

    console.log('Note deleted successfully!');
}


const command = process.argv[2];
const value = process.argv[3];

switch (command) {

    case 'add':
        await addNote(value);
        break;

    case 'list':
        await listNotes();
        break;

    case 'delete':
        await deleteNote(value);
        break;

    default:
        console.log(`
Usage:

npm run notes -- add "Your note"
npm run notes -- list
npm run notes -- delete <id>
        `);
}