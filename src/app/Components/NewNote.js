import React from "react";
import NoteForm from "./NoteForm.js";

const NewNote = ({saveFunct})=>{
    return(
        <div className="container fadeIn">
         <br/>
            <div className="row">
            <NoteForm/>
            <button className="btn btn-primary" onClick={saveFunct}>Save!</button>
            </div>
        </div>
        );
}
export default NewNote;