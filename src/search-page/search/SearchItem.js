import React, { Component } from 'react'
import { addToWatchList } from '../../utils/user-utils.js'
import  { IconButton }  from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';



export default class SearchItem extends Component {

    handleAddToFavs = async () => {
        await addToWatchList(
            this.props.token, 
            this.props.stockInfo.symbol, 
            this.props.stockInfo.description
        )
        this.props.increaseFavoritesCount();
    }
    render() {
        const iconStyle = {
            color: 'blue',
            height: 40,
            width: 40,

        }
        return (
            <div 
            className="searchItem">
                <div onClick={() => {this.props.handleStockSelect(this.props.stockInfo.symbol)}}>
                    <p className='searchSymbol'>{this.props.stockInfo.symbol}</p>
                    <p className='searchTitle'>{this.props.stockInfo.description}</p>
                </div>
                <IconButton style={iconStyle} onClick={this.handleAddToFavs}><AddCircleOutlineIcon/></IconButton>
            </div>
        )
    }
}