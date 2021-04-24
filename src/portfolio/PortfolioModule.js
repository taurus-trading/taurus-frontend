import React, { Component } from 'react'
import { getCurrentStockPrice } from '../utils/api-utils'
import { addToPortfolio } from '../utils/user-utils'
import TextField from '@material-ui/core/TextField';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';

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
        if (this.props.ticker !== prevProps.ticker) {
            const { c: currentPrice } = await getCurrentStockPrice(this.props.ticker)
            this.setState({ currentPrice })
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

            <div className="portfolioModule ">
                <div className="innerCont">
                    <h2>{`Add ${this.props.ticker} to your portfolio at `}<span className="green">{`${this.state.currentPrice} per share`}</span></h2>
                    <form onSubmit={this.handleAddToPortfolio}>
                        <label>
                            {/* Quantity of Shares */}
                            {/* <input type="number" onChange={this.handleQuantityChange} /> */}
                            <TextField
                                label="Quantity"
                                // value={this.state.quantity}
                                type="number"
                                onChange={this.handleQuantityChange}
                                margin="normal"
                                // fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <MonetizationOnOutlinedIcon color="primary" />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </label>
                        <Button style={{marginTop: 20}} variant="contained" color="primary" type="submit">Buy</Button>
                    </form>
                </div>
            </div>

        )
    }
}
