import React, { Component } from 'react';
import  { IconButton }  from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

export default class NotesItem extends Component {
    
    render() {
        const iconStyle = {
            color: 'red',
            height: 40,
            width: 40,
        }
        return (
            <div className="note-item">
                <p>{this.props.userEntry}</p>
                <IconButton style={iconStyle} onClick={this.handleDelete}><DeleteOutlineIcon/></IconButton>
            </div>
        )
    }
}