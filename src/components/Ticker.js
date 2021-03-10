import React, { Component } from 'react'
import { getTrending } from '../utils/api-utils.js'

export default class Ticker extends Component {
    state = {
        trending: [],
    }
    componentDidMount = async () => {
        const trendingResponse = await getTrending();
<<<<<<< HEAD
        this.setState({trending: trendingResponse.symbols})
=======
        this.setState({ trending: trendingResponse.symbols })
>>>>>>> 4c78b529b471dfc31b5b0df9a4d888459679a28d
    }

    render() {
        //    const item = this.state.trending.map(trendingItem => {
        //         return <li><span>{trendingItem.symbol}</span><span>{trendingItem.title}</span></li>
        //     })
        return (
            <>
                {
<<<<<<< HEAD
                   this.state.trending.map(trendingItem => {
                    return <li key={trendingItem.symbol} className='ticker-item'><span className='sym'>{trendingItem.symbol}</span><br/><span>{trendingItem.title}</span>
                   
                    </li>
                }) 
=======
                    this.state.trending.map(trendingItem => {
                        return <li className='ticker-item'><span>{trendingItem.symbol}</span><br /><span>{trendingItem.title}</span>
                            {/* <span>{getCurrentStockPrice(trendingItem.symbol)}</span> */}
                        </li>
                    })
>>>>>>> 4c78b529b471dfc31b5b0df9a4d888459679a28d
                }
            </>
        )
    }
}