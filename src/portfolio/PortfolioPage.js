import React, { Component } from 'react'
import DataTable from 'react-data-table-component';
import FavoriteItem from '../search-page/favorites/FavoritesItem.js';
// import stocks from './hard-coded-portfolio.js';
import { addToPortfolio, getUserPortfolio, getUserWatchList, deleteFromPortfolio } from '../utils/user-utils';
import { getCurrentStockPrice } from '../utils/api-utils'
import './portfolio.css';

const columns = [
  {
    name: 'User ID',
    selector: 'user_id',
    sortable: true,
  },
  {
    name: 'Transaction ID',
    selector: 'transaction_id',
    sortable: true,
    right: true,
  },
  {
    name: 'Ticker',
    selector: 'ticker',
    sortable: true,
    right: true,
  },
  {
    name: 'Date Purchased',
    selector: 'date_purchased',
    sortable: true,
    right: true,
  },
  {
    name: 'Quantity',
    selector: 'quantity',
    sortable: true,
    right: true,
  },
  {
    name: 'Purchase Price',
    selector: 'purchase_price',
    sortable: true,
    right: true,
  },
  {
    name: 'Cost Basis',
    selector: 'cost_basis',
    sortable: true,
    right: true,
  },
  {
    name: 'Current Price',
    selector: 'current_price',
    sortable: true,
    right: true,
  },
  {
    name: 'Unrealized Gain / (Loss)',
    selector: 'unrealized_gain_loss',
    sortable: true,
    right: true,
  },
  {
    name: 'Realized Gain / (Loss)',
    selector: 'realized_gain_loss',
    sortable: true,
    right: true,
  },

];
let selectedRowsArray = [];
const handleChange = (state) => {
  
  selectedRowsArray = state.selectedRows
  
}



export default class PortfolioPage extends Component {

    state = {
        watchlist: [],
        portfolio: [],
        currentPrice: [],
        ticker:'QQQ',
        selectedRows: [],

    }

    componentDidMount = async () => {

        await this.renderWatchlist();
        await this.fetchPortfolio();
        await this.fetchCurrentPrices();

    }

    fetchCurrentPrices = async () => {
        // const priceArray = [];
        
        const priceArray = await Promise.all(this.state.portfolio.map(async(stock) => {
          let price = await getCurrentStockPrice(stock.symbol);
          // priceArray.push(price.c)
          return price.c
        })
        )
        this.setState({currentPrice: priceArray})
    
    }

    renderWatchlist = async () => {
        const watchlist = await getUserWatchList(this.props.token)
        await this.setState({
            watchlist
        })
    }

    fetchPortfolio = async () => {
        const portfolio = await getUserPortfolio(this.props.token)
        await this.setState({
            portfolio
        })
    }

    handleAddToPortfolio = async (symbol, title) => {
        alert('added')
        await addToPortfolio(this.props.token, symbol, title, 5, 1)
        alert('api call ran')
    }

    handleDelete = async () => {
      console.log('selected rows:', selectedRowsArray)
      await selectedRowsArray.map(row => {

        return deleteFromPortfolio(this.props.token, row.transaction_id);
      })
      await this.fetchPortfolio();
    }

    render() {
      console.log(this.state);
        return (
            <div className='portfolio-wrapper'>
                <DataTable
                    selectableRows
                    onSelectedRowsChange = {handleChange}
                    Clicked
                    // Selected = {handleChange}
                    title='My Portfolio'
                    columns={columns}
                    data={
                        this.state.portfolio.map((item, i) => {
                          const currentPrice = this.state.currentPrice[i]
                            return {
                                user_id: item.user_id,
                                transaction_id: item.id,
                                ticker: item.symbol,
                                date_purchased: item.date_purchased,
                                quantity: item.quantity,
                                purchase_price: item.cost,
                                cost_basis: item.quantity * item.cost,
                                current_price: currentPrice,
                                unrealized_gain_loss: (currentPrice * item.quantity) - (item.quantity * item.cost),
                                realized_gain_loss: item.realized_gain_loss,
                            }
                        })
                    }
                />
                
                <button onClick={this.handleDelete}>Delete Rows</button>


            </div>
        )
    }
}
