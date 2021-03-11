import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import  { IconButton }  from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

export default class NotesInput extends Component {
    render() {
        const iconStyle = {
            color: 'blue',
            height: 40,
            width: 40,

        }
        return (
            <div>
                <form onSubmit={this.props.handleSubmit} className="input-div">
                {/*
                <input value={this.props.noteInput} type="textarea" onChange={this.props.handleInputChange} />
                */}
                    <TextField
                        label="type in a new note..."
                        value={this.props.noteInput}
                        onChange={this.props.handleInputChange}
                        margin="normal"
                        fullWidth
                    />
                    <IconButton type="submit" style={iconStyle} onClick={this.handleAddToFavs}><AddCircleOutlineIcon/></IconButton>
                </form>
            </div>
        )
    }
}