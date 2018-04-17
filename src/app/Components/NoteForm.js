import React from "react";

export default class NoteForm extends React.Component{
  
    render(){
        return(
        <div className="container stickynote">
         <br/>
            <div className="row">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Title!" aria-label="Title!" aria-describedby="basic-addon1"></input>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col">
                    <textarea className="form-control" aria-label="With textarea"></textarea>
                    <br/>
                </div>
                
            </div>
        </div>
        );

    }
}