import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import TrendingDiv from './TrendingDiv.js';
import StockAdvice from './StockAdvice.js';
import {getTrending} from '../utils/api-utils.js';
import { addToWatchList, deleteFromWatchList, getUserWatchList } from '../utils/user-utils.js';
import './newuser.css';

export default class NewUserPage extends Component {
    state= {
        trending: [],
        symbol:'',
        title: '',
        onScreen: '',
    }

    componentDidMount = async () => {
        const trendingListOfStocks = await getTrending();
        this.setState({onScreen: true});
        this.setState({trending: trendingListOfStocks.symbols})
    }
    handleSubmit = async(symbol, title) => {
        const watch = await getUserWatchList(this.props.token);
        const match = watch.find(item => item.symbol === symbol);
        match? await  deleteFromWatchList(this.props.token, match.id) : 
        await addToWatchList(this.props.token, symbol, title)
        
        // await addToWatchList(this.props.token, symbol, title);

        if(this.state.onScreen === true){
            this.setState({onScreen: false})
        }
        alert('clicked')
    }

    render() {
        console.log(this.state)
        return (
            <>
                <p className={`${this.state.onScreen}-what what`}>
                    Please click on a stock to add it to your watchlist. <br/>
                </p>
                <p className={`${this.state.onScreen}-why why`}>
                    <Link to='/dashboard'  style={{ textDecoration: 'none', color:'white'}}>Great job! Click here to go to your Dashboard</Link>
                </p>
            <div className='new-user-wrapper'>
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
            </>
        )
    }
}
