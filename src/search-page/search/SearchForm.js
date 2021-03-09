import React, { Component } from 'react'

export default class SearchForm extends Component {
    render() {
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
        return (
            <div>
                <form>
                    <label>
                        Search for a ticker: 
                        <input type="text" value={this.state.query} onChange={this.handleInputChange}/>
                    </label>
                    <button onSubmit={this.submitHandler}>Search</button>
                </form>
            </div>
        )
    }
}