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
                {
                    this.state.loading && <Spinner /> 
                } 
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