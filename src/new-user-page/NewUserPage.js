import React, { Component } from 'react'
import TrendingDiv from './TrendingDiv.js';
import {getTrending} from '../utils/api-utils.js'

export default class NewUserPage extends Component {

    state= {
        trending: [],
    }

    componentDidMount = async () => {

        const trendingListOfStocks = await getTrending();
        this.setState({trending: trendingListOfStocks.symbols})
    }

    render() {
        return (
            <div>
                <TrendingDiv 
                trendingList={this.state.trending}
                handleSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}
