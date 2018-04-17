import React from "react";
import ViewNote from "./ViewNote.js"
/*
export default class ViewAllNotes extends React.Component{

    render(){
        return(
        <div className="container">
            <div className="row">
                {this.props.notesData.map((item,index)=>{
                    return <ViewNote title={item.title} description={item.description} key={index}/>;
                    
                })
                }
                <br/>
            </div>
        </div>
        );

    }
}*/

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