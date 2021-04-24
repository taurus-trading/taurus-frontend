import React, { Component } from 'react'
import { searchStocks } from '../../utils/api-utils'
import SearchForm from './SearchForm'
import SearchItem from './SearchItem.js'
import Spinner from './../../components/Spinner.js'
import './search.css'

export default class SearchSection extends Component {
    state = {
        searchResults: [],
        loading: false,
    }
    handleSearchSubmit = async (search) => {
        this.setState({loading: true });
        const searchResults = await searchStocks(search);
        this.setState({
            searchResults: searchResults.result
        })
        this.setState({loading: false });
    }
    render() {
        return (
            <div className="searchSection border moduleStyle">
                <SearchForm handleSearchSubmit={this.handleSearchSubmit} />
                { this.state.loading && <Spinner /> } 
                {
                    this.state.searchResults.length > 0 
                        && this.state.searchResults.map( (stock, i) =>
                         <SearchItem 
                                stockInfo={stock} 
                                token={this.props.token} 
                                key={i} // indicies usually make pretty bad react keys, since you'll get duplicated if you do this in two places on the same page
                                handleStockSelect={this.props.handleStockSelect}
                                increaseFavoritesCount={this.props.increaseFavoritesCount}
                                />
                    )
                }
            </div>
        )
    }
}