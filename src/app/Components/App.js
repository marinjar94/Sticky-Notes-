import React from "react";
import NewNote from "./NewNote.js"
import ViewAllNotes from "./ViewAllNotes.js";
export default class App extends React.Component{
    constructor(){
        super();
        this.state = {notes:[],isWriting:false, isViewing:true}
        this.changeToWrite = this.changeToWrite.bind(this);
        this.changeToView = this.changeToView.bind(this);
        this.saveNote=this.saveNote.bind(this);
        this.deleteNote=this.deleteNote.bind(this);
    }

    changeToWrite(e){
        this.setState({isWriting:true, isViewing:false})
    }

    changeToView(e){
        this.setState({isWriting:false, isViewing:true})
    }

    saveNote(tempTitle,tempDescription){
        var stateArray=this.state.notes;
        if(tempTitle!=="" && tempDescription!==""){
            var tempObject = {title:tempTitle, description:tempDescription};
            stateArray.push(tempObject);
            this.setState({notes:stateArray,isWriting:false, isViewing:true});
            window.alert("SAVED NOTE");
        }else{
            window.alert("shupalapashala");
        }
    }

    deleteNote(currentIndex){
        
    var stateArray=this.state.notes;
    
    var newArray=stateArray.filter((el,index)=>{
        return index!==currentIndex;
    })
    this.setState({notes:newArray,isWriting:false,isViewing:true});
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
                    {this.state.isWriting?<NewNote saveFunc={this.saveNote}/>:null}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {this.state.isViewing?<ViewAllNotes notesData={this.state.notes} deleteNote={this.deleteNote}/>:null}
                </div>
            </div>
        </div>
        );

    }
}