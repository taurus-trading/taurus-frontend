import React, { Component } from 'react'

export default class TrendingLI extends Component {
    state ={
        chosen: false,
        className: 'unChecked'
    }
    handleClassChange = async () =>{
       
        this.state.className === 'unChecked' ? this.setState({className: 'checked'}) : this.setState({classNamed: 'unChecked'});
        this.state.className === 'checked' ? this.setState({className: 'unChecked'}) : this.setState({classNamed: 'checked'});

    }
    render() {
    
        return (

                <div className={`trending-item ${this.state.className}`} 
                // onClick={()=>this.props.onClick(this.props.symbol, this.props.title) }
                onClick={()=> {
                    this.props.onClick(this.props.symbol, this.props.title);
                    this.handleClassChange(); 
                    }
                }
                // onClick={this.handleClassChange}
                >
                    <p className='symbol'>{this.props.symbol}</p>
                    <p className='title'>{this.props.title}</p>
                   
                </div>

        )
    }
}
