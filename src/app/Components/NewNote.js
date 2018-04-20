import React from "react";
import NoteForm from "./NoteForm.js";

export default class NewNote extends React.Component{
    constructor(props){
        super(props);
        this.state = {tempTitle:"",tempDescription:""}  
        this.changeInput=this.changeInput.bind(this);
        this.changeTextarea=this.changeTextarea.bind(this);
    }
  
    changeInput(e){
      this.setState({tempTitle:e.target.value})
    }
  
    changeTextarea(e){
      this.setState({tempDescription:e.target.value})
    }

    render(){
          return(
            <div className="container fadeIn">
            <br/>
               <div className="row">
                   <NoteForm changeInput={this.changeInput} changeTextarea={this.changeTextarea}/>
                   <button className="btn btn-primary" onClick={(e)=>this.props.saveFunc(this.state.tempTitle,this.state.tempDescription)}>Save!</button>
               </div>
           </div>
           );
  
      }
    }