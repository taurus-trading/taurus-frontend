import React, { Component } from 'react'
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

import {getStockPriceHistory} from '../../utils/api-utils.js'
import {createConvertStartOfDay, generateInterval, getCurrentTimeMilli} from '../../utils/date-utils.js'



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
        let interval = 0;
        const realData = this.state.dataPoints.map(dataPoint => {
            // eslint-disable-next-line no-unused-expressions
            this.state.interval === 60 ? interval = 0 : interval += 15; 
            return {name: interval.toString(), price:dataPoint}
        });
        const renderLineChart = (
        <LineChart width={800} height={600} data={realData}>
            <Line type="monotone" dataKey="price" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
        </LineChart>)
        
        return (
            <div>
                Graph of {this.props.ticker}
                {renderLineChart}
                <form onSubmit={ this.onFormSubmit }>
                    <div className="form-group">
                    <DatePicker
                        selected={this.state.startDate * 1000}
                        onChange={ this.handleChange }
                        // showTimeSelect
                        // timeFormat="HH:mm"
                        // timeIntervals={20}
                        // timeCaption="time"
                        dateFormat="MMMM d, yyyy"
                    />
                    <button className="btn btn-primary">Show Date</button>
                    </div>
                </form>
            </div>
        )
    }
}