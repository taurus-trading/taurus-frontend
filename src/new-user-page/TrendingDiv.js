import React, { Component } from 'react'
import TrendingLI from './TrendingLI.js';

export default class TrendingDiv extends Component {
    render() {
        const trending = this.props.trendingList.map(trendingItem => {
            return (
                <TrendingLI 
                key={trendingItem.id}
                symbol= {trendingItem.symbol}
                title= {trendingItem.title}
                value= {trendingItem.symbol}
                onClick = {this.props.onClick} 
                />

            )
        })
        return (
     
                <>
                   {trending}
                </>

        )
    }
}
