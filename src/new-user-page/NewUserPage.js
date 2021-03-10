import React, { Component } from 'react'
import TrendingDiv from './TrendingDiv.js';
import StockAdvice from './StockAdvice.js';
import {getTrending} from '../utils/api-utils.js';
import { addToWatchList } from '../utils/user-utils.js';
import './newuser.css';

export default class NewUserPage extends Component {

    state= {
        trending: [],
        symbol:'',
        title: '',
    }

    componentDidMount = async () => {

        const trendingListOfStocks = await getTrending();
        this.setState({trending: trendingListOfStocks.symbols})
    }
    handleSubmit = async(symbol, title) => {

        await addToWatchList(this.props.token, symbol, title);
        alert('clicked')
    }
    render() {
        console.log(this.state)
        return (
            <div className='new-user-wrapper'>
                <div className='trending-list'>
                    <TrendingDiv 
                    trendingList={this.state.trending}
                    handleSubmit={this.handleSubmit}
                    />
                </div>
                <div className='advice'>
                    <StockAdvice />
                </div>
            </div>
        )
    }
}
