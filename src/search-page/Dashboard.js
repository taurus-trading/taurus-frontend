import React, { Component } from 'react'
import SearchSection from './search/SearchSection.js';
import Favorites from './favorites/Favorites.js'
import StockGraph from './chart/Graph.js';
import NoteDisplay from './details/NotesDisplay.js';
import TweetsDiv from './social/TweetsDiv.js';
import './social.css';
import { getTwits, getTrending } from '../utils/api-utils.js';
//import TrendingDiv from './trending/TrendingDiv.js';
 

export default class Dashboard extends Component {


    state= {
        ticker: 'GME',
        token: '',
        tweets:[],
        trending: [],
        timer: null,
    }

    componentDidMount = async () => {
        // this.setState({timer: setInterval(async() => {
        //     const tweetStream = await getTwits(this.state.ticker)

        //     this.setState({tweets: tweetStream.messages})
        // }, 10000)})

        const staticTweets = await getTwits(this.state.ticker)
        this.setState({tweets: staticTweets.messages})

        const trending = await getTrending();
        this.setState({trending})
       
    }
    
    componentWillUnmount = () => {
        clearInterval(this.state.timer);
    }
    render() {
        console.log(this.state.trending);

        return (
            <>
            <div>
                <SearchSection
                
                search section
                ticker={this.state.ticker}


                />
                
                <Favorites 

                favorites section
                token={this.state.token}


                />

            </div>
            <div>
                <StockGraph 

                graph section
                ticker={this.state.ticker}


                />

                <NoteDisplay 
                notes section
                
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

            </>
        )
    }
}