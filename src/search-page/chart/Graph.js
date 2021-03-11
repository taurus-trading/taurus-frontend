import React, { Component } from 'react'
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import GraphHeader from './GraphHeader.js';

import {getStockPriceHistory} from '../../utils/api-utils.js'
import {createConvertStartOfDay, generateInterval, getCurrentTimeMilli} from '../../utils/date-utils.js'
import './chart.css'



export default class StockGraph extends Component {
    state ={
        ticker: '',
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

        const renderLineChart = (
        <LineChart width={650} height={600} data={data}>
            <Line type="monotone" dataKey="price" stroke="#000" />
            <CartesianGrid stroke="#000" />
            <XAxis />
            <YAxis />
            <Tooltip />
        </LineChart>)

 
        return (
            <>
                <div className='graph-div'>
                    <GraphHeader ticker={this.props.ticker}></GraphHeader>
                    {renderLineChart}
                </div>

                <div className='date-picker-div'>
                    <form onSubmit={ this.onFormSubmit }>
                        <div className="form-group">
                        <DatePicker
                            selected={this.state.startDate * 1000}
                            onChange={ this.handleChange }
                            dateFormat="MMMM d, yyyy"
                            />
                        <button className="btn btn-primary">Update Graph</button>
                        </div>
                    </form>
                </div>
                <div>

                </div>
            </>
        )
    }
}