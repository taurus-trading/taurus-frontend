import React, { Component } from 'react'

export default class NotesInput extends Component {
    render() {
        return (
            <div className="notes-section">
                <form onSubmit={this.props.handleSubmit}>
                    <input value={this.props.noteInput} type="textarea" onChange={this.props.handleInputChange} />
                    <button>Add Note</button>
                </form>
            </div>
        )
    }
}