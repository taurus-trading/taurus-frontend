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
        step1: '',
        step2: '',
    }

    componentDidMount = async () => {

        const trendingListOfStocks = await getTrending();
        this.setState({step1: true});
        this.setState({step2: false});
        this.setState({trending: trendingListOfStocks.symbols})
    }
    handleSubmit = async(symbol, title) => {

        await addToWatchList(this.props.token, symbol, title);
        if(this.state.step1 === true){
            this.setState({step1: false})
            this.setState({step2: true})
        }
        console.log(this.state);
        alert('clicked')
    }

    render() {
        console.log(this.state)
        return (
            <div className='new-user-wrapper'>
                <p className={`${this.state.step1} what`}>
                    Please select click on a stock to add it to your watchlist. <br/>
                </p>
                {/* <p className={`${this.state.step2} why`}>
                    Any stock added to your watchlist or favorites will allow you to view a chart of that stock's price history
                </p> */}
                <div className='trending-list'>
                    <TrendingDiv 
                    trendingList={this.state.trending}
                    onClick={this.handleSubmit}
                    />
                </div>
                <div className='advice'>
                    <h1>Beginner Advice</h1>
                    <StockAdvice />
                </div>
            </div>
        )
    }
}
