import React, { Component } from 'react'

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
            <div>
                <form onSubmit={this.submitHandler}>
                    <label>
                        Search for a ticker: 
                        <input type="text" value={this.state.query} onChange={this.handleInputChange}/>
                    </label>
                    <button >Search</button>
                </form>
            </div>
        )
    }
}