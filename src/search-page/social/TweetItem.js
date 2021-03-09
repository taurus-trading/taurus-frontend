import React, { Component } from 'react'

export default class TweetItem extends Component {
    render() {
        return (
            <div className='tweet-item'>
                <li>
                    <p>username: {this.props.username}</p>
                    <p>name: {this.props.name}</p>
                    <img src={this.props.avatar_url} alt='username'     className='avatar'/>
                    <p>symbol: {this.props.symbol}</p>
                    <p>{this.props.message}</p>
                    {
                        this.props.image &&
                        <img src={this.props.image} alt='stock-chart'   className='tweet-image'/>
                    }
               
                </li>
            </div>
        )
    }
}