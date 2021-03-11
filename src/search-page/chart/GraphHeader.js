import React, { Component } from 'react'
import { getCurrentStockPrice } from '../../utils/api-utils'

export default class GraphHeader extends Component {
    state = {
        cost: '',
    }
    componentDidMount = async () => {

        const priceObj = await getCurrentStockPrice(this.props.ticker);
        
        this.setState({cost: priceObj.c});      

    }
    componentDidUpdate = async () => {
        const priceObj = await getCurrentStockPrice(this.props.ticker);
        if(this.state.cost === priceObj.c){
            return;
        }
        this.setState({cost: priceObj.c}); 
    }
    render() {
        console.log(this.state.cost);
        return (
            <div>
                <h1>Graph for {this.props.ticker}</h1>
                <h3>Current price <span className='new-cost'>{this.state.cost}</span></h3> 
            </div>
        )
    }
}
