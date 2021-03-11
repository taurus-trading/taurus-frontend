import React, { Component } from 'react'

export default class TrendingLI extends Component {
    render() {
    
        return (

                <div className='trending-item'>
                    <p className='symbol'>{this.props.symbol}</p>
                    <p className='title'>{this.props.title}</p>
                    {/* <button value={this.props.value} onClick={()=>this.props.handleSubmit(this.props.symbol, this.props.title)}>Add to Watchlist</button> */}
                </div>

        )
    }
}
