import React from "react";

/*
export default class ViewNote extends React.Component{
  
    render(){
        return(
        <div className="container stickynote fadeIn">
        <br/>
            <div className="row">    
                    <h1>{this.props.title}</h1>
            </div>
            <div className="row">    
                    <p>{this.props.description}</p>
            </div>
        </div>
        );

    }
}*/

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