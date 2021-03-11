import React, { Component } from 'react'
import ImageItem from './ImageItem.js';
import BioItem from './BioItem.js';
import MediaItem from './MediaItem.js';
import teamBios from './bios.js';
import './about.css';

export default class AboutPage extends Component {
    render() {
        return (
            <div className="bio-page">
                {teamBios.map(person => 
                    <div key={person.name} className="bio-items">
                        <h3>{person.name}</h3>
                        <ImageItem image={person.image} className="bio-image" />
                        <BioItem bio={person.bio} />
                        <MediaItem linkedin={person.linkedin} github={person.github} />
                    </div>
                )}
            </div>
        )
    }
}
