import React, { Component } from 'react'
import { getUserWatchList } from '../../utils/user-utils'
import FavoriteItem from './FavoritesItem'
import Spinner from '../../components/Spinner.js'
import './favorites.css'

export default class Favorites extends Component {
    state = {
        watchlist: [],
        favoriteCount: this.props.favoritesCount,
        loading: false,
    }

    componentDidMount = async () => {
        this.setState({loading: true });
        await this.renderWatchlist();
        this.setState({loading: false});
    }
    componentDidUpdate = async (prevProps) => {
        if(this.props.favoritesCount !== prevProps.favoritesCount) {
            this.setState({loading: true });
            await this.renderWatchlist();
            this.setState({loading: false});
        }

    }
    renderWatchlist = async () => {
        const watchlist = await getUserWatchList(this.props.token)
        this.setState({loading: true });
        await this.setState({
            watchlist
        })
        this.setState({loading: false});
    }
    render() {
        return (

            <div className="favoritesSection border">
                {
                    this.state.loading && <Spinner /> 
                }  
                <h2 className="watchlist2">Your Watch List</h2>
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
