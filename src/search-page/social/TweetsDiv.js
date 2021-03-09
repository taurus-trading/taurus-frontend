import React, { Component } from 'react'
import TweetItem from './TweetItem.js';

export default class TweetComponent extends Component {
    render() {

        const tweetLI = this.props.tweets.map(tweet => {
            return (
                <TweetItem
                key={tweet.id} 
                username={tweet.user.username}
                name={tweet.user.name}
                avatar_url={tweet.user.avatar_url}
                symbol={this.props.symbol}
                message={tweet.body}
                image='https://charts.stocktwits.com/production/original_301242987.png'
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