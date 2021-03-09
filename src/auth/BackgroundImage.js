import React, { Component } from 'react';
import video from './stock_exchange.mp4';

export default class BackgroundImage extends Component {
    render() {
        return (
            <div>
                <video autoPlay loop muted id='video'>
                    <source src={video} type='video/mp4' />
                </video>
            </div>
        )
    }
}
