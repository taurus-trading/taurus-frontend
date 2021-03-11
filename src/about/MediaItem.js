import React, { Component } from 'react'
import  linkedinImage from './assets/linkedin.png';
import githubImage from './assets/github.png';

export default class MediaItem extends Component {
    render() {
        return (
            <div className="media-links">
                <a href={this.props.linkedin}>
                    <img src={githubImage} alt="github" />
                </a>
                <a href={this.props.github}>
                    <img src={linkedinImage} alt="linkedin" />
                </a>
            </div>
        )
    }
}