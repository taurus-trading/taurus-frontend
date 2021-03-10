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

    handleInputChange = (e) => {
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

        await createNote(this.props.token, this.state.noteInput);
    }

    render() {
        return (
            <div>
                <NotesInput noteInput={this.state.noteInput} handleInputChange={this.handleInputChange} />
                <ul>
                    {
                    this.state.userNotes.map(note => <NotesItem userEntry={note.text} />)
                    }
                </ul>
            </div>
        )
    }
}