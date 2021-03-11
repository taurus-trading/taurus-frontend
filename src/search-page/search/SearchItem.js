import React, { Component } from 'react'
import { addToWatchList } from '../../utils/user-utils.js'

export default class SearchItem extends Component {

    handleAddToFavs = async () => {
        await addToWatchList(this.props.token, this.props.stockInfo.symbol, this.props.stockInfo.description)
        this.props.increaseFavoritesCount();
    }
    render() {
        return (
            <div className='search-item' onClick={() => {this.props.handleStockSelect(this.props.stockInfo.symbol)}}>
                <p>{this.props.stockInfo.symbol}</p>
                <p>{this.props.stockInfo.description}</p>
                <button onClick={this.handleAddToFavs}>Add to Watch List</button>
            </div>
        )
    }
}