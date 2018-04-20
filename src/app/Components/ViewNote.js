import React from "react";

const ViewNote = ({singleNoteData,position,deleteNote})=>{
    return(
        <div className="container stickynote fadeIn">
        <br/>
                <div className="row justify-content-end">
                <button className="btn btn-danger" onClick={(e)=>{deleteNote(position)}}>X</button>
                </div>
                <div className="row justify-content-center">    
                    <h1>{singleNoteData.title}</h1>
                </div>
                <div className="row justify-content-center">    
                    <p>{singleNoteData.description}</p>
                </div>      
        </div>
        );
}

export default ViewNote;