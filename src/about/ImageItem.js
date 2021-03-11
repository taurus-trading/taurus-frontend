import React, { Component } from 'react'
import './about.css';

export default class ImageItem extends Component {
    render() {
        return (
            <div className="bio-image">
                <img src={this.props.image} alt="profile" />
            </div>
        )
    }
}