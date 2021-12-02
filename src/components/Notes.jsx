import React from "react";
import CreateArea from "./CreateArea";
import Note from "./Note";


class Notes extends React.Component{
    constructor() {
        super();
        this.state = {
            notes: [],
            index: 0
        }
    }

    handleDeleteNote = (id) => {
        this.setState(prevState => ({
            notes: prevState.notes.filter((noteItem, index) => {
                index++;
                return index !== id;
            })
        }));
    }


    handleNoteAdd = newNote => {
        this.setState(prevState =>({
            notes: [...prevState.notes, newNote],
        })
        );
    }

      

    render() {
        return (
            <div className="notes" >
                <CreateArea onNoteAdd={this.handleNoteAdd}/>
        {this.state.notes.map((note, index) => {
            index++;
            return (
              <Note
                titel={note.titel}
                notep={note.notep}
                id={index}
                onDelete={this.handleDeleteNote}
              />
        )})}
        </div>
        )
    }

}


export default Notes;