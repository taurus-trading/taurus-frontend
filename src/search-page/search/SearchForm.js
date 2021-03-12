import React, { Component } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import InputAdornment from '@material-ui/core/InputAdornment';



export default class SearchForm extends Component {
    state = {
        query: ''
    }
    handleInputChange = (e) => {
        this.setState({
            query: e.target.value,
        })
    }
    submitHandler = (e) => {
        e.preventDefault()
        this.props.handleSearchSubmit(this.state.query);
    }
    render() {

        return (
            <div className="searchForm">
                <form onSubmit={this.submitHandler}>
                    
                        {/* Search for a ticker: 
                        <input type="text" value={this.state.query} onChange={this.handleInputChange}/> */}
                        <TextField
                            label="Search for a stock"
                            value={this.state.query}
                            onChange={this.handleInputChange}
                            margin="normal"
                            // fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <MonetizationOnOutlinedIcon  color="primary"/>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    
                    <IconButton type="submit" color="primary"> <SearchIcon /> </IconButton>
                </form>
            </div>
        )
    }
}