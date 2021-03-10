import React, { Component } from 'react'
import { getUserWatchList } from '../../utils/user-utils'
import FavoriteItem from './FavoritesItem'
import './favorites.css'

export default class Favorites extends Component {
    state = {
        watchlist: [],
        favoriteCount: this.props.favoritesCount
    }

    componentDidMount = async () => {
        await this.renderWatchlist();
    }
    componentDidUpdate = async (prevProps) => {
        if(this.props.favoritesCount !== prevProps.favoritesCount) {

            await this.renderWatchlist();
        }

    }
    renderWatchlist = async () => {
        const watchlist = await getUserWatchList(this.props.token)
        await this.setState({
            watchlist
        })
    }
    render() {
        console.log(this.state)
        return (
            <div className="favoritesSection border">
                <>
                    {
                        this.state.watchlist.length > 0 && this.state.watchlist.map(item => {
                            return <FavoriteItem
                                key={item.id}
                                stockInfo={item}
                                handleStockSelect={this.props.handleStockSelect}
                                token={this.props.token}
                                renderWatchlist={this.renderWatchlist} />
                        })
                    }
                </>
            </div>
        )
    }
}
