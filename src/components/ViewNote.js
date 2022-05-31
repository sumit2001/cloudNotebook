import React, { useContext } from 'react'
import noteContext from "../context/notes/noteContext";
const ViewNote = (props) => {
    const context = useContext(noteContext);
    const { notes } = context;
    var idx;
    const getCurrentId = () => {
        for (let i = 0; i < notes.length; i++) {
            if (notes[i]._id === props.view._id) {
                idx = i;
                break;
            }
        }
    }
    getCurrentId();
    const handlePrev = () => {
        getCurrentId();
        props.setview(notes[idx - 1]);

    }
    const handleNext = () => {
        getCurrentId();
        props.setview(notes[idx + 1]);
    }
    return (
        <div>

            <button type="button" ref={props.viewRef} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop"></button>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header" style={{ wordBreak: "break-Word" }}>
                            <h5 className="modal-title" id="staticBackdropLabel">{props.view.title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" style={{ wordBreak: "break-Word" }}>
                            {props.view.description}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={handlePrev} disabled={idx === 0} style={{ position: "absolute", left: "13px" }}>Prev</button>
                            <button type="button" className="btn btn-primary" onClick={handleNext} disabled={idx === notes.length - 1}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ViewNote
