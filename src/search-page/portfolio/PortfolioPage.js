import React, { Component } from 'react'
import DataTable from 'react-data-table-component';
import FavoriteItem from '../favorites/FavoritesItem.js';
// import stocks from './hard-coded-portfolio.js';
import { addToPortfolio, getUserPortfolio, getUserWatchList } from '../../utils/user-utils';
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


export default class PortfolioPage extends Component {

    state = {
        watchlist: [],
        portfolio: [],
    }

    componentDidMount = async () => {
        await this.renderWatchlist();
        await this.fetchPortfolio();
    }

    renderWatchlist = async () => {
        const watchlist = await getUserWatchList(this.props.token)
        await this.setState({
            watchlist
        })
    }

    fetchPortfolio = async () => {
        const portfolio = await getUserPortfolio(this.props.token)
        this.setState({
            portfolio
        })
    }

    handleAddToPortfolio = async (symbol, title) => {
        alert('added')
        await addToPortfolio(this.props.token, symbol, title, 5, 1)
        alert('api call ran')
    }

    render() {

        return (
            <div className='portfolio-wrapper'>
                <DataTable
                    title='My Portfolio'
                    columns={columns}
                    data={
                        this.state.portfolio.map(item => {
                            return {
                                user_id: item.user_id,
                                transaction_id: item.transaction_id,
                                ticker: item.symbol,
                                date_purchased: item.date_purchased,
                                quantity: item.quantity,
                                purchase_price: item.cost,
                                cost_basis: item.quantity * item.cost,
                                current_price: item.current_price,
                                unrealized_gain_loss: (item.current_price * item.quantity) - (item.quantity * item.cost),
                                realized_gain_loss: item.realized_gain_loss,
                            }
                        })
                    }
                />
                <div className='watchlist'>
                    {
                        this.state.watchlist.length > 0 && this.state.watchlist.map(item => {
                            return <div key={item.title}>
                                <FavoriteItem
                                key={item.id}
                                stockInfo={item}
                                token={this.props.token}
                                renderWatchlist={this.renderWatchlist}
                                />
                                <button 
                                    key={item.symbol}
                                    className='add-portfolio'
                                    onClick={()=>this.handleAddToPortfolio(item.symbol, item.title)}
                                    >
                                    Add to Portfolio
                                </button>
                            </div>
                        })
                        }
                </div>

            </div>
        )
    }
}
