import React, { Component } from 'react'
import Ticker from './Ticker.js'

export default class TickerMarquee extends Component {
    render() {
        return (
            <div>
                <ul className='ticker-list'>

                <Ticker />
                </ul>
            </div>
        )
    }
}
