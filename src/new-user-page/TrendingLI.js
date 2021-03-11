import React, { Component } from 'react'

export default class TrendingLI extends Component {
    render() {
    
        return (

                <div className='trending-item' onClick={()=>this.props.onClick(this.props.symbol, this.props.title)}>
                    <p className='symbol'>{this.props.symbol}</p>
                    <p className='title'>{this.props.title}</p>
                   
                </div>

        )
    }
}
