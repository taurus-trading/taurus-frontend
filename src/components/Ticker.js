import React, { Component } from 'react'
import { getTrending } from '../utils/api-utils.js'

export default class Ticker extends Component {
    state = {
        trending: [],
    }
    componentDidMount = async () => {
        const trendingResponse = await getTrending();
        this.setState({ trending: trendingResponse.symbols })
    }

    render() {
        return (
            <>
                {
                   this.state.trending.map(trendingItem => {
                    return <li key={trendingItem.symbol} className='ticker-item'><span className='sym'>{trendingItem.symbol}</span><br/><span>{trendingItem.title}</span>
                   
                    </li>
                }) 
                }
            </>
        )
    }
}