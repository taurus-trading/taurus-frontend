import React, { Component } from 'react'
import DataTable from 'react-data-table-component';
// import FavoriteItem from '../search-page/favorites/FavoritesItem.js';
// import stocks from './hard-coded-portfolio.js';
import { addToPortfolio, getUserPortfolio, deleteFromPortfolio } from '../utils/user-utils';
import { getCurrentStockPrice } from '../utils/api-utils'
import './portfolio.css';

const columns = [
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
    name: 'Gain / (Loss)',
    selector: 'gain_loss',
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
        ticker:'',
        selectedRows: [],
        totalGain: 0
    }

    componentDidMount = async () => {
        await this.fetchPortfolio();
    }

    fetchCurrentPrices = async () => {        
        const priceArray = await Promise.all(this.state.portfolio.map(async(stock) => {
          let price = await getCurrentStockPrice(stock.symbol);
          return price.c
        })
        )
        this.setState({currentPrice: priceArray})
    
    }

    fetchPortfolio = async () => {
        const portfolio = await getUserPortfolio(this.props.token)
        await this.setState({
            portfolio
        })
        await this.fetchCurrentPrices();
        const gainArr = this.calculateGainArr();
        const totalGain = this.calculateTotalGains(gainArr);
        this.setState({
          totalGain
        })
    }
    
    calculateGainArr = () => {
      const gainArr = this.state.portfolio.map((transaction, i) => {
        const costBasis = transaction.cost * transaction.quantity;
        const currentEquity = this.state.currentPrice[i] * transaction.quantity;
        return currentEquity - costBasis;
      }) 
      return gainArr;
    }
    calculateTotalGains = (gainArr) => {
      return gainArr.reduce((acc, item) => {
        return acc + item
      }, 0)
    }

    handleAddToPortfolio = async (symbol, title) => {
        alert('added')
        await addToPortfolio(this.props.token, symbol, title, 5, 1)
        alert('api call ran')
    }

    handleDelete = async () => {
      console.log('selected rows:', selectedRowsArray)
      await Promise.all(selectedRowsArray.map(row => {

        return deleteFromPortfolio(this.props.token, row.transaction_id);
      }))
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
                                transaction_id: item.id,
                                ticker: item.symbol,
                                date_purchased: new Date(Number(item.date_purchased)).toString(),
                                quantity: item.quantity,
                                purchase_price: Number(item.cost).toFixed(2),
                                cost_basis: Number(item.quantity * item.cost).toFixed(2),
                                current_price: Number(currentPrice).toFixed(2),
                                gain_loss: Number((currentPrice * item.quantity) - (item.quantity * item.cost)).toFixed(2),
                            }
                        })
                    }
                />
                <p className="totalGainDiv">Total Gain/(Loss): ${this.state.totalGain}</p>
                <button onClick={this.handleDelete}>Delete Rows</button>



            </div>
        )
    }
}
