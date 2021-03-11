import React, { Component } from 'react'
import { getCurrentStockPrice } from '../utils/api-utils'
import { addToPortfolio } from '../utils/user-utils'

export default class PortfolioModule extends Component {

    state = {
        quantity: 0,
        ticker: this.props.ticker,
        currentPrice: 0
    }

    componentDidMount = async () => {
        const currentPrice = await getCurrentStockPrice(this.props.ticker)
        this.setState({
            currentPrice: currentPrice.c
        })
    }

    componentDidUpdate = async (prevProps) => {
        if(this.props.ticker !== prevProps.ticker){
            const currentPrice = await getCurrentStockPrice(this.props.ticker)
            this.setState({
                currentPrice: currentPrice.c
            })
        }
    }

    handleAddToPortfolio = async (e) => {
        e.preventDefault();
        await addToPortfolio(this.props.token, this.props.ticker, 'bigint', this.state.quantity, this.state.currentPrice)
    }


    handleQuantityChange = (e) => {
        this.setState({
            quantity: Number(e.target.value)
        })
    }

        render() {
        return (

            <div>
                <h2>{`Add ${this.props.ticker} to your portfolio at $${this.state.currentPrice} per share`}</h2>
                <form onSubmit={this.handleAddToPortfolio}>
                    <label>
                        Quantity of Shares
                        <input type="number" onChange={this.handleQuantityChange}/>
                    </label>
                    <button>Buy</button>
                </form>
            </div>
            
        )
    }
}
