import React, { Component } from 'react';
import { ReactTinyLink } from "react-tiny-link";
import './newuser.css';

export default class StockAdvice extends Component {
    render() {
        return (
            <div className='advice-articles'>
                <h1>Beginner Advice</h1>
                <ReactTinyLink
                cardSize="large"
                showGraphic={false}
                maxLine={2}
                minLine={1}
                url='https://www.nerdwallet.com/article/investing/how-to-invest-in-stocks'
                />
                <img src='https://www.nerdwallet.com/assets/blog/wp-content/uploads/2017/02/GettyImages-617563676-1920x1152.jpg' alt='desk'/>
                <ReactTinyLink
                cardSize="large"
                showGraphic={false}
                maxLine={2}
                minLine={1}
                url='https://www.clevergirlfinance.com/blog/how-to-start-investing/'
                />
                <img src='https://3mizy13z0lac30t3qw3dz1bj-wpengine.netdna-ssl.com/wp-content/uploads/2019/01/Investing-tips-for-women.jpg' alt='person reading newspaper'/>
                <ReactTinyLink
                cardSize="large"
                showGraphic={false}
                maxLine={2}
                minLine={1}
                url='https://www.nerdwallet.com/article/investing/investments-for-beginners'
                />
                <img src='https://www.nerdwallet.com/assets/blog/wp-content/uploads/2019/03/gettyimages-599689268-story-770x462.jpg' alt='person holding baby'/>
                <ReactTinyLink
                cardSize="large"
                showGraphic={false}
                maxLine={2}
                minLine={1}
                url='https://www.nerdwallet.com/article/investing/investments-for-beginners'
                />
            </div>
        )
    }
}
