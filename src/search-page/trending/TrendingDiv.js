import React, { Component } from 'react'
import TrendingLI from './TrendingLI.js';

export default class TrendingDiv extends Component {

    render() {
        const trendingList = this.props.trendingList.map(trendingItem => {
            return (
                <TrendingLI 
                key={trendingItem.symbols.id}
                symbol= {trendingItem.symbols.symbol}
                Name= {trendingItem.symbols.title} 
                />

            )
        })
        return (
            <div>
                <ul>
                   {trendingList}
                </ul>
            </div>
        )
    }
}
