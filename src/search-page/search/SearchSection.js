import React, { Component } from 'react'
import { searchStocks } from '../../utils/api-utils'
import SearchForm from './SearchForm'
import SearchItem from './SearchItem.js'

export default class SearchSection extends Component {
    state = {
        searchResults: []
    }
    handleSearchSubmit = async (search) => {
        const searchResults = await searchStocks(search);
        this.setState({
            searchResults: searchResults.result
        })
    }
    render() {
        return (
            <div className="searchSection border">
                <SearchForm handleSearchSubmit={this.handleSearchSubmit} />
                {
                    this.state.searchResults.length > 0 && this.state.searchResults.map( (stock, i) => {
                        return <SearchItem 
                                stockInfo={stock} 
                                token={this.props.token} 
                                key={i} 
                                handleStockSelect={this.props.handleStockSelect}
                                increaseFavoritesCount={this.props.increaseFavoritesCount}
                                />
                    }
                    )
                }
            </div>
        )
    }
}