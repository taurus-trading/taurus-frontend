import React, { Component } from 'react'

export default class TrendingLI extends Component {
    render() {
    
        return (
            <div>
                <li>
                    <p>Symbol: {this.props.symbol}</p>
                    <p>Name: {this.props.name}</p>
                </li>
            </div>
        )
    }
}
