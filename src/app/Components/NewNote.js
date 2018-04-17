import React from "react";
import NoteForm from "./NoteForm.js";

/*export default class NewNote extends React.Component{
  
    constructor(props){
        super(props);
    }
    render(){
        return(
        <div className="container fadeIn">
         <br/>
            <div className="row">
            <NoteForm/>
            
            <button className="btn btn-primary" onClick={this.props.saveFunct}>Save!</button>
            </div>
        </div>
        );

    }
}*/


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