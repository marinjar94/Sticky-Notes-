import React from "react";
import NoteForm from "./NoteForm.js";

const NewNote = ({saveFunc,inputFunc,textareaFunc})=>{
    return(
        <div className="container fadeIn">
         <br/>
            <div className="row">
                <NoteForm inputFunc={inputFunc} textareaFunc={textareaFunc}/>
                <button className="btn btn-primary" onClick={saveFunc}>Save!</button>
            </div>
        </div>
        );
}
export default NewNote;