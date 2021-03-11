import React, { Component } from 'react'

export default class BioItem extends Component {
    render() {
        return (
            <div className="paragraph">
                <p>{this.props.bio}</p>
            </div>
        )
    }
}


