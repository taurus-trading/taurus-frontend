import React, { Component } from 'react'
import {getTrending, getCurrentStockPrice} from '../utils/api-utils.js'

export default class Ticker extends Component {
    state = {
        trending: [],
    }
    componentDidMount = async () => {
        const trendingResponse = await getTrending();
        console.log(trendingResponse.symbols);

        this.setState({trending: trendingResponse.symbols})
    }

    render() {
    //    const item = this.state.trending.map(trendingItem => {
    //         return <li><span>{trendingItem.symbol}</span><span>{trendingItem.title}</span></li>
    //     })
        return (
            <>
                {
                   this.state.trending.map(trendingItem => {
                    return <li className='ticker-item'><span>{trendingItem.symbol}</span><br/><span>{trendingItem.title}</span>
                    {/* <span>{getCurrentStockPrice(trendingItem.symbol)}</span> */}
                    </li>
                }) 
                }
            </>
        )
    }
}