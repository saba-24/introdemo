
import { useState, useEffect } from 'react'
import axios from "axios";

const Note = ({note}) => <li> {note.content} </li>

const Collections = () => {

    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('new note')
    const [showAll, setShowAll] = useState(true)

    const notesToShow = showAll
        ? notes
        : notes.filter(note => note.important === true)

    const hook = () => {
        console.log('hi')
        axios
            .get('http://localhost:3001/notes')
            .then((res) => {
                setNotes(res.data)
                console.log('promise fulfilled')
            })
    }
    useEffect(hook, [])
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