import React from "react";

const NoteForm =({changeInput,changeTextarea})=>{
    return(
        <div className="container stickynote">
         <br/>
            <div className="row">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Title!" aria-label="Title!" aria-describedby="basic-addon1" onChange={changeInput}></input>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col">
                    <textarea className="form-control" onChange={changeTextarea}></textarea>
                    <br/>
                </div>
                
            </div>
        </div>
        );
}

export default NoteForm;