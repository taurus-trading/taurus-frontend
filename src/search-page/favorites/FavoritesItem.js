import React, { Component } from 'react'
import { deleteFromWatchList } from '../../utils/user-utils'
import  { IconButton }  from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import './favorites.css'
export default class FavoriteItem extends Component {
    state = {
        token: this.props.token
    }
    handleRemoveFromFavs = async () => {
        await deleteFromWatchList(this.props.token, this.props.stockInfo.id);
        await this.props.renderWatchlist(); 
    }
    render() {
        const iconStyle = {
            color: 'red',
            height: 40,
            width: 40,

        }
        return (
            <div className="favItem">
                <div onClick={() => {this.props.handleStockSelect(this.props.stockInfo.symbol)}}>
                    <p className='favSymbol'>{this.props.stockInfo.symbol}</p>
                    <p className='favTitle'>{this.props.stockInfo.title}</p>
                </div>
                <IconButton style={iconStyle} onClick={this.handleRemoveFromFavs}><DeleteOutlineIcon/></IconButton>
            </div>

        )
    }
}