import React, { Component } from 'react'
import TweetItem from './TweetItem.js';


export default class TweetsDiv extends Component {
    render() {
        return (
            // just my opinion--this feels easier to read to me
            <ul>
                { this.props.tweets.map(tweet => {
                    let sentimentTest = '';
                    let chartTest = '';

                    if(tweet.entities.sentiment)sentimentTest = tweet.entities.sentiment.basic;
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
                })} 
            </ul>
        )
    }
}