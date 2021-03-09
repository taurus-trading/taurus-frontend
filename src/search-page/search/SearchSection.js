import React, { Component } from 'react'
import { searchStocks } from '../../utils/api-utils'
import SearchForm from './SearchForm'
import SearchItem from './SearchItem.js'

export default class SearchSection extends Component {
    render() {
        state = {
            searchResults: []
        }
        handleSearchSubmit = async (search) => {
            const searchResults = await searchStocks(search);
            this.setState({
                searchResults
            })
        }
        return (
            <div>
                <SearchForm handleSubmit={this.handleSearchSubmit} />
                {
                    this.state.searchResults.length > 0 && this.state.searchResults.map( stock => {
                        return <StockItem stockInfo={stock}/>
                    }
                    )
                }
            </div>
        )
    }
}