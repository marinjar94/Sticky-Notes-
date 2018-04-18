import React from "react";

export default class NoteForm extends React.Component{
  constructor(props){
      super(props);
  }
    render(){
        return(
        <div className="container stickynote">
         <br/>
            <div className="row">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Title!" aria-label="Title!" aria-describedby="basic-addon1" onChange={this.props.inputFunc}></input>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col">
                    <textarea className="form-control" aria-label="With textarea" onChange={this.props.textareaFunc}></textarea>
                    <br/>
                </div>
                
            </div>
        </div>
        );

    }
}