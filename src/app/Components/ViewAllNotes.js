import React from "react";
import ViewNote from "./ViewNote.js"

const ViewAllNotes = ({notesData})=>{
    return(
        <div className="container .fadeIn">
        <br/>
            <div className="row">
            <br/>
                {notesData.map((note,index)=>{
                    return <ViewNote singleNoteData={note} key={index}/>;
                })
                }
                
            </div>
        </div>
        );
}
export default ViewAllNotes;