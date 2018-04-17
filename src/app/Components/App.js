import React from "react";
import NewNote from "./NewNote.js"
import ViewAllNotes from "./ViewAllNotes.js";
export default class App extends React.Component{
    constructor(){
        super();

        this.state = {notes:[], isWriting:false, isViewing:false}
        this.changeToWrite = this.changeToWrite.bind(this);
        this.changeToView = this.changeToView.bind(this);
        this.saveNote=this.saveNote.bind(this);
    }

    changeToWrite(e){
        this.setState({isWriting:true, isViewing:false})
    }

    changeToView(e){
        this.setState({isWriting:false, isViewing:true})
    }

    saveNote(){
        var stateArray=this.state.notes;
        console.log("kek, im in danger");
        var titleInput=document.querySelector("input");
        var descriptionInput=document.querySelector("textarea");
        if(titleInput.value!=="" && descriptionInput.value!==""){
        var tempObject = {title:titleInput.value, description:descriptionInput.value};
        stateArray.push(tempObject);
        this.setState({notes:stateArray});
        titleInput.value="";
        descriptionInput.value="";
        window.alert("SAVED NOTE");
        }else{
            window.alert("shupalapashala");

        }
    }

    render(){
        return(
        <div className="container-fluid">
            <div className="row align-items-start">
                <div className="col-lg-1">
                <button className="btn btn-success" onClick={this.changeToWrite}>Add notes</button>
                </div>
                <div className="col-lg-1 offset-lg-1">
                {this.state.notes.length>0?<button className="btn btn-info" onClick={this.changeToView}>View notes</button>:null}
                </div>
            </div>
            <div className="row">
                <div className="col">
                {this.state.isWriting?<NewNote saveFunct={this.saveNote}/>:null}
                </div>
            </div>
            <div className="row">
                <div className="col">
                {this.state.isViewing?<ViewAllNotes notesData={this.state.notes}/>:null}
                </div>
            </div>
        </div>
        );

    }
}