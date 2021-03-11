import React, { Component } from 'react'
import TweetItem from './TweetItem.js';


export default class TweetsDiv extends Component {

    render() {
        const tweetLI = this.props.tweets.map(tweet => {
            let sentimentTest = '';
            if(tweet.entities.sentiment)sentimentTest = tweet.entities.sentiment.basic;
            let chartTest = '';
            if(tweet.entities.chart)chartTest = tweet.entities.chart.url;
            return (
                <TweetItem
                key={tweet.id} 
                username={tweet.user.username}
                name={tweet.user.name}
                sentiment={sentimentTest}
                avatar_url={tweet.user.avatar_url}
                symbol={this.props.symbol}
                message={tweet.body}
                image={chartTest} 
                />
            )
        })
        return (
            <ul>
                {tweetLI}
            </ul>
        )
    }
}