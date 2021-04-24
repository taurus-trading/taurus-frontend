import React, { Component } from 'react'
import { getCurrentStockPrice } from '../../utils/api-utils'

export default class GraphHeader extends Component {
    state = {
        cost: '',
    }
    componentDidMount = async () => {
        const { c } = await getCurrentStockPrice(this.props.ticker);
        console.log(this.props.ticker);
        this.setState({cost: c});   
    }
    componentDidUpdate = async () => {
        const { c } = await getCurrentStockPrice(this.props.ticker);
        if(this.state.cost !== c){
            this.setState({cost: c }); 
        }
    }
    render() {
        return (
            <div className='graph-header-div'>
                <h1>{this.props.ticker}</h1>
                <h3>Current price: <span 
                className='new-cost'
                >${this.state.cost}</span></h3> 
            </div>
        )
    }
}
