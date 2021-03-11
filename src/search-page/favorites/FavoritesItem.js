import React, { Component } from 'react'
import { deleteFromWatchList } from '../../utils/user-utils'

export default class FavoriteItem extends Component {
    state = {
        token: this.props.token
    }
    handleRemoveFromFavs = async () => {
        await deleteFromWatchList(this.props.token, this.props.stockInfo.id);
        await this.props.renderWatchlist(); 
    }
    render() {
        return (
            <div className='favorite-item' onClick={() => {this.props.handleStockSelect(this.props.stockInfo.symbol)}}>
                <p>{this.props.stockInfo.symbol}</p>
                <p>{this.props.stockInfo.title}</p>
                <button onClick={this.handleRemoveFromFavs}>Remove from Watch List</button>
            </div>
        )
    }
}