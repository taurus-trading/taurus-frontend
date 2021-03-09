import React, { Component } from 'react'
import SearchSection from './search/SearchSection.js';
import Favorites from './favorites/Favorites.js'
import StockGraph from './chart/Graph.js';
import NoteDisplay from './details/NotesDisplay.js';
import TweetsDiv from './social/TweetsDiv.js';
 

export default class Dashboard extends Component {
    state= {
        ticker: 'GME',
        token: '',
    }

    render() {
        return (
            <>
            <div>
                <SearchSection


                ticker={this.state.ticker}


                />
                
                <Favorites 


                token={this.state.token}


                />

            </div>
            <div>
                <StockGraph 


                ticker={this.state.ticker}


                />

                <NoteDisplay 
                
                
                />
            </div>

            <div>
                <TweetsDiv 
                
                
                />
            </div>

            </>
        )
    }
}