import React, { Component } from 'react'
import DataTable from 'react-data-table-component';

const data = [{ user_id: 1, transaction_id: 5, ticker: 'GME', date_purchased: '2021-03-09', quantity: 10, purchase_price: 250, cost_basis: 2500, market_value: 265, unrealized_gain_loss: 150, realized_gain_loss: 0 },{ user_id: 1, transaction_id: 5, ticker: 'GME', date_purchased: '2021-03-09', quantity: 10, purchase_price: 250, cost_basis: 2500, market_value: 265, unrealized_gain_loss: 150, realized_gain_loss: 0 },{ user_id: 1, transaction_id: 5, ticker: 'GME', date_purchased: '2021-03-09', quantity: 10, purchase_price: 250, cost_basis: 2500, market_value: 265, unrealized_gain_loss: 150, realized_gain_loss: 0 } ];

const newData = data.map(item => {
    
    return {
        user_id: item.user_id,
        transaction_id: item.transaction_id,
        ticker: item.ticker,
        date_purchased: item.date_purchased,
        quantity: item.quantity,
        purchase_price: item.purchase_price,
        cost_basis: item.quantity * item.purchase_price,
        market_value: item.market_value,
        unrealized_gain_loss: item.market_value * item.quantity - item.cost_basis,
        realized_gain_loss: item.realized_gain_loss,
    }

   
})

console.log(newData);

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
    name: 'Market Value',
    selector: 'market_value',
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
