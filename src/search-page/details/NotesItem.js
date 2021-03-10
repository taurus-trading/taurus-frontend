import React, { Component } from 'react';

export default class NotesItem extends Component {
    
    render() {
        return (
            <div className="note-item">
                <p>{this.props.userEntry}</p>
            </div>
        )
    }
}