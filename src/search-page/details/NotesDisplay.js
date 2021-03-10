import React, { Component } from 'react'
import NotesItem from './NotesItem.js';
import NotesInput from './NotesInput.js';
import { getUserNotes, createNote } from '../../utils/user-utils';

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
        //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksImlhdCI6MTYxNTQwMTQ1MH0.w22bAzZKgzYIhQ0HlWhJDzX-r8pZ4ZZ1gX8FmRgj0eg
        return (
            <div>
                <NotesInput noteInput={this.state.noteInput} handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange} />
                <ul>
                    {
                    this.state.userNotes.map(note => <NotesItem key={note.text} userEntry={note.text} />)
                    }
                </ul>
            </div>
        )
    }
}