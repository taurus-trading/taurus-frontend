import React, { Component } from 'react';
import  { IconButton }  from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { deleteNote } from '../../utils/user-utils';

export default class NotesItem extends Component {
    state = {
        token: this.props.token,
        id: ''
    }

    handleDelete = async(e) => {
        e.preventDefault();

        await deleteNote(this.props.token, this.props.userNote.id)
        await this.props.setUserNotes();
    }
    
    render() {
        const iconStyle = {
            color: 'red',
            height: 40,
            width: 40,
        }
        return (
            <div className="note-item">
                <p>{this.props.userEntry}</p>
                <span className="delete-button">
                    <IconButton value={this.props.userEntry.id} style={iconStyle} onClick={this.handleDelete}><DeleteOutlineIcon/></IconButton>
                </span>
            </div>
        )
    }
}