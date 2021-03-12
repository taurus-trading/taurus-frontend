import React, { Component } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import  { IconButton }  from '@material-ui/core';


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
                    <label>
                        Search for a ticker: 
                        <input type="text" value={this.state.query} onChange={this.handleInputChange}/>
                    </label>
                    <IconButton type="submit" color="primary"> <SearchIcon/> </IconButton>
                </form>
            </div>
        )
    }
}