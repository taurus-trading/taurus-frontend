import React, { Component } from 'react'

export default class TrendingLI extends Component {
    render() {
    
        return (
            <div className='trending-item'>
                <li>
                    <p>Symbol: {this.props.symbol}</p>
                    <p>Name: {this.props.title}</p>
                    <button onClick={this.props.handleSubmit}>Add to Watchlist</button>
                </li>
            </div>
        )
    }
}
