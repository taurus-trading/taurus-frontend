import React, { Component } from 'react'
import DataTable from 'react-data-table-component';
import stocks from './hard-coded-portfolio.js';

const newData = stocks.map(item => {
    
    return {
        user_id: item.user_id,
        transaction_id: item.transaction_id,
        ticker: item.ticker,
        date_purchased: item.date_purchased,
        quantity: item.quantity,
        purchase_price: item.purchase_price,
        cost_basis: item.quantity * item.purchase_price,
        current_price: item.current_price,
        unrealized_gain_loss: (item.current_price * item.quantity) - (item.quantity * item.purchase_price),
        realized_gain_loss: item.realized_gain_loss,
    }

   
})


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
    render() {
        console.log(newData)
        return (
            <div>
                <DataTable
        title='My Portfolio'
        columns={columns}
        data={newData}
      />
            </div>
        )
    }
}
