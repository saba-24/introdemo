
import { useState, useEffect } from 'react'
import noteService from './services/notes.js'

const Note = ({note, toggleImportance}) =>{
    /*Note.propTypes = {
        note: {
            content: String,
            important: Boolean,
            id: Number
        },
        toggleImportance: Function
    }*/
        const label = note.important
            ? 'set not important' : 'set important'
        return (
            <li> {note.content}
                <button onClick={toggleImportance}>{label}</button>
            </li>
        )
    }
const Collections = () => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('new note')
    const [showAll, setShowAll] = useState(true)

    const notesToShow = showAll
        ? notes
        : notes.filter(note => note.important === true && note.important !== undefined)

    const hook = () => {
        noteService
            .getAll()
            .then((res) => {
                setNotes(res)
            })
    }
    useEffect(hook, [])

    const addNote = (event) => {
        event.preventDefault();
        console.log(event.target)
        const nNote ={
            content: newNote,
            important: Math.random() > 0.5,
            id: notes.length + 1,
        }
        noteService
            .create(nNote)
            .then(res => {
                console.log(res);
                setNotes(notes.concat(res));
                setNewNote('');
            })
        console.log(notes)
    }

    const toggleImportanceOf = (id) => {
        const note = notes.find(note => note.id === id);
        const changedNote = {...note, important: !note.important};
        noteService
            .update(id, changedNote)
            .then(res => {
                setNotes(notes.map(n => n.id === id ? res : n))
            })
            .catch(err => {
                alert(
                    `note ${note.content} was already deleted`
                )
                setNotes(notes.filter(n => n !== undefined ? n.id !== id : null))
            })
    }

    const handleNoteChange = (event) => {
        setNewNote(event.target.value);
    }

    return (
        <div>
            <h1>Notes</h1>
            <ul>
                    {notesToShow.map(note =>
                        note !== undefined
                        ?<Note key={note.id} note={note}
                        toggleImportance={() => toggleImportanceOf(note.id)}/>
                            : null
                )}
            </ul>
            <form onSubmit={addNote}>
                <input value={newNote} onChange={handleNoteChange} />
                <button type="submit">Add Note</button>
            </form>
            <button onClick={() => setShowAll(!showAll)}>
            show {showAll ? 'important' : 'all'} notes
                </button>
        </div>
    )
}

export default Collections;