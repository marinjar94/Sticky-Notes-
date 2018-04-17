import React from "react";

const ViewNote = ({singleNoteData})=>{
    return(
        <div className="container stickynote fadeIn">
        <br/>
            <div className="row">    
                    <h1>{singleNoteData.title}</h1>
            </div>
            <div className="row">    
                    <p>{singleNoteData.description}</p>
            </div>
        </div>
        );
}

export default ViewNote;