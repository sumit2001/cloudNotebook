import React, { useContext } from 'react'
import noteContext from "../context/notes/noteContext";
const NoteItem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;

    return (
        <div className="col-md-4 col-sm-6 col-lg-3">
            <div className="card my-3">
                <div className="icons" style={{ position: "absolute", right: 0 }}>
                    <i className="fa-solid fa-trash mx-2" onClick={() => {
                        deleteNote(note._id); props.showAlert("Deleted Successfully", "success");
                    }}></i>
                    <i className="fa-solid fa-pen-to-square mx-2" onClick={() => { updateNote(note) }}></i>
                </div>
                <div className="card-body" onClick={() => { props.openNote(note) }} style={{ cursor: "pointer" }}>
                    <div className="d-flex align-items-center" style={{ wordBreak: "break-Word" }}>
                        <h5 className="card-title">{note.title.length > 26 ? note.title.slice(0, 25) + "..." : note.title}</h5>
                    </div>
                    <p className="card-text">{note.description.length > 125 ? note.description.slice(0, 125) + "..." : note.description}</p>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
