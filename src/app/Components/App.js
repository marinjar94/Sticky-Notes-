import React from "react";
import NewNote from "./NewNote.js"
import ViewAllNotes from "./ViewAllNotes.js";
export default class App extends React.Component{
    constructor(){
        super();
        this.state = {notes:[],tempTitle:"",tempDescription:"",isWriting:false, isViewing:true}
        this.changeToWrite = this.changeToWrite.bind(this);
        this.changeToView = this.changeToView.bind(this);
        this.saveNote=this.saveNote.bind(this);
        this.changeInput=this.changeInput.bind(this);
        this.changeTextarea=this.changeTextarea.bind(this);
    }

    changeToWrite(e){
        this.setState({isWriting:true, isViewing:false})
    }

    changeToView(e){
        this.setState({isWriting:false, isViewing:true})
    }

    saveNote(){
        var stateArray=this.state.notes;
        if(this.state.tempTitle!=="" && this.state.tempDescription!==""){
            var tempObject = {title:this.state.tempTitle, description:this.state.tempDescription};
            stateArray.push(tempObject);
            this.setState({notes:stateArray,tempTitle:"",tempDescription:"",isWriting:false, isViewing:true});
            window.alert("SAVED NOTE");
        }else{
            window.alert("shupalapashala");
        }
    }

    changeInput(e){
        this.setState({tempTitle:e.target.value})
    }

    changeTextarea(e){
        this.setState({tempDescription:e.target.value})
    }

    render(){
        return(
        <div className="container-fluid">
            <div className="row align-items-start">
                <div className="col-lg-1">
                    <button className="btn btn-success" onClick={this.changeToWrite}>Add notes</button>
                </div>
                <div className="col-lg-1 offset-lg-1">
                    <button className="btn btn-info" onClick={this.changeToView}>View Note</button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {this.state.isWriting?<NewNote saveFunc={this.saveNote} inputFunc={this.changeInput} textareaFunc={this.changeTextarea}/>:null}
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