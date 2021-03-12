import React, { Component } from 'react'
import GraphHeader from './GraphHeader.js';
import Chart from './Generate.js';
import DatePicker from './DatePicker.js'
import {getStockPriceHistory} from '../../utils/api-utils.js'
import {createConvertStartOfDay, generateInterval, getCurrentTimeMilli} from '../../utils/date-utils.js'
import './chart.css'

export default class StockGraph extends Component {
    state ={
        ticker: this.props.ticker,
        dataPoints: [],
        startDate: '',
        currentTimeMilli: '',
        priceInterval: 15,
    }
    
    componentDidMount = async () => {
        //by default graph is displayed from start of today's date
        await this.setState({startDate: createConvertStartOfDay()});
        this.setState({ticker: this.props.ticker});
       //by default graph is displayed up until the current time
        await this.setState({currentTimeMilli: getCurrentTimeMilli()});

        const data =  await getStockPriceHistory(this.state.ticker, 
            this.state.priceInterval, 
            this.state.currentTimeMilli, 
            this.state.startDate);

        this.setState({dataPoints: data.c});
    }
    componentDidUpdate = async () => {
        if(this.props.ticker !== this.state.ticker){
            this.setState({ticker: this.props.ticker})
            const interval = generateInterval(this.state.startDate , this.state.currentTimeMilli);
            await this.setState({priceInterval: interval})
            const data =  await getStockPriceHistory(this.state.ticker, 
                this.state.priceInterval, 
                this.state.currentTimeMilli, 
                this.state.startDate);
            this.setState({dataPoints: data.c});
        }
    }
    
    handleChange = (date) => {
        this.setState({startDate: (date.getTime() / 1000)});
    }

    onFormSubmit = async (e) => {
        e.preventDefault();
        this.setState({currentTimeMilli: getCurrentTimeMilli()});
        const interval = generateInterval(this.state.startDate , this.state.currentTimeMilli);
        await this.setState({priceInterval: interval})
        const data =  await getStockPriceHistory(this.state.ticker, 
            this.state.priceInterval, 
            this.state.currentTimeMilli, 
            this.state.startDate);
        this.setState({dataPoints: data.c})
    }
    render() {
        const data = this.state.dataPoints.map(dataPoint => {
            return { price:dataPoint}
        });
        return (
            <div className="graphDate moduleStyle">
                <div className='graph-div'>
                    <GraphHeader ticker={this.state.ticker}></GraphHeader>
                    <Chart data={data}></Chart>
                </div>
                <div className='date-picker-div'>
                    <DatePicker onSubmit={this.onFormSubmit} selected={this.state.startDate * 1000} onChange={this.handleChange} ></DatePicker>
                </div>
            </div>
        )
    }
}