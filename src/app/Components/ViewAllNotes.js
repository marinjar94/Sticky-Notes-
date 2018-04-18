import React from "react";
import ViewNote from "./ViewNote.js"


const ViewAllNotes = ({notesData})=>{
    if(notesData.length>0){
        return(
            <div className="container .fadeIn">
            <br/>
                <div className="row">
                <br/>
                    {   
                   
                        notesData.map((note,index)=>{
                            return <ViewNote singleNoteData={note} key={index}/>;
                        })
                    }
                    
                </div>
            </div>
            );
    }else{
        return(
            <div className="container .fadeIn">
            <br/>
                <div className="row">
                <br/>
                    <div className="Col">
                        <h1>No Sticky Notes, please add em</h1>
                        <p>pls</p>
                    </div>
                </div>
            </div>
            );
    }
   
}
export default ViewAllNotes;