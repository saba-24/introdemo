import PropTypes from "prop-types";
import Note from "./Note";

const Collections = ({ notes }) => {
    Collections.propTypes = {
        notes: PropTypes.array,
    }
    return (
        <div>
            <h1>Notes</h1>
            <ul>
                {notes.map(note =>
                    <Note key={note.id} note={note} />
                    )}
            </ul>
        </div>
    )
}

export default Collections;