import React, { Component } from 'react';
import './dashboard.css';
import StockGraph from './chart/Graph.js';
import NoteDisplay from './details/NotesDisplay.js';
import TweetsDiv from './social/TweetsDiv.js';
import './social.css';
import { getTwits} from '../utils/api-utils.js';
import LeftSidebar from './LeftSideBar/LeftSidebar.js';
import { getUserNotes } from '../utils/user-utils.js';
// import hardTweets from './hard-coded-tweets.js'
//import TrendingDiv from './trending/TrendingDiv.js';


export default class Dashboard extends Component {


    state = {
        ticker: 'TSLA',
        token: '',
        tweets: [],
        trending: [],
        timer: null,
        notes: [], 
        error: '',
    }

    componentDidMount = async () => {
        // this.setState({timer: setInterval(async() => {
        //     const tweetStream = await getTwits(this.state.ticker)

        //     this.setState({tweets: tweetStream.messages})
        // }, 10000)})

        const staticTweets = await getTwits(this.state.ticker)
        this.setState({ tweets: staticTweets.messages })

        const userNotes = await getUserNotes(this.props.token);
        this.setState({ userNotes: userNotes });

    }

    // componentWillUnmount = () => {
    //     clearInterval(this.state.timer);
    // }
    handleStockSelect = async (ticker) => {

        try {
            const staticTweets = await getTwits(ticker)
            await this.setState({
                ticker: ticker,
                tweets: staticTweets.messages,
                error: '',
            })
            console.log(`this is ticker in dashboard ${this.state.ticker}`);
        }
        catch(e){
            this.setState({
                error: e.response.body.error,
                tweets: [],
            })
            
        }

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
                        token={this.props.token}
                    />

                </div>

                <div className='tweet-div'>
                    <h2>Live Feed</h2>
                    {
                    this.state.error && <h3 style={{ color: 'red'}}>{this.state.error}</h3>
                     }
                    <TweetsDiv
                        tweets={this.state.tweets}
                        symbol={this.state.ticker}
                    />
                </div>

            </div>
        )
    }
}