import React, { Component } from 'react'
import SearchSection from '../search/SearchSection.js';
import Favorites from '../favorites/Favorites.js';
import './leftSideBar.css';

export default class LeftSidebar extends Component {
    state = {
        favoritesCount: 0
    }
    increaseFavoritesCount = () => {
        this.setState({
            favoritesCount: this.state.favoritesCount + 1
        })
    }
    decreaseFavoritesCount = () => {
        this.setState({
            favoritesCount: this.state.favoritesCount - 1
        })
    }
    render() {
        return (
            <div className="leftSideBarCont">
                <SearchSection
                    increaseFavoritesCount={this.increaseFavoritesCount}                
                    handleStockSelect={this.props.handleStockSelect}
                    token={this.props.token}
                    

                />

                <Favorites
                    decreaseFavoritesCount={this.decreaseFavoritesCount}
                    token={this.props.token}
                    favoritesCount = {this.state.favoritesCount}
                    handleStockSelect={this.props.handleStockSelect}

                />
            </div>
        )
    }
}
