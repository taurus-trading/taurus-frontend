import React, { Component } from 'react'
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

import {getStockPriceHistory} from '../../utils/api-utils.js'
import {createConvertStartOfDay, getCurrentTimeMilli} from '../../utils/date-utils.js'



export default class StockGraph extends Component {
    state ={
        ticker: 'GME',
        dataPoints: [],
        startDate: '',
        endDate: '',
        currentTimeMilli: '',
        priceInterval: 'D',
    }


    componentDidMount = async () => {
        //by default graph is displayed from start of today's date
        await this.setState({startDate: createConvertStartOfDay()});
       //by default graph is displayed up until the current time
        await this.setState({currentTimeMilli: getCurrentTimeMilli()})
        const data =  await getStockPriceHistory(this.state.ticker, 
            this.state.priceInterval, 
            this.state.currentTimeMilli, 
            this.state.startDate);

        this.setState({dataPoints: data.c})
    }
    
 

     handleChange = (date) => {
    this.setState({
      startDate: (date.getTime() / 1000)
    })

    console.log(date);
  }

  onFormSubmit = async (e) => {
    e.preventDefault();
   
    console.log(e);
    console.log(this.state.startDate)
    await this.setState({currentTimeMilli: getCurrentTimeMilli()})
        const data =  await getStockPriceHistory(this.state.ticker, 
            this.state.priceInterval, 
            this.state.currentTimeMilli, 
            this.state.startDate);

        this.setState({dataPoints: data.c})

    // this.setState({startDate: set})
}

    render() {

        let interval = 0;
        const realData = this.state.dataPoints.map(dataPoint => {
           
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

                <form onSubmit={ this.onFormSubmit }>
                    <div className="form-group">
                    <DatePicker
                        selected={ this.state.startDate }
                        onChange={ this.handleChange }
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={20}
                        timeCaption="time"
                        dateFormat="MMMM d, yyyy h:mm aa"
                    />
                    <button className="btn btn-primary">Show Date</button>
                    </div>
                </form>


                {/* <form onSubmit={ this.onFormSubmit }>
                    <div className="form-group">
                        <DatePicker
                            selected={ this.state.startDate }
                            onChange={ this.handleEndDateChange }
                            name="startDate"
                            dateFormat="MM/dd/yyyy"
                        />
                        <button className="btn btn-primary">Show Date</button>
                    </div>
                </form> */}
            </div>
        )
    }
}