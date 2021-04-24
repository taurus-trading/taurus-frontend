import React, { Component } from 'react'
import NotesItem from './NotesItem.js';
import NotesInput from './NotesInput.js';
import { getUserNotes, createNote } from '../../utils/user-utils';
import './note.css';

export default class NoteDisplay extends Component {
    state = {
        userNotes: [],
        noteInput: ''
    }

    componentDidMount = async () => {
        await this.setUserNotes();

        console.log(this.state.userNotes)
    }

    handleInputChange = async (e) => {
        this.setState({ noteInput: e.target.value });
    }

    setUserNotes = async () => {
        // get usernotes from database
        const notes = await getUserNotes(this.props.token)
        // set usernotes in state
        this.setState({ userNotes: notes });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log('submitted ' , this.state.noteInput, this.props.token)
        await createNote(this.props.token, this.state.noteInput);

        const notes = await getUserNotes(this.props.token);

        this.setState({ userNotes: notes });
    }

    render() {
        return (
            <div className="notes-section moduleStyle">
                <h3>My Notes</h3>
                <NotesInput noteInput={this.state.noteInput} handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange} />
                <div className="notes-div">
                    {
                    this.state.userNotes.map(note => 
                        <NotesItem
                            setUserNotes={this.setUserNotes}
                            key={note.id}
                            userEntry={note.text}
                            token={this.props.token}
                            userNote={note} />)
                    }
                </div>
            </div>
        )
    }
}