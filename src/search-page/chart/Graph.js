import React, { Component } from 'react'
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';
import {getStockPriceHistory} from '../../utils/api-utils.js'



export default class StockGraph extends Component {
    state ={
        ticker: 'GME',
        dataPoints: [],
        dateFrom: '',
        dateTo: '',
    }


    componentDidMount = async () => {
       //1605629727
        const data =  await getStockPriceHistory(this.state.ticker, 'D' , 1615332733
        , 1580544000
        );
        this.setState({dataPoints: data.c})
    }
    
    updateDateRange = async (e) => {

    }

    render() {
        
      

        let interval = 0;
        const realData = this.state.dataPoints.map(dataPoint => {
            console.log(dataPoint);
            // eslint-disable-next-line no-unused-expressions
            interval === 60 ? interval = 0 : interval += 15; 
            
            return {name: interval.toString(), price:dataPoint}
        });

    const data = [
        {name: 'Open', uv: 200, pv: 200, amt: 2400},
        {name: 'time interval', uv:600, pv: 200, amt: 1200},
        {name: '', uv:20, pv:20, amt: 10},
        {},];

 const renderLineChart = (
  <LineChart width={600} height={600} data={realData}>
    <Line type="monotone" dataKey="price" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>)
        
        return (
            <div>
                Graph of {this.state.ticker}
                {renderLineChart}
            </div>
        )
    }
}