import React, { Component } from 'react'

export default class TweetItem extends Component {
    render() {
        return (
            <div className='tweet-item'>
                <li>
                    <div className="userAccount">
                        <img src={this.props.avatar_url} alt='username' className='avatar' />
                        <p className='username'>{this.props.username}</p>
                    </div>  

                    { this.props.sentiment && <p>{this.props.sentiment}</p> }

                    <p>{this.props.message}</p>
                    
                    {
                        this.props.image &&
                        <img src={this.props.image} alt='stock-chart' className='tweet-image' />
                    }

                </li>
            </div>
        )
    }
}