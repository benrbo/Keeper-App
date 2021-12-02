import React from "react";

export default class CreateArea extends React.Component {
    constructor() {
        super();
        this.state = {
            titel: '',
            notep:'',

        }
      }

    handleTextChange = (event) => {
        this.setState({ notep: event.target.value });
      };

      handleTitelChange = (event) => {
        this.setState({ titel: event.target.value });
      };


      handleNoteAdd = (event) => {
        event.preventDefault();
        var newNote = {
          titel: this.state.titel,
          color: this.state.color,
          notep: this.state.notep,
        };


        this.props.onNoteAdd(newNote);
        this.setState({ titel: '' });
        this.setState({ notep: '' });
      };

    render() {
        return (
            <form className="create-note">
            <textarea rows="1" columns="1" maxLength="100" placeholder="Enter your note titel..." className="create-note textarea" value={this.state.titel} onChange={this.handleTitelChange}/>
            <textarea rows="10" columns="27" maxLength="500" placeholder="Enter your note here..." className="create-note textarea" value={this.state.notep} onChange={this.handleTextChange}/>
            <button onClick={this.handleNoteAdd}>+</button>
            </form>
        )
    }
}
