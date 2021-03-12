import React, { Component } from 'react'
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';


export default class Generate extends Component {
    render() {
        const renderLineChart = (
            <LineChart width={650} height={600} data={this.props.data}>
                <Line type="monotone" dataKey="price" stroke="#000" />
                <CartesianGrid stroke="#eee" />
                <XAxis interval={0} dataKey="name"/>
                <YAxis />
                <Tooltip />
            </LineChart>)
    
        return (
            <div>
                {renderLineChart}
            </div>
        )
    }
}
