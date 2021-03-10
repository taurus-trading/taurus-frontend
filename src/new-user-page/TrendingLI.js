import React, { Component } from 'react'

export default class TrendingLI extends Component {
    render() {
    
        return (
            <div className='trending-item'>
                <li className='trending-li'>
                    <p>Symbol: {this.props.symbol}</p>
                    <p>Name: {this.props.title}</p>
                    <button value={this.props.value} onClick={()=>this.props.handleSubmit(this.props.symbol, this.props.title)}>Add to Watchlist</button>
                </li>
            </div>
        )
    }
}
