import PropTypes from "prop-types";
import { useState } from 'react'

const Note = ({ note }) => <li> {note.content} </li>

const Collections = (props) => {
    const [notes, setNotes] = useState(props.notes)
    const [newNote, setNewNote] = useState('new note')
    const [showAll, setShowAll] = useState(true)

    const notesToShow = showAll
        ? notes
        : notes.filter(note => note.important === true);

    const addNote = (event) => {
        event.preventDefault();
        console.log(event.target)
        setNotes(notes.concat({
            content: newNote,
            important: Math.random() > 0.5,
            id: notes.length + 1,
        }))
        console.log(notes)
    }

    const handleNoteChange = (event) => {
        console.log(event.target.value);
        setNewNote(event.target.value);
    }

    return (
        <div>
            <h1>Notes</h1>
            <ul>
                    {notesToShow.map(note =>
                    <Note key={note.id} note={note} />
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