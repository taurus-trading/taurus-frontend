import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';

export default class NotesInput extends Component {
    render() {
        return (
            <div className="notes-section">
                <form onSubmit={this.props.handleSubmit}>
                {/*
                <input value={this.props.noteInput} type="textarea" onChange={this.props.handleInputChange} />
                */}
                    <TextField
                        label="type in a new note..."
                        value={this.props.noteInput}
                        onChange={this.props.handleInputChange}
                        margin="normal"
                    />
                    <button>Add Note</button>
                </form>
            </div>
        )
    }
}