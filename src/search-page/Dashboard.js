import React, { Component } from 'react';
import './dashboard.css';
import StockGraph from './chart/Graph.js';
import NoteDisplay from './details/NotesDisplay.js';
import TweetsDiv from './social/TweetsDiv.js';
import './social.css';
import { getTwits} from '../utils/api-utils.js';
import LeftSidebar from './LeftSideBar/LeftSidebar.js';
// import hardTweets from './hard-coded-tweets.js'
//import TrendingDiv from './trending/TrendingDiv.js';


export default class Dashboard extends Component {


    state = {
        ticker: 'GME',
        token: '',
        tweets: [],
        trending: [],
        timer: null,
    }

    componentDidMount = async () => {
        // this.setState({timer: setInterval(async() => {
        //     const tweetStream = await getTwits(this.state.ticker)

        //     this.setState({tweets: tweetStream.messages})
        // }, 10000)})

        const staticTweets = await getTwits(this.state.ticker)
        this.setState({ tweets: staticTweets.messages })

    }

    componentWillUnmount = () => {
        clearInterval(this.state.timer);
    }
    handleStockSelect = async (ticker) => {
        const staticTweets = await getTwits(ticker)
        this.setState({
            ticker: ticker,
            tweets: staticTweets.messages
        })
    }
    render() {
        return (
            <div className="dashboard">
                <LeftSidebar 
                token={this.props.token}
                handleStockSelect = {this.handleStockSelect}
                />

                <div>
                    <StockGraph ticker={this.state.ticker}/>

                    <NoteDisplay
                        notes section


                />

                <NoteDisplay 
                token={this.state.token}
                
                />
                {/* <TrendingDiv 
                    />
                    {/* <TrendingDiv 
                trendingList={this.state.trending}
                // symbol={this.props.trending}
                // name={this.props.trending}
                /> */}
                </div>


                <div className='tweet-div'>
                    <h2>Live Feed</h2>
                    <TweetsDiv
                        tweets={this.state.tweets}
                        symbol={this.state.ticker}
                    />
                </div>

            </div>
        )
    }
}